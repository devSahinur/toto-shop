import ForgetFrom from "../components/ForgetPage/ForgetFrom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
// import Layout from "../components/layout";

function ForgetPassword() {
  return (
    <>
      {/* <Layout title={'Forgot Password'}> */}
      <Header/>
      <Navbar/>
      <main className="max-w-[75rem] mx-auto px-4 py-6">
        <ForgetFrom />
      </main>
      {/* </Layout> */}

    </>
  );
}

export default ForgetPassword;
