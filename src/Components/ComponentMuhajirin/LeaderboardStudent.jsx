import React from 'react';
import { Row, Col } from 'reactstrap';

import privateRank from '../../assets/images/rank/level-01-private.png';
import sergeantRank from '../../assets/images/rank/level-02-sergeant.png';
import captainRank from '../../assets/images/rank/level-03-captain.png';
import lieutenantRank from '../../assets/images/rank/level-04-lieutenant.png';
import commanderRank from '../../assets/images/rank/level-05-commander.png';
import majorRank from '../../assets/images/rank/level-06-major.png';
import colonelRank from '../../assets/images/rank/level-07-colonel.png';
import generalRank from '../../assets/images/rank/level-08-general.png';
import admiralRank from '../../assets/images/rank/level-09-admiral.png';
import marshalRank from '../../assets/images/rank/level-10-marshal.png';

const LeaderboardStudent = ({ student, rank, isOdd }) => {
  const totalPositive = student.total_kedatangan + student.total_iqomat + student.total_wudhu + student.total_shof + student.total_dzikir;
  const totalNegative = student.total_takkhusyusholat + student.total_takkhusyukajian + student.total_nyampah + student.total_akhlakburuk;
  const totalScore = totalPositive - totalNegative; // Subtract negative activities from positive activities

  const getRank = (score) => {
    if (score <= 50) return { rank: 'Private', image: privateRank };
    if (score <= 100) return { rank: 'Sergeant', image: sergeantRank };
    if (score <= 150) return { rank: 'Captain', image: captainRank };
    if (score <= 200) return { rank: 'Lieutenant', image: lieutenantRank };
    if (score <= 250) return { rank: 'Commander', image: commanderRank };
    if (score <= 300) return { rank: 'Major', image: majorRank };
    if (score <= 375) return { rank: 'Colonel', image: colonelRank };
    if (score <= 435) return { rank: 'General', image: generalRank };
    if (score <= 500) return { rank: 'Admiral', image: admiralRank };
    return { rank: 'Marshal', image: marshalRank };
  };

  const { rank: rankTitle, image: rankImage } = getRank(totalScore);

  return (
    <Row className={isOdd ? 'table-row odd-row' : 'table-row'}>
      <Col>{rank}</Col>
      <Col>{`${rankTitle} ${student.nama_panggilan}`}</Col>
      <Col>
        <img src={rankImage} alt={rankTitle} style={{ width: '50px', height: '50px' }} />
      </Col>
      <Col>{totalScore}</Col>
      <Col>{totalPositive}</Col>
      <Col>{totalNegative}</Col>
    </Row>
  );
};

export default LeaderboardStudent;
