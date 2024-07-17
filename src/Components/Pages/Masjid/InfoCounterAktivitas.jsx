import React, { Fragment } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Breadcrumbs, P } from '../../../AbstractElements';
import { SampleCard } from '../../../Constant';
import HeaderCard from '../../Common/Component/HeaderCard';

import privateRank from '../../../assets/images/rank/level-01-private.png';
import sergeantRank from '../../../assets/images/rank/level-02-sergeant.png';
import captainRank from '../../../assets/images/rank/level-03-captain.png';
import lieutenantRank from '../../../assets/images/rank/level-04-lieutenant.png';
import commanderRank from '../../../assets/images/rank/level-05-commander.png';
import majorRank from '../../../assets/images/rank/level-06-major.png';
import colonelRank from '../../../assets/images/rank/level-07-colonel.png';
import generalRank from '../../../assets/images/rank/level-08-general.png';
import admiralRank from '../../../assets/images/rank/level-09-admiral.png';
import marshalRank from '../../../assets/images/rank/level-10-marshal.png';

const rankData = [
  { rank: 'Prajurit', image: privateRank, scoreRange: '<= 50' },
  { rank: 'Sersan', image: sergeantRank, scoreRange: '<= 100' },
  { rank: 'Kapten', image: captainRank, scoreRange: '<= 150' },
  { rank: 'Letnan', image: lieutenantRank, scoreRange: '<= 200' },
  { rank: 'Komandan', image: commanderRank, scoreRange: '<= 250' },
  { rank: 'Mayor', image: majorRank, scoreRange: '<= 300' },
  { rank: 'Kolonel', image: colonelRank, scoreRange: '<= 375' },
  { rank: 'Jendral', image: generalRank, scoreRange: '<= 435' },
  { rank: 'Admiral', image: admiralRank, scoreRange: '<= 500' },
  { rank: 'Marshal', image: marshalRank, scoreRange: '> 500' },
];

const InfoCounterAktivitas = () => {
  return (
    <Fragment>
      <Breadcrumbs mainTitle="Info Aktivitas M-Kids" parent="Masjid Al Muhajirin" title="Info Aktivitas" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <HeaderCard title={SampleCard} span1="Info Counter Aktivitas" />
              <CardBody>
                <h5>Perhitungan Skor Harian</h5>
                <P>Monitoring harian dilakukan terhadap dua jenis aktivitas, yang dirangking setiap harinya.</P>
                <h6>1. Aktivitas Kebaikan (Hasanah)</h6>
                <ul>
                <li>- Hasanah #1 = Kedatangan | Datang lebih awal</li>
                <li>- Hasanah #2 = Iqomat | Ingatkan iqomah</li>
                <li>- Hasanah #3 = Wudhu | Berwudhu sebelum iqomah</li>
                <li>- Hasanah #4 = Shof | Shof lurus rapat</li>
                <li>- Hasanah #5 = Dzikir | Dzikir ba'da sholat</li>
                </ul>
                <p>&nbsp;</p>
                <h6>2. Aktivitas Keburukan (Sayyiah)</h6>
                <ul>
                <li>- Sayyiah #1 = Tak Khusyu Sholat | Banyak bergerak, bercanda</li>
                <li>- Sayyiah #2 = Tak Khusyu Kajian | Bermain gadget, ramai bercanda</li>
                <li>- Sayyiah #3 = Nyampah | Termasuk makan dan minum dalam masjid</li>
                <li>- Sayyiah #4 = Akhlak Buruk | Ramai di masjid, bertengkar, dsb.</li>
                </ul>
                <p>&nbsp;</p>
            

                <h5>Perhitungan Skor PANALA</h5>
                <P>Dalam rekaP harian, terdapat skor PANALA yang merupakan hasil dari seluruh Hasanah dikurangi Sayyiah:</P>
                <ul>
                <li>- Skor Panala 4 - 6 = Perunggu</li>
                <li>- Skor Panala 7 - 11 = Perak</li>
                <li>- Skor Panala &gt; 12 = Emas</li>
                </ul>
                <p>&nbsp;</p>
                <p>Skor Panala terus diakumulasi dalam satu bulan yang menghasilkan kenaikan pangkat sebagai berikut:</p>
                
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Rank Name</th>
                      <th>Image</th>
                      <th>Skor Capaian</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rankData.map((rank, index) => (
                      <tr key={index}>
                        <td>{rank.rank}</td>
                        <td>
                          <img src={rank.image} alt={rank.rank} style={{ width: '50px', height: '50px' }} />
                        </td>
                        <td>{rank.scoreRange}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default InfoCounterAktivitas;
