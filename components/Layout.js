import Copyright from "./Copyright";
import Header from "./Header";
import Navbar from "./Navbar";

export default function Layout({ children, title }) {

  return (
    <>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Copyright />
    </>
  );
}
