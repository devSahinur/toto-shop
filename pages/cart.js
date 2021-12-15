import Breadcrum from "../components/commonComponents/Breadcrum";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

function cart() {
  return (
    <div>
      <Header />
      <Navbar />
      <Breadcrum title={'Shopping Cart'} />
      
      <Footer />
      <Copyright />
    </div>
  );
}

export default cart;
