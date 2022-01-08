import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

function SinglePaymentCard({
  id,
  image,
  method,
  defaultValue,
  lastFour,
  expires,
}) {
  const router = useRouter();
  return (
    <div className="border shadow rounded py-3 px-4">
      {/* div top */}
      <div className="flex items-center justify-between pb-4 space-x-3 flex-wrap space-y-3">
        {/* top left */}
        <div className="flex items-center">
          <Image src={image} width={70} height={30} objectFit="contain" />
        </div>
        {/* method */}
        <div>
          <h3 className="font-medium text-base">Method</h3>
          <p className="text-sm">{method}</p>
        </div>
        {/* another one */}
        <div className="space-y-1">
          <h3 className="font-medium text-base">Last Four</h3>
          <p className="text-sm">{lastFour}</p>
        </div>

        {/* another one */}
        <div className="space-y-1">
          <h3 className="font-medium text-base">Expires</h3>
          <p className="text-sm">{expires}</p>
        </div>

        {/* detault value */}
        <div>
          <h3 className="font-medium text-base">Defalut</h3>
          <p className="text-sm">{defaultValue ? "Yes" : "No"}</p>
        </div>

        {/* button */}
        <div className="space-x-3">
          <button
            onClick={() => router.push("/EditePayment-methods")}
            className="btn-outline px-4 font-medium py-[6px]"
          >
            Edit
          </button>
          <button className="btn-outline px-4 font-medium py-[6px]">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default SinglePaymentCard;
