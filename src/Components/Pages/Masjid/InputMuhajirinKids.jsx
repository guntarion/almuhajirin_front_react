import React, { Fragment, useState } from 'react';
import { Container, Row, Col, Card, CardBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Breadcrumbs, P } from '../../../AbstractElements';
import { MuhajirinKidsInput } from '../../../Constant';
import HeaderCard from '../../Common/Component/HeaderCard';
import CounterBaikAndBurukMKids from '../../ComponentMuhajirin/CounterBaikAndBurukMKids';

const InputMuhajirinKids = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedName, setSelectedName] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleNameChange = (event) => {
    setSelectedName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted data:', {
      date: selectedDate,
      name: selectedName,
    });
    // Add your submission logic here
  };

  const columnStyle = {
    border: '1px solid #ddd',
    padding: '5px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Input Kegiatan" parent="Masjid Al Muhajirin" title="Input Kegiatan" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <HeaderCard title={MuhajirinKidsInput} span1="Input Kegiatan Harian" span2="Muhajirin Kids" />
              <CardBody>
                <P>{'Contohnya nih.'}</P>
                <Form onSubmit={handleSubmit}>
                  <FormGroup style={{ width: '200px' }}>
                    <Label for="datePicker">Select Date</Label>
                    <DatePicker
                      id="datePicker"
                      selected={selectedDate}
                      onChange={handleDateChange}
                      className="form-control"
                    />
                  </FormGroup>
                  <FormGroup tag="fieldset">
                    <legend>Recorder</legend>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="name" value="Adit" onChange={handleNameChange} />{' '}
                        Adit
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="name" value="Fayat" onChange={handleNameChange} />{' '}
                        Fayat
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="name" value="Rizky" onChange={handleNameChange} />{' '}
                        Rizky
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input type="radio" name="name" value="Marbot" onChange={handleNameChange} />{' '}
                        Marbot 4
                      </Label>
                    </FormGroup>
                  </FormGroup>
                  
                </Form>
                <Row style={{ border: '1px solid #ddd', textAlign: 'center' }}>
                  <Col style={columnStyle}>NAMA</Col>
                  <Col style={columnStyle}>Skor</Col>
                  <Col style={columnStyle}>Dtg</Col>
                  <Col style={columnStyle}>Iqo</Col>
                  <Col style={columnStyle}>Wud</Col>
                  <Col style={columnStyle}>Shf</Col>
                  <Col style={columnStyle}>Dzk</Col>
                  <Col style={columnStyle}>Ttb</Col>
                  <Col style={columnStyle}>HP</Col>
                  <Col style={columnStyle}>Ktr</Col>
                  <Col style={columnStyle}>Akh</Col>
                </Row>
                <CounterBaikAndBurukMKids />
                <CounterBaikAndBurukMKids />
                <CounterBaikAndBurukMKids />

                <br></br>
                <Button type="submit" color="primary">Submit</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default InputMuhajirinKids;  