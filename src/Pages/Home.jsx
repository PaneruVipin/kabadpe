import Header from "../Components/Header";
import Appointment from "../HomeComponent/Appointment";
import Ecosystem from "../HomeComponent/Ecosystem";
import HomeSlider from "../HomeComponent/HomeSlider";
import ImpactComp from "../HomeComponent/ImpactComp";
import KabadJugad from "../HomeComponent/KabadJugad";
import MainFooter from "../HomeComponent/MainFooter";
import Discover from "../HomeComponent/Discover";
import Contribution from "../HomeComponent/Contribution";
import Review from "../HomeComponent/Review";
import InstaFeed from "../HomeComponent/InstaFeed";

const Home = () => {
  return <>
  
  <HomeSlider />
  <Appointment />
  <Ecosystem />
  <KabadJugad />
  <ImpactComp />
  <Contribution />
  <Review/>
  <InstaFeed />
  <Discover />
  <MainFooter />
  </>;
};

export default Home;
