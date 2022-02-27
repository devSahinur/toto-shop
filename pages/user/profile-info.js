import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import MainFooter from "../../components/commonComponents/MainFooter";
import MainHeader from "../../components/commonComponents/MainHeader";
import UserSidebar from "../../components/commonComponents/UserSidebar";
import withAuth from "../../lib/withAuth";

function ProfileInfo() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [user, setUser] = useState();

  useEffect(async () => {
    const res = await fetch("/api/user");
    const data = await res.json();
    setUser(data.Login[0]);
  }, []);

  const onSubmit = async (data) => {
    const res = await fetch(`/api/user?userId=${user._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        isSeller: user.isSeller,
        provider: user.provider,
        purchaseHistory: user.purchaseHistory,
        cart: user.cart,
        wishlist: user.wishlist,
        _id: user._id,
        email: user.email,
        image: user.image,
      }),
    });

    if (res.ok) {
      console.log("User Update done");
      router.push("/user/account");
    }
  };

  return (
    <>
      <Head>
        <title>My Profile Edit - ToTo SHOP</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="ToToSHOP - Online Shopping Website"></meta>
        <meta
          name="description"
          content="Bangladesh's best online shopping store with 17+ million products at resounding discounts in dhaka, ctg & All across Bangladesh with cash on delivery (COD)"
        ></meta>
      </Head>
      <MainHeader BreadcrumbTitle="My profile info" />
      <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <UserSidebar />
        <div className="col-span-9 shadow rounded px-6 pt-5 pb-7 mt-6 lg:mt-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="text-lg font-medium capitalize mb-4">
              Profile Information
            </h3>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-600 mb-2 block">Full Name</label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    className="input-box"
                    placeholder="Enter your full name?"
                    defaultValue={user?.name}
                  />
                </div>
                <div>
                  <label className="text-gray-600 mb-2 block">Username</label>
                  <input
                    type="text"
                    {...register("customName", { required: true })}
                    className="input-box"
                    placeholder="Enter your username like mrX123"
                    defaultValue={user?.customName}
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-600 mb-2 block">Birthday</label>
                  <input
                    {...register("birthday", { required: true })}
                    type="date"
                    className="input-box"
                    defaultValue={user?.birthday}
                  />
                </div>
                <div>
                  <label className="text-gray-600 mb-2 block">Gender</label>
                  <select
                    {...register("gender", { required: true })}
                    className="input-box"
                    defaultValue={user?.gender}
                  >
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
                    placeholder="Enter your email?"
                    value={user?.email}
                  />
                </div>
                <div>
                  <label className="text-gray-600 mb-2 block">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    className="input-box"
                    {...register("phoneNumber", { required: true })}
                    placeholder="+8801234567891"
                    defaultValue={user?.phoneNumber}
                  />
                </div>
                <div>
                  <label className="text-gray-600 mb-2 block">Address</label>
                  <input
                    type="text"
                    className="input-box"
                    {...register("address", { required: true })}
                    placeholder="Enter your local address ?"
                    defaultValue={user?.address}
                  />
                </div>
                <div>
                  <label className="text-gray-600 mb-2 block">Shop Name</label>
                  <input
                    {...register("shopName", { required: true })}
                    type="text"
                    className="input-box"
                    placeholder="Enter your shop name ?"
                    defaultValue={user?.shopName}
                  />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <input
                type="submit"
                value="Save change"
                className="px-6 py-2 text-center cursor-pointer text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
              />
            </div>
          </form>
        </div>
      </div>
      <MainFooter />
    </>
  );
}

export default withAuth(ProfileInfo);
