
import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'reactstrap';

const CounterBaikAndBurukMKids = () => {
  const [counts, setCounts] = useState(Array(9).fill(0));
  const [blueTotal, setBlueTotal] = useState(0);
  const [redTotal, setRedTotal] = useState(0);

  useEffect(() => {
    const blueSum = counts.slice(0, 5).reduce((sum, count) => sum + count, 0);
    const redSum = counts.slice(5).reduce((sum, count) => sum + count, 0);
    setBlueTotal(blueSum);
    setRedTotal(redSum * -1);
  }, [counts]);

  const handleButtonClick = (index) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] = (newCounts[index] + 1) % 6;
      return newCounts;
    });
  };

  const getButtonColor = (count, index) => {
    if (count === 0) {
      return 'dark';
    }
    return index < 5 ? 'primary' : 'danger';
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
      <Col style={columnStyle}>{`${blueTotal} | ${redTotal}`}</Col>
      {counts.map((count, index) => (
        <Col key={index} style={{ ...columnStyle, width: '50px' }}>
          <Button color={getButtonColor(count, index)} onClick={() => handleButtonClick(index)}>
            {count}
          </Button>
        </Col>
      ))}
    </Row>
  );
};

export default CounterBaikAndBurukMKids;