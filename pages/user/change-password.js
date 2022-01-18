import Breadcrum from "../../components/commonComponents/Breadcrum";
import Copyright from "../../components/Copyright";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import WishListSidebar from "../../components/WishListPage/WishListSidebar";

function ChangePassword() {
  return (
    <>
      <Header />
      <Navbar />
      <Breadcrum title={"MY ACCOUNT"} />
      <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <WishListSidebar />

        <div className="col-span-9 shadow rounded px-6 pt-5 pb-7 mt-6 lg:mt-0">
          <form >
            <h3 className="text-lg font-medium capitalize mb-4">
              Change password
            </h3>
            <div className="space-y-4 max-w-sm">
              <div>
                <label className="text-gray-600 mb-2 block">
                  Current Password
                </label>
                <div className="relative">
                  <span className="absolute right-3 top-3 text-sm text-gray-500 cursor-pointer">
                    <i className="far fa-eye-slash"></i>
                  </span>
                  <input
                    type="text"
                    className="input-box"
                    placeholder="enter current password"
                  />
                </div>
              </div>
              <div>
                <label className="text-gray-600 mb-2 block">New Password</label>
                <div className="relative">
                  <span className="absolute right-3 top-3 text-sm text-gray-500 cursor-pointer">
                    <i className="far fa-eye-slash"></i>
                  </span>
                  <input
                    type="text"
                    className="input-box"
                    placeholder="enter new password"
                  />
                </div>
              </div>
              <div>
                <label className="text-gray-600 mb-2 block">
                  Confirm Password
                </label>
                <div className="relative">
                  <span className="absolute right-3 top-3 text-sm text-gray-500 cursor-pointer">
                    <i className="far fa-eye-slash"></i>
                  </span>
                  <input
                    type="text"
                    className="input-box"
                    placeholder="enter confirm password"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="px-6 py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
              >
                Save change
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      <Copyright />
    </>
  );
}

export default ChangePassword;
