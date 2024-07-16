import React, { Fragment} from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Breadcrumbs } from '../../../AbstractElements';
import { LeaderboardHarian } from '../../../Constant';
import HeaderCard from '../../Common/Component/HeaderCard';

const RekapHarianMuhajirinKids = () => {
  

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Rekap Harian" parent="Masjid Al Muharjirin" title="Rekap Harian" />
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
                

              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default RekapHarianMuhajirinKids;
