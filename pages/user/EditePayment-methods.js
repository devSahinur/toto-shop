import EditePaymentFrom from "../../components/EditePaymentmethod/EditePaymentFrom/EditePaymentFrom";
import withAuth from "../../lib/withAuth";
import MainFooter from "../../components/commonComponents/MainFooter";
import UserSidebar from "../../components/commonComponents/UserSidebar";
import MainHeader from "../../components/commonComponents/MainHeader";

function EditePaymentMethods() {
  return (
    <>
      <MainHeader BreadcrumbTitle="Edit Payment Methods" />
      <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <UserSidebar />
        <div className="col-span-9 space-y-6 mt-6 lg:mt-0">
          <EditePaymentFrom />
        </div>
      </div>
      <MainFooter />
    </>
  );
}

export default withAuth(EditePaymentMethods);
