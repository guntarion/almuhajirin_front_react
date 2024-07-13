import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'reactstrap';

const CounterMuhajirinKids = ({ mode }) => {
  const [counts, setCounts] = useState([0, 0, 0, 0, 0]);
  const [totalScore, setTotalScore] = useState(0);

  useEffect(() => {
    const score = counts.reduce((sum, count) => sum + count, 0);
    setTotalScore(mode === 'buruk' ? score * -1 : score);
  }, [counts, mode]);

  const handleButtonClick = (index) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] = (newCounts[index] + 1) % 6;
      return newCounts;
    });
  };

  const getButtonColor = (count) => {
    if (count === 0) {
      return 'dark';
    }
    return mode === 'buruk' ? 'danger' : 'primary';
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
    <Row style={{ border: '1px solid #ddd', textAlign: 'center' }}>
      <Col style={columnStyle}>Name of Student</Col>
      {counts.map((count, index) => (
        <Col key={index} style={columnStyle}>
          <Button color={getButtonColor(count)} onClick={() => handleButtonClick(index)}>
            {count}
          </Button>
        </Col>
      ))}
      <Col style={columnStyle}>{totalScore}</Col>
    </Row>
  );
};

export default CounterMuhajirinKids;