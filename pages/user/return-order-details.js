import ReturnOrdermain from "../../components/ReturnOrderDetails/ReturnOrderMain/ReturnOrdermain";
import withAuth from "../../lib/withAuth";
import MainHeader from "../../components/commonComponents/MainHeader";
import MainFooter from "../../components/commonComponents/MainFooter";
import UserSidebar from "../../components/commonComponents/UserSidebar";

const orderHistory = [
  {
    id: 1,
    image: "https://i.ibb.co/WzDxXQY/visa.png",
    method: "American Express",
    defaultValue: true,
    lastFour: "0022",
    expires: "01/22",
  },
  {
    id: 2,
    image: "https://i.ibb.co/D8M3MPP/a-express.png",
    method: "Visa Card",
    defaultValue: false,
    lastFour: "0022",
    expires: "01/22",
  },
];

function ReturnDetails() {
  return (
    <>
      <MainHeader BreadcrumbTitle="Return Details" />
      <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <UserSidebar />
        <div className="col-span-9 space-y-6 mt-6 lg:mt-0">
          <ReturnOrdermain />
        </div>
      </div>
      <MainFooter />
    </>
  );
}

export default withAuth(ReturnDetails);
