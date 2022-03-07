import { DotsHorizontalIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import CustomerSingleList from "./CustomerSingleList";

function CustomerListItem() {
  const [customerList, setCustomerList] = useState([
    {
      id: 1,
      name: "Faysal",
      phone: "01646177169",
      amount: "135.00",
      date: "2022/03/07",
      check: false,
    },
    {
      id: 2,
      name: "Faysal",
      phone: "01646177169",
      amount: "135.00",
      date: "2022/03/07",
      check: true,
    },
    {
      id: 90,
      name: "Faysal",
      phone: "01646177169",
      amount: "135.00",
      date: "2022/03/07",
      check: false,
    },
  ]);
  const [allCheck, setAllCheck] = useState(false);

  const setChecked = (id) => {
    const findIndex = customerList.findIndex((item) => item.id === id);

    let NewCustomerList = [...customerList];

    if (findIndex >= 0) {
      if (NewCustomerList[findIndex].check) {
        // alert("already checked");
        setAllCheck(false);

        NewCustomerList[findIndex].check = false;
      } else {
        setAllCheck(false);

        NewCustomerList[findIndex].check = true;
      }
    }
    setCustomerList(NewCustomerList);
  };

  const checkAll = () => {
    let NewCustomerList = [...customerList];

    if (allCheck) {
      setAllCheck(false);
      NewCustomerList?.map((item) => (item.check = false));
      setCustomerList(NewCustomerList);
    } else {
      setAllCheck(true);

      NewCustomerList?.map((item) => (item.check = true));
      setCustomerList(NewCustomerList);
    }
  };

  return (
    <div>
      {/* top Header */}
      <div className="flex items-center justify-between py-3 px-5 bg-indigo-100">
        <input type="checkbox" checked={allCheck} onChange={checkAll} />
        <p className="uppercase font-semibold text-gray-500 text-sm">Name</p>
        <p className="uppercase font-semibold text-gray-500 text-sm hidden md:inline-fle">
          phone
        </p>
        <p className="uppercase font-semibold text-gray-500 text-sm">
          Amount Due
        </p>
        <p className="uppercase font-semibold text-gray-500 text-sm">
          Added on
        </p>
        <div className=""></div>
      </div>

      {/* all the lisht */}
      <div>
        {/* there we map */}
        {customerList?.map((item) => (
          <CustomerSingleList
            setChecked={setChecked}
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

export default CustomerListItem;
