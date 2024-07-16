import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'reactstrap';
import axios from 'axios';

import bronzeBadge from '../../assets/images/rank/a-bronze.png';
import silverBadge from '../../assets/images/rank/a-silver.png';
import goldBadge from '../../assets/images/rank/a-gold.png';

const CounterBaikBurukScore = ({ kidId, kidName, selectedDate, selectedName }) => {
  const [positiveCounts, setPositiveCounts] = useState([0, 0, 0, 0, 0]);
  const [negativeCounts, setNegativeCounts] = useState([0, 0, 0, 0]);
  const [positiveScore, setPositiveScore] = useState(0);
  const [negativeScore, setNegativeScore] = useState(0);
  const [lastClicked, setLastClicked] = useState('');

  const positiveLabels = ["Kedatangan", "Iqomat", "Wudhu", "Shof", "Dzikir"];
  const negativeLabels = ["Tak Khusyu Sholat", "Tak Khusyu Kajian", "Nyampah", "Akhlak Buruk"];

  const fetchActivityData = async () => {
    const startDate = selectedDate.toISOString().split('T')[0];
    const endDate = selectedDate.toISOString().split('T')[0];

    try {
      const response = await axios.get(`http://localhost:8000/masjid/kids/${kidId}/activities/`, {
        params: { start_date: startDate, end_date: endDate }
      });
      console.log('Fetched activity data:', response.data);

      // Map the activity data to set the counts
      const activity = response.data[0]; // Assuming only one activity per day per kid
      if (activity) {
        setPositiveCounts([
          activity.aktivitas_kedatangan || 0,
          activity.aktivitas_iqomat || 0,
          activity.aktivitas_wudhu || 0,
          activity.aktivitas_shof || 0,
          activity.aktivitas_dzikir || 0,
        ]);
        setNegativeCounts([
          activity.aktivitas_takkhusyusholat || 0,
          activity.aktivitas_takkhusyukajian || 0,
          activity.aktivitas_nyampah || 0,
          activity.aktivitas_akhlakburuk || 0,
        ]);
      }
    } catch (error) {
      console.error('Error fetching activity data:', error);
    }
  };

  useEffect(() => {
    fetchActivityData();
  }, [kidId, selectedDate]);

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

  const getBadgeImage = () => {
    const totalScore = positiveScore + negativeScore;
    if (totalScore < 4) {
      return null;
    } else if (totalScore < 7) {
      return bronzeBadge;
    } else if (totalScore <= 11) {
      return silverBadge;
    } else {
      return goldBadge;
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
      alert('Data submitted successfully'); // Indicate success to user
      fetchActivityData(); // Re-fetch the activity data after submission
    } catch (error) {
      console.error('Error submitting activity data:', error);
      alert('Error submitting data'); // Indicate error to user
    }
  };

  return (
    <div style={componentStyle}>
      <Row style={{ borderBottom: '2px solid #000', textAlign: 'center', backgroundColor: '#f8f9fa', padding: '10px 0' }}>
        <Col style={{ ...columnStyle, fontSize: '24px', fontWeight: 'bold' }}>{kidName.toUpperCase()}</Col>
        <Col style={{ ...columnStyle, fontSize: '20px', fontWeight: 'bold' }}>{positiveScore} | {negativeScore}</Col>
        <Col style={columnStyle}>
          {getBadgeImage() && <img src={getBadgeImage()} alt="Badge" style={{ width: '50px', height: '50px' }} />}
        </Col>
        <Col style={{ ...columnStyle, fontSize: '20px', fontWeight: 'bold' }}>4</Col> {/* Total Monthly Score placeholder */}
        <Col style={columnStyle}>{lastClicked}</Col>
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
        <Col style={columnStyle}><Button color="info" onClick={handleSubmit}>Submit</Button></Col>
      </Row>
    </div>
  );
};

export default CounterBaikBurukScore;
