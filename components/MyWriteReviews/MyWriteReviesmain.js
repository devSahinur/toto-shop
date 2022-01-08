import {
  ExclamationCircleIcon,
  PhotographIcon,
  StarIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

function MyWriteReviews() {
  const imageUploader = () => {
    document.getElementById("photoId").click();
  };

  return (
    <div className="border shadow-md py-8 px-6 rounded">
      <h1 className="text-xl font-medium pb-4">Write Revies</h1>
      {/* details main */}
      <div className="flex items-center justify-between space-x-3 py-5 px-6">
        <div className="flex items-center space-x-3">
          <Image
            src={"https://i.ibb.co/D5kM6Hb/headphone-3.png"}
            width={70}
            height={50}
            className="object-contain"
          />
          {/* text */}
          <div className="space-y-1">
            <h3 className="text-base font-medium">Sound Intone I65 Earphone</h3>
            <p className="text-sm">{"No Warranty Available"}</p>
          </div>
        </div>
        <div className="space-y-1">
          <h4 className="text-base font-medium">Purchased</h4>
          <p className="text-sm">16 Dec 2020</p>
        </div>
      </div>

      {/* another one */}
      <div className="flex items-center space-x-16">
        <div className="space-y-3">
          <p className="font-semibold text-base">
            Rate and review your product
          </p>
          <div className="flex items-center space-x-2">
            <StarIcon className="h-5" />
            <StarIcon className="h-5" />
            <StarIcon className="h-5" />
            <StarIcon className="h-5" />
            <StarIcon className="h-5" />
            <span>Good</span>
          </div>
        </div>
        {/* right */}
        <div className="space-y-3">
          <p className="font-semibold text-base">Rate and review your seller</p>
          <div className="flex items-center space-x-2">
            <StarIcon className="h-5" />
            <StarIcon className="h-5" />
            <StarIcon className="h-5" />
            <StarIcon className="h-5" />
            <StarIcon className="h-5" />
            <span>Good</span>
          </div>
        </div>
      </div>
      {/* another one */}
      <div className="flex space-x-16 pt-8">
        <div className="space-y-3">
          <p className="font-semibold text-base">Review details</p>
          <textarea
            className="w-full h-[100px] input-box"
            placeholder="Please share your feedback about the product. Was the product described? What is the quality like?"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        {/* right */}
        <div className="space-y-3">
          <p className="font-semibold text-base">Rate your Rider</p>
          <div className="flex items-center space-x-2">
            <StarIcon className="h-5" />
            <StarIcon className="h-5" />
            <StarIcon className="h-5" />
            <StarIcon className="h-5" />
            <StarIcon className="h-5" />
            <span>Good</span>
          </div>
        </div>
      </div>

      {/* another one */}
      <div className="flex space-x-8 pt-8">
        <div
          className="py-2 rounded-md px-3 cursor-pointer text-xs text-center flex items-center justify-between flex-col border-dotted border-2 border-primary"
          onClick={imageUploader}
        >
          <input type="file" id="photoId" className="hidden" />
          <PhotographIcon className="h-8" />
          <p>Uploaded Photo</p>
        </div>
        {/* right */}
        <div className="relative group">
          <ExclamationCircleIcon className="h-4 cursor-pointer" />
          {/* tootltip content */}
          <div className="absolute opacity-0 top-16 group-hover:top-3 transition-all ease-in duration-150 hidden group-hover:block group-hover:opacity-100 left-4 bg-white border shadow-md px-3 py-5 w-[250px] rounded-md">
            <h4 className="font-semibold text-base text-gray-800 pb-3">
              Important
            </h4>
            <ul className="list-disc pl-4 space-y-3 text-gray-500">
              <li>Maximum 6 images can be uploded</li>
              <li>Image size can be maxumum smb</li>
              <li>It tokes upto 24 hours for me image to be reviewed</li>
              <li>
                Please ensure you meet the community Guidelines before uploading
                your reviews
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* button */}
      <div className="pb-4 pt-4">
        <button className="btn uppercase py-2 px-6">Submit</button>
      </div>
    </div>
  );
}

export default MyWriteReviews;
