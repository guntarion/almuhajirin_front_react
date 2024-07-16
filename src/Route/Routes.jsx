// //SamplePage
// import SamplePage from '../Components/Pages/PageLayout/SimplePage';
import HomeBlankPage from '../Components/Pages/PageLayout/homeblank';
import InputMuhajirinKids from '../Components/Pages/Masjid/InputMuhajirinKids';
import RekapHarianMuhajirinKids from '../Components/Pages/Masjid/RekapHarianMuhajirinKids';
import RekapAkumulatifMuhajirinKids from '../Components/Pages/Masjid/RekapAkumulatifMuhajirinKids';

export const routes = [
  // //page
  // { path: `${process.env.PUBLIC_URL}/pages/sample-page/:layout`, Component: <SamplePage /> },
  { path: `${process.env.PUBLIC_URL}/home/:layout`, Component: <HomeBlankPage /> },
  { path: `${process.env.PUBLIC_URL}/masjid/input-muhajirin-kids/:layout`, Component: <InputMuhajirinKids /> },
  { path: `${process.env.PUBLIC_URL}/masjid/rekap-harian-muhajirin-kids/:layout`, Component: <RekapHarianMuhajirinKids /> },
  { path: `${process.env.PUBLIC_URL}/masjid/rekap-akumulatif-muhajirin-kids/:layout`, Component: <RekapAkumulatifMuhajirinKids /> },
];
