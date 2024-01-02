import Header from "../Components/Header";
import Appointment from "../HomeComponent/Appointment";
import Ecosystem from "../HomeComponent/Ecosystem";
import HomeSlider from "../HomeComponent/HomeSlider";
import Impact from "../HomeComponent/Impact";
import ImpactComp from "../HomeComponent/ImpactComp";
import KabadJugad from "../HomeComponent/KabadJugad";

const Home = () => {
  return <>
  
  <HomeSlider />
  <Appointment />
  <Ecosystem />
  <KabadJugad />
  <ImpactComp />
  </>;
};

export default Home;
