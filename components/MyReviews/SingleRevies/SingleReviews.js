import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
function SingleReviews({
  id,
  image,
  orderNumber,
  date,
  ratting,
  total,
  status,
  titile,
}) {
  const router = useRouter();

  return (
    <div className="border shadow rounded px-2 md:px-4 py-6">
      {/* div top */}
      <div className="flex items-center justify-between pb-4">
        {/* top left */}
        <div className="flex items-center">
          <Image src={image} width={100} height={70} objectFit="contain" />
          <div className="space-y-1">
            <h3 className="font-medium text-base">{titile}</h3>
            <p className="text-sm">${total}</p>
            {/* ratting */}
            <div className="flex items-center">
              {ratting?.map((num,index) => (
                <StarIcon key={index} className="h-5 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>
        {/* another one */}
        <div className="space-y-1 hidden lg:inline-flex">
          <h3 className="font-medium text-base">Order Number</h3>
          <p className="text-sm">{orderNumber}</p>
        </div>
        {/* another one */}
        <div className="space-y-1 hidden lg:inline-flex">
          <h3 className="font-medium text-base">Purchased</h3>
          <p className="text-sm">{date}</p>
        </div>
        {/* button */}
        <div className="ml-2">
          {status ? (
            <button
              onClick={() => router.push("/my-write-review")}
              className="btn-outline py-2 text-sm"
            >
              Write Review
            </button>
          ) : (
            <button className="btn-outline py-2 text-sm">Edit Review</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SingleReviews;
