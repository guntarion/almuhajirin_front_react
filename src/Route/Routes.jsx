// //SamplePage
import SamplePage from '../Components/Pages/PageLayout/SimplePage';
import InputMuhajirinKids from '../Components/Pages/Masjid/InputMuhajirinKids';
import RekapMuhajirinKids from '../Components/Pages/Masjid/RekapMuhajirinKids';

export const routes = [
  // //page
  { path: `${process.env.PUBLIC_URL}/pages/sample-page/:layout`, Component: <SamplePage /> },
  { path: `${process.env.PUBLIC_URL}/masjid/input-muhajirin-kids/:layout`, Component: <InputMuhajirinKids /> },
  { path: `${process.env.PUBLIC_URL}/masjid/rekap-muhajirin-kids/:layout`, Component: <RekapMuhajirinKids /> },
];
