import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'reactstrap';

const CounterBaikBurukScore = () => {
  const [positiveCounts, setPositiveCounts] = useState([0, 0, 0, 0, 0]);
  const [negativeCounts, setNegativeCounts] = useState([0, 0, 0, 0]);
  const [positiveScore, setPositiveScore] = useState(0);
  const [negativeScore, setNegativeScore] = useState(0);
  const [lastClicked, setLastClicked] = useState('');

  const positiveLabels = ["Kedatangan", "Iqomat", "Wudhu", "Shof", "Dzikir"];
  const negativeLabels = ["Tak Khusyu Sholat", "Tak Khusyu Kajian", "Nyampah", "Akhlak Buruk"];

  useEffect(() => {
    const posScore = positiveCounts.reduce((sum, count) => sum + count, 0);
    const negScore = negativeCounts.reduce((sum, count) => sum + count, 0);
    setPositiveScore(posScore);
    setNegativeScore(negScore * -1);
  }, [positiveCounts, negativeCounts]);

  const handlePositiveButtonClick = (index) => {
    setPositiveCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] = (newCounts[index] + 1) % 6;
      return newCounts;
    });
    setLastClicked(positiveLabels[index]);
  };

  const handleNegativeButtonClick = (index) => {
    setNegativeCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] = (newCounts[index] + 1) % 6;
      return newCounts;
    });
    setLastClicked(negativeLabels[index]);
  };

  const getButtonColor = (count, type) => {
    if (count === 0) {
      return 'dark';
    }
    return type === 'negative' ? 'danger' : 'primary';
  };

  const getBadgeText = () => {
    const totalScore = positiveScore + negativeScore;
    if (totalScore < 5) {
      return '';
    } else if (totalScore < 7) {
      return 'BRONZE';
    } else if (totalScore <= 11) {
      return 'SILVER';
    } else {
      return 'GOLD';
    }
  };

  const columnStyle = {
    border: '1px solid #ddd',
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
    <div style={componentStyle}>
      <Row style={{ border: '1px solid #ddd', textAlign: 'center' }}>
        <Col style={columnStyle}>Name of Student</Col>
        <Col style={columnStyle}>{positiveScore} | {negativeScore}</Col>
        <Col style={columnStyle}>4</Col> {/* Total Monthly Score placeholder */}
        <Col style={columnStyle}>{lastClicked}</Col> {/* Monthly Rank placeholder */}
      </Row>
      <Row style={{ border: '1px solid #ddd', textAlign: 'center' }}>
        {positiveCounts.map((count, index) => (
          <Col key={index} style={columnStyle}>
            <Button color={getButtonColor(count, 'positive')} onClick={() => handlePositiveButtonClick(index)}>
              {count}
            </Button>
          </Col>
        ))}
      </Row>
      <Row style={{ border: '1px solid #ddd', textAlign: 'center' }}>
        {negativeCounts.map((count, index) => (
          <Col key={index + 5} style={columnStyle}>
            <Button color={getButtonColor(count, 'negative')} onClick={() => handleNegativeButtonClick(index)}>
              {count}
            </Button>
          </Col>
        ))}
        <Col style={columnStyle}>{getBadgeText()}</Col> {/* Last cell */}
      </Row>
    </div>
  );
};

export default CounterBaikBurukScore;
