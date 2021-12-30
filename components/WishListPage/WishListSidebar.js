function WishListSidebar() {
  return (
    <>
      {/* <!-- sidebar --> */}
      <div className="col-span-3">
        {/* <!-- account profile --> */}
        <div className="px-4 py-3 shadow flex items-center gap-4">
          <div className="flex-shrink-0">
            <img
              src="https://i.ibb.co/dG9tksD/download.jpg"
              className="rounded-full w-14 h-14 p-1 border border-gray-200 object-cover"
            />
          </div>
          <div>
            <p className="text-gray-600">Hello,</p>
            <h4 className="text-gray-800 capitalize font-medium">
              Mr ToTo
            </h4>
          </div>
        </div>
        {/* <!-- account profile end --> */}

        {/* <!-- profile links --> */}
        <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
          {/* <!-- single link --> */}
          <div className="space-y-1 pl-8">
            <a
              href="account.html"
              className="relative text-base font-medium capitalize hover:text-primary transition block"
            >
              Manage account
              <span className="absolute -left-8 top-0 text-base">
                <i className="far fa-address-card"></i>
              </span>
            </a>
            <a
              href="profile-info.html"
              className="hover:text-primary transition capitalize block"
            >
              Profile information
            </a>
            <a
              href="manage-address.html"
              className="hover:text-primary transition capitalize block"
            >
              Manage address
            </a>
            <a
              href="change-password.html"
              className="hover:text-primary transition capitalize block"
            >
              change password
            </a>
          </div>
          {/* <!-- single link end --> */}
          {/* <!-- single link --> */}
          <div className="space-y-1 pl-8 pt-4">
            <a
              href="#"
              className="relative medium capitalize text-gray-800 font-medium hover:text-primary transition block"
            >
              My order history
              <span className="absolute -left-8 top-0 text-base">
                <i className="fas fa-gift"></i>
              </span>
            </a>
            <a
              href="#"
              className="hover:text-primary transition block capitalize"
            >
              my returns
            </a>
            <a
              href="#"
              className="hover:text-primary transition block capitalize"
            >
              my cancellations
            </a>
            <a
              href="#"
              className="hover:text-primary transition block capitalize"
            >
              my reviews
            </a>
          </div>
          {/* <!-- single link end --> */}
          {/* <!-- single link --> */}
          <div className="space-y-1 pl-8 pt-4">
            <a
              href="#"
              className="relative medium capitalize text-gray-800 font-medium hover:text-primary transition block"
            >
              Payment methods
              <span className="absolute -left-8 top-0 text-base">
                <i className="far fa-credit-card"></i>
              </span>
            </a>
            <a
              href="#"
              className="hover:text-primary transition block capitalize"
            >
              Voucher
            </a>
          </div>
          {/* <!-- single link end --> */}
          {/* <!-- single link --> */}
          <div className="pl-8 pt-4">
            <a
              href="wishlist.html"
              className="relative medium capitalize font-medium hover:text-primary transition block text-primary"
            >
              my wishlist
              <span className="absolute -left-8 top-0 text-base">
                <i className="far fa-heart"></i>
              </span>
            </a>
          </div>
          {/* <!-- single link end --> */}
          {/* <!-- single link --> */}
          <div className="pl-8 pt-4">
            <a
              href="#"
              className="relative medium capitalize text-gray-800 font-medium hover:text-primary transition block"
            >
              logout
              <span className="absolute -left-8 top-0 text-base">
                <i className="fas fa-sign-out-alt"></i>
              </span>
            </a>
          </div>
          {/* <!-- single link end --> */}
        </div>
        {/* <!-- profile links end --> */}
      </div>
      {/* <!-- sidebar end --> */}
    </>
  );
}

export default WishListSidebar;
