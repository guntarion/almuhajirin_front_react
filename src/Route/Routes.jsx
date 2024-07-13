// //SamplePage
import SamplePage from '../Components/Pages/PageLayout/SimplePage';
import ContohPage from "../Components/Pages/Sample";
import InputMuhajirinKids from '../Components/Pages/Masjid/InputMuhajirinKids';

export const routes = [
  // //page
  { path: `${process.env.PUBLIC_URL}/pages/sample-page/:layout`, Component: <SamplePage /> },
  { path: `${process.env.PUBLIC_URL}/pages/contoh-page/:layout`, Component: <ContohPage /> },
  { path: `${process.env.PUBLIC_URL}/masjid/input-muhajirin-kids/:layout`, Component: <InputMuhajirinKids /> },
];
