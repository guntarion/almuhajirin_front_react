import React, { Fragment } from 'react';
import { Breadcrumbs} from '../../../AbstractElements';
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap';

const HomeBlankPage = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle='BERANDA' parent='Beranda'/>
      <Container fluid={true}>
        <Row>
          <Col sm='12'>
            <Card>
              <CardHeader>
              </CardHeader>
              <CardBody>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default HomeBlankPage;
