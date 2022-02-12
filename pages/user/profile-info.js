
import Layout from "../../components/layout";
import WishListSidebar from "../../components/WishListPage/WishListSidebar";
import withAuth from "../../lib/withAuth";

function ProfileInfo() {
  return (
    <>
      <Layout title={"My profile info"}>
        <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
          <WishListSidebar />

          {/* <!-- account content --> */}
          <div className="col-span-9 shadow rounded px-6 pt-5 pb-7 mt-6 lg:mt-0">
            <form action="">
              <h3 className="text-lg font-medium capitalize mb-4">
                Profile Information
              </h3>
              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-600 mb-2 block">
                      Full Name
                    </label>
                    <input type="text" className="input-box" value="John" />
                  </div>
                  <div>
                    <label className="text-gray-600 mb-2 block">
                      Username
                    </label>
                    <input type="text" className="input-box" value="Doe" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-600 mb-2 block">Birthday</label>
                    <input
                      type="date"
                      value="1998-01-08"
                      className="input-box"
                    />
                  </div>
                  <div>
                    <label className="text-gray-600 mb-2 block">Gender</label>
                    <select className="input-box">
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-600 mb-2 block">
                      Email Address
                    </label>
                    <input
                      type="text"
                      className="input-box"
                      value="example@mail.com"
                    />
                  </div>
                  <div>
                    <label className="text-gray-600 mb-2 block">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      className="input-box"
                      value="+123 456 789"
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
          {/* <!-- account content end --> */}
        </div>
      </Layout>
    </>
  );
}

export default withAuth(ProfileInfo);
