import React from "react";

import AdminLayout from "../../components/Admin/AdminLayout";
import AdminFeed from "../../components/Admin/Feed/DashBorard/AdminFeed";
import ItemsFeed from "../../components/Admin/Feed/Items/ItemsFeed";

function Items({ products }) {
  console.log(products);
  return (
    <div>
      <AdminLayout>
        <ItemsFeed products={products} />
      </AdminLayout>
    </div>
  );
}

export default Items;

export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.HOST}/api/product`);
  const data = await res.json();
  return {
    props: {
      products: data.data,
    },
  };
}
