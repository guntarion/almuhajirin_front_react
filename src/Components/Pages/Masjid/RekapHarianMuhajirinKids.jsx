import React, { Fragment, useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import axios from 'axios';
import { Breadcrumbs } from '../../../AbstractElements';
import { LeaderboardHarian } from '../../../Constant';
import HeaderCard from '../../Common/Component/HeaderCard';
import DailyLeaderboard from '../../ComponentMuhajirin/DailyLeaderboard';

const RekapHarianMuhajirinKids = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDailyLeaderboard = async () => {
      try {
        const today = new Date().toISOString().split('T')[0];

        const response = await axios.get('http://localhost:8000/masjid/leaderboard/daily/', {
          params: { date: today }
        });

        setLeaderboard(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching daily leaderboard data:', error);
        setLoading(false);
      }
    };

    fetchDailyLeaderboard();
  }, []);

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Rekap Harian" parent="Masjid Al Muhajirin" title="Rekap Harian" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <HeaderCard title={LeaderboardHarian} span1="Muhajirin Kids Hebat"/>
              <CardBody>
                <Row className="table-header">
                  <Col>RANGKING</Col>
                  <Col>NAMA</Col>
                  <Col>BADGE</Col>
                  <Col>HASANAH</Col>
                  <Col>SAYYIAH</Col>
                </Row>
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  leaderboard.map((student, index) => (
                    <DailyLeaderboard key={student.id} student={student} rank={index + 1} />
                  ))
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default RekapHarianMuhajirinKids;
