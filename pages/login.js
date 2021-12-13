
import { Register } from "../components/Auth/Register";
import Copyright from "../components/Copyright";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

function login() {
  return (
    <div>
      <Header />
      <Navbar />

      <main>
        <Register />
      </main>

      <Footer />
      <Copyright />
    </div>
  );
}

export default login;
