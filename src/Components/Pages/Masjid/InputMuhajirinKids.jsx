import React, { Fragment, useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardBody, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { Breadcrumbs, P } from '../../../AbstractElements';
import { MuhajirinKidsInput } from '../../../Constant';
import HeaderCard from '../../Common/Component/HeaderCard';
import CounterBaikBurukScore from '../../ComponentMuhajirin/CounterBaikBurukScore';

const InputMuhajirinKids = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedName, setSelectedName] = useState('');
  const [kids, setKids] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    let isMounted = true; // Track whether the component is mounted

    const fetchKids = async () => {
      try {
        const response = await axios.get('http://localhost:8000/masjid/kids/');
        if (isMounted) { // Only update state if the component is mounted
          console.log('Fetched kids:', response.data); // Log the fetched data
          setKids(response.data);
          setLoading(false); // Set loading to false once data is fetched
        }
      } catch (error) {
        if (isMounted) {
          console.error('Error fetching kids data:', error);
          setLoading(false); // Set loading to false in case of error
        }
      }
    };

    fetchKids();

    return () => {
      isMounted = false; // Cleanup function to set isMounted to false
    };
  }, []);

  useEffect(() => {
    console.log('Kids state useEffect:', kids); // Log the kids state
  }, [kids]);

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
    padding: '5px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const componentStyle = {
    marginBottom: '20px', // Adjust as needed
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
                <Row style={{ borderBottom: '1px solid #ddd', textAlign: 'center' }}>
                  <Col style={columnStyle}>NAMA</Col>
                  <Col style={columnStyle}>Positive Score | Negative Score</Col>
                  <Col style={columnStyle}>Badge</Col>
                  <Col style={columnStyle}>Total Monthly Score</Col>
                  <Col style={columnStyle}>Last Clicked</Col>
                </Row>
                <Row style={{ textAlign: 'center' }}>
                  <Col style={columnStyle}>+ DTG</Col>
                  <Col style={columnStyle}>+ IQO</Col>
                  <Col style={columnStyle}>+ WUD</Col>
                  <Col style={columnStyle}>+ SHF</Col>
                  <Col style={columnStyle}>+ DZK</Col>
                </Row>
                {loading ? (
                  <P>{'Loading...'}</P>
                ) : (
                  kids.map((kid) => (
                    <div style={componentStyle} key={kid.id}>
                      <CounterBaikBurukScore kidId={kid.id} kidName={kid.nama_panggilan} selectedDate={selectedDate} selectedName={selectedName} />
                    </div>
                  ))
                )}
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
