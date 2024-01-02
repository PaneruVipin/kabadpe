import Header from "../Components/Header";
import Appointment from "../HomeComponent/Appointment";
import Ecosystem from "../HomeComponent/Ecosystem";
import Footer from "../HomeComponent/Footer";
import HomeSlider from "../HomeComponent/HomeSlider";
import ImpactComp from "../HomeComponent/ImpactComp";
import KabadJugad from "../HomeComponent/KabadJugad";
import MainFooter from "../HomeComponent/MainFooter";
import Review from "../HomeComponent/Review";

const Home = () => {
  return <>
  
  <HomeSlider />
  <Appointment />
  <Ecosystem />
  <KabadJugad />
  <ImpactComp />
  <Review />
  <Footer />
  <MainFooter />
  </>;
};

export default Home;
