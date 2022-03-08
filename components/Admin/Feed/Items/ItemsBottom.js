import {
  ArrowDownIcon,
  ArrowNarrowDownIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import React, { useState } from "react";
import ItemSingleList from "./ItemSingleList";

function ItemsBottom({ products }) {
  const [allproduct, setAllProduct] = useState(products);
  const [allCheck, setAllCheck] = useState(false);

  const setChecked = (id) => {
    const findIndex = allproduct.findIndex((item) => item.id === id);

    let NewCustomerList = [...allproduct];

    if (findIndex >= 0) {
      if (NewCustomerList[findIndex].check) {
        setAllCheck(false);

        // alert("already checked");
        NewCustomerList[findIndex].check = false;
      } else {
        setAllCheck(false);

        NewCustomerList[findIndex].check = true;
      }
    }
    setAllProduct(NewCustomerList);
  };

  const checkAll = () => {
    let NewCustomerList = [...allproduct];

    if (allCheck) {
      setAllCheck(false);
      NewCustomerList?.map((item) => (item.check = false));
      setAllProduct(NewCustomerList);
    } else {
      setAllCheck(true);

      NewCustomerList?.map((item) => (item.check = true));
      setAllProduct(NewCustomerList);
    }
  };

  // todo action drop down
  const [actiondrop, setActiondrop] = useState(false);

  // todo all product delete handler
  const AllDeleteHandler = () => {
    alert("are you want to delete all the items");
  };

  // todo delete product
  const confirmDelete = async (id) => {
    const res = await fetch(`/api/productitem?id=${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      // Router.reload() // Reload page for fetch GET item again
      // router.push("/");
      const findIndex = allproduct.findIndex((item) => item._id === id);
      const newProducts = [...allproduct];
      if (findIndex >= 0) {
        newProducts.splice(findIndex, 1);
      }
      setAllProduct(newProducts);
    }
  };

  return (
    <div>
      {/* TODO: list items  top */}
      <div className="flex py-3 items-center justify-end">
        <div className="flex items-center relative space-x-2 text-header500 font-semibold cursor-pointer">
          <p onClick={() => setActiondrop(!actiondrop)}>Actions</p>
          <ArrowDownIcon className="h-4" />
          {actiondrop && (
            <div
              onClick={AllDeleteHandler}
              className="absolute animationFadein top-6 right-0 z-50 px-1 py-2 shadow bg-white rounded-md text-gray-500 font-semibold w-[200px]"
            >
              {/* single content */}
              <div
                className="flex items-center space-x-4 px-2 py-1 cursor-pointer"
                onClick={() => setActiondrop(false)}
              >
                <TrashIcon className="h-4" />
                <p>Delete</p>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* top Header */}
      <div className="flex items-center justify-between py-3 px-5 bg-indigo-100">
        <input type="checkbox" checked={allCheck} onChange={checkAll} />
        <div className="flex items-center space-x-2 cursor-pointer">
          <p className="uppercase font-semibold text-gray-500 text-sm">Name</p>
          <ArrowNarrowDownIcon className="h-4" />
        </div>
        <p className="uppercase font-semibold text-gray-500 hidden md:inline-flex text-sm">
          unit
        </p>
        <p className="uppercase font-semibold text-gray-500 text-sm">price</p>
        <div className=""></div>
      </div>

      {/* all the lisht */}
      <div className="max-h-[53vh] overflow-y-scroll">
        {/* there we map */}
        {allproduct?.map((item) => (
          <ItemSingleList
            key={item?._id}
            confirmDelete={confirmDelete}
            setChecked={setChecked}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

export default ItemsBottom;
