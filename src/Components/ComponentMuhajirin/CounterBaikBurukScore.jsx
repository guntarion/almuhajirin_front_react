import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'reactstrap';
import axios from 'axios';

const CounterBaikBurukScore = ({ kidId, kidName, selectedDate, selectedName }) => {
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
    padding: '5px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const componentStyle = {
    marginBottom: '20px', // Adjust as needed
  };

  const handleSubmit = async () => {
    const activityData = {
      aktivitas_kedatangan: positiveCounts[0],
      aktivitas_iqomat: positiveCounts[1],
      aktivitas_wudhu: positiveCounts[2],
      aktivitas_shof: positiveCounts[3],
      aktivitas_dzikir: positiveCounts[4],
      aktivitas_takkhusyusholat: negativeCounts[0],
      aktivitas_takkhusyukajian: negativeCounts[1],
      aktivitas_nyampah: negativeCounts[2],
      aktivitas_akhlakburuk: negativeCounts[3],
      date_created: selectedDate.toISOString().split('T')[0], // Ensure only date is sent
      recorder_name: selectedName, // Add recorder's name
    };

    try {
      const response = await axios.post(`http://localhost:8000/masjid/kids/${kidId}/activities/`, activityData);
      console.log('Activity data submitted:', response.data);
    } catch (error) {
      console.error('Error submitting activity data:', error);
    }
  };

  return (
    <div style={componentStyle}>
      <Row style={{ borderBottom: '1px solid #ddd', textAlign: 'center' }}>
        <Col style={columnStyle}>{kidName}</Col>
        <Col style={columnStyle}>{positiveScore} | {negativeScore}</Col>
        <Col style={columnStyle}>{getBadgeText()}</Col> {/* Badge text */}
        <Col style={columnStyle}>4</Col> {/* Total Monthly Score placeholder */}
        <Col style={columnStyle}>{lastClicked}</Col> {/* Monthly Rank placeholder */}
      </Row>
      <Row style={{ textAlign: 'center' }}>
        {positiveCounts.map((count, index) => (
          <Col key={index} style={columnStyle}>
            <Button color={getButtonColor(count, 'positive')} onClick={() => handlePositiveButtonClick(index)}>
              {count}
            </Button>
          </Col>
        ))}
      </Row>
      <Row style={{ textAlign: 'center' }}>
        {negativeCounts.map((count, index) => (
          <Col key={index + 5} style={columnStyle}>
            <Button color={getButtonColor(count, 'negative')} onClick={() => handleNegativeButtonClick(index)}>
              {count}
            </Button>
          </Col>
        ))}
        <Col style={columnStyle}><Button onClick={handleSubmit}>Submit</Button></Col> {/* Empty last cell */}
      </Row>
      
    </div>
  );
};

export default CounterBaikBurukScore;
