import React, { Fragment, useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import axios from 'axios';
import { Breadcrumbs } from '../../../AbstractElements';
import { MuhajirinKidsInput } from '../../../Constant';
import HeaderCard from '../../Common/Component/HeaderCard';
import LeaderboardStudent from '../../ComponentMuhajirin/LeaderboardStudent';
import './RekapMuhajirinKids.css'; // Import the CSS file

const RekapMuhajirinKids = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1).toISOString().split('T')[0];
        const endDate = new Date().toISOString().split('T')[0];

        const response = await axios.get('http://localhost:8000/masjid/leaderboard/', {
          params: { start_date: startDate, end_date: endDate }
        });

        setLeaderboard(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Muhajirin Kids" parent="Rekap Monitoring Aktivitas" title="Muhajirin Kids" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <HeaderCard title={MuhajirinKidsInput} span1="Input Kegiatan Harian"/>
              <CardBody>
                <Row className="table-header">
                  <Col>RANGKING</Col>
                  <Col>NAMA</Col>
                  <Col>PANGKAT</Col>
                  <Col>PAPALA</Col>
                  <Col>HASANAH</Col>
                  <Col>SAYYIAH</Col>
                </Row>
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  leaderboard.map((student, index) => (
                    <LeaderboardStudent key={student.id} student={student} rank={index + 1} isOdd={index % 2 !== 0} />
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

export default RekapMuhajirinKids;
