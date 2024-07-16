import React from 'react';
import { Row, Col } from 'reactstrap';
import bronzeBadge from '../../assets/images/rank/a-bronze.png';
import silverBadge from '../../assets/images/rank/a-silver.png';
import goldBadge from '../../assets/images/rank/a-gold.png';

const DailyLeaderboard = ({ student, rank }) => {
  const { nama_panggilan, positive_score, negative_score, total_score } = student;

  const getBadgeImage = () => {
    if (total_score < 5) {
      return null;
    } else if (total_score < 7) {
      return bronzeBadge;
    } else if (total_score <= 11) {
      return silverBadge;
    } else {
      return goldBadge;
    }
  };

  return (
    <Row className={`table-row ${rank % 2 === 0 ? 'even-row' : 'odd-row'}`}>
      <Col>{rank}</Col>
      <Col>{nama_panggilan}</Col>
      <Col>{getBadgeImage() ? <img src={getBadgeImage()} alt="Badge" style={{ height: '20px' }} /> : ''}</Col>
      <Col>{positive_score}</Col>
      <Col>{negative_score}</Col>
    </Row>
  );
};

export default DailyLeaderboard;
