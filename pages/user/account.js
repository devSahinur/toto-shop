import Head from "next/head";
import { useSession } from "next-auth/react";
import AccuntSingleCard from "../../components/Account/AccuntSingleCard";
import withAuth from "../../lib/withAuth";
import MainFooter from "../../components/commonComponents/MainFooter";
import UserSidebar from "../../components/commonComponents/UserSidebar";
import MainHeader from "../../components/commonComponents/MainHeader";

function account() {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>{session.user.name} | ToTo SHOP</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="ToToSHOP - Online Shopping Website"></meta>
        <meta
          name="description"
          content="Bangladesh's best online shopping store with 17+ million products at resounding discounts in dhaka, ctg & All across Bangladesh with cash on delivery (COD)"
        ></meta>
      </Head>
      <MainHeader BreadcrumbTitle="My account" />
      <div className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <UserSidebar />
        <div className="col-span-9 grid md:grid-cols-3 gap-4 mt-6 lg:mt-0">
          {/* <!-- single card --> */}
          <AccuntSingleCard name="Personal profile" />
          <AccuntSingleCard name="Shipping Address" />
          <AccuntSingleCard name="" />
        </div>
      </div>
      <MainFooter />
    </>
  );
}

export default withAuth(account);
