import Breadcrum from "./commonComponents/Breadcrum";
import Copyright from "./Copyright";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";

export default function Layout({ children, title }) {

  return (
    <>
      <Header />
      <Navbar />
      {title === 'no' ?  <> </> :  <Breadcrum title={title} /> }
      <main>{children}</main>
      <Footer />
      <Copyright />
    </>
  );
}
