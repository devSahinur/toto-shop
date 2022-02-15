import MainHeader from "../components/commonComponents/MainHeader";
import ForgetFrom from "../components/ForgetPage/ForgetFrom";

function ForgetPassword() {
  return (
    <>
      <MainHeader BreadcrumbTitle="Forgot Password" />
      <main className="max-w-[75rem] mx-auto px-4 py-6">
        <ForgetFrom />
      </main>
    </>
  );
}

export default ForgetPassword;
