import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { useState } from "react";
function OrderSingleRetunCard({
  id,
  title,
  image,
  price,
  quantity,
  returnOrder,
  date,
  available,
  itsReturnOrder,
}) {
  const [showSelect, setShowSelect] = useState(false);
  const [sorting, setShorting] = useState("Default sorting");

  const setShort = (e) => {
    setShorting(e);
    setShowSelect(false);
  };

  return (
    <div className="flex items-center justify-between space-x-3 py-5 px-6">
      <Image src={image} width={70} height={50} className="object-contain" />
      {/* text */}
      <div className="space-y-1">
        <h3 className="text-base font-medium">{title}</h3>
        <p className="text-sm">{!available && "No Warranty Available"}</p>
      </div>
      {/* price */}
      <h4 className="text-base font-medium hidden md:block">${price}</h4>
      <h4 className="text-base font-medium hidden md:block">Qty-{quantity}</h4>
      {/* order return */}
      {!itsReturnOrder ? (
        <div className="space-y-1 ">
          <h5 className="text-primary font-medium">
            {returnOrder ? "RETURN" : ""}
          </h5>
          <p className="text-sm text-gray-500">Until {date}</p>
        </div>
      ) : (
        <div>
          <p className="text-sm pb-3">
            Select A Reason <span className="text-primary">*</span>
          </p>
          <div className="flex items-center px-4 py-3 border-2 cursor-pointer rounded-md space-x-8 relative">
            <div
              className="flex items-center space-x-6"
              onClick={() => setShowSelect(!showSelect)}
            >
              <h3>{sorting}</h3>
              {showSelect ? (
                <ChevronUpIcon className="h-4 text-gray-600" />
              ) : (
                <ChevronDownIcon className="h-4 text-gray-600" />
              )}
            </div>
            {/* default sorting  */}
            {showSelect && (
              <div
                className="absolute top-12 -left-[2rem] bg-white border-2 w-full rounded-md text-xm"
                style={{ zIndex: 100 }}
              >
                <p
                  onClick={() => setShort("Select A Reason")}
                  className="px-4 py-3 bg-gray-200 cursor-pointer font-semibold"
                >
                  Select A Reason
                </p>
                <p
                  onClick={() => setShort("Deactive")}
                  className="px-3 py-2 bg-white hover:bg-gray-200 cursor-pointer"
                >
                  Deactive
                </p>
                <p
                  onClick={() => setShort("Not as advertised")}
                  className="px-3 py-2 bg-white hover:bg-gray-200 cursor-pointer"
                >
                  Not as advertised
                </p>
                <p
                  onClick={() => setShort(" Worng/Fake item")}
                  className="px-3 py-2 bg-white hover:bg-gray-200 cursor-pointer"
                >
                  Worng/Fake item
                </p>
                <p
                  onClick={() => setShort("Missing accessories")}
                  className="px-3 py-2 bg-white hover:bg-gray-200 cursor-pointer"
                >
                  Missing accessories
                </p>
                <p
                  onClick={() => setShort("Worng size")}
                  className="px-3 py-2 bg-white hover:bg-gray-200 cursor-pointer"
                >
                  Worng size
                </p>
                <p
                  onClick={() => setShort("Damaged")}
                  className="px-3 py-2 bg-white hover:bg-gray-200 cursor-pointer"
                >
                  Damaged
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderSingleRetunCard;
