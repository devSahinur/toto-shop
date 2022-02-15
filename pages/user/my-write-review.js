import MyWriteReviews from "../../components/MyWriteReviews/MyWriteReviesmain";
import withAuth from "../../lib/withAuth";
import MainFooter from "../../components/commonComponents/MainFooter";
import MainHeader from "../../components/commonComponents/MainHeader";
import UserSidebar from "../../components/commonComponents/UserSidebar";

function MyWiriteReviews() {
  return (
    <>
      <MainHeader BreadcrumbTitle="Order Cancel" />
      <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <UserSidebar />
        <div className="col-span-9 space-y-6 mt-6 lg:mt-0">
          <MyWriteReviews />
        </div>
      </div>
      <MainFooter />
    </>
  );
}

export default withAuth(MyWiriteReviews);
