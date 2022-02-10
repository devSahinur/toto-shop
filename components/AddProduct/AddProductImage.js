import { PhotographIcon, XIcon } from "@heroicons/react/solid";

function AddProductImage({ handleImageUpload, images }) {
  return (
    <div>
      <h1 className="pb-4 text-lg text-gray-600 font-bold">Product Image</h1>
      <div>
        <div className="space-y-6">
          <div className="grid grid-cols-2 space-x-4">
            {/* TODO: Single Image 1  */}
            <div
              className="text-center flex items-center flex-col justify-center h-[200px] rounded-md border-dashed border-2 text-gray-500 relative"
              onClick={() => document.querySelector(".input_file").click()}
            >
              {images.length >= 1 ? (
                <>
                  <img
                    className="object-contain w-full h-full"
                    src={images[0]}
                  />
                  <XIcon className="absolute top-0 right-0 h-5 cursor-pointer" />
                </>
              ) : (
                <>
                  <input
                    type="file"
                    onChange={handleImageUpload}
                    className="cursor-pointer hidden input_file"
                  />
                  <PhotographIcon className="h-8 cursor-pointer hover:text-primary" />
                  <h3 className="">Add Image</h3>
                </>
              )}
            </div>
            {/* FIXME: 2nd one */}
            {/* TODO: Single Image 1  */}
            <div
              className="text-center flex items-center flex-col justify-center h-[200px] rounded-md border-dashed border-2 text-gray-500 relative"
              onClick={() => document.querySelector(".input_file").click()}
            >
              {images.length >= 2 ? (
                <>
                  <img
                    className="object-contain w-full h-full"
                    src={images[1]}
                  />
                  <XIcon className="absolute top-0 right-0 h-5 cursor-pointer" />
                </>
              ) : (
                <>
                  <input
                    type="file"
                    onChange={handleImageUpload}
                    className="hidden input_file"
                  />
                  <PhotographIcon className="h-8 cursor-pointer hover:text-primary" />
                  <h3>Add Image</h3>
                </>
              )}
            </div>
          </div>

          {/* FIXME: another three one */}
          <div className="grid grid-cols-3 space-x-3">
            {/* TODO: Single Image 1  */}
            <div
              className="text-center flex items-center flex-col justify-center h-[200px] rounded-md border-dashed border-2 text-gray-500 relative"
              onClick={() => document.querySelector(".input_file").click()}
            >
              {images.length >= 3 ? (
                <>
                  <img
                    className="object-contain w-full h-full"
                    src={images[2]}
                  />
                  <XIcon className="absolute top-0 right-0 h-5 cursor-pointer" />
                </>
              ) : (
                <>
                  <input
                    type="file"
                    onChange={handleImageUpload}
                    className="hidden input_file"
                  />
                  <PhotographIcon className="h-8 cursor-pointer hover:text-primary" />
                  <h3>Add Image</h3>
                </>
              )}
            </div>
            {/* FIXME: 2nd one */}
            {/* TODO: Single Image 1  */}
            <div
              className="text-center flex items-center flex-col justify-center h-[200px] rounded-md border-dashed border-2 text-gray-500 relative"
              onClick={() => document.querySelector(".input_file").click()}
            >
              {images.length >= 4 ? (
                <>
                  <img
                    className="object-contain w-full h-full"
                    src={images[3]}
                  />
                  <XIcon className="absolute top-0 right-0 h-5 cursor-pointer" />
                </>
              ) : (
                <>
                  <input
                    type="file"
                    onChange={handleImageUpload}
                    className="hidden input_file"
                  />
                  <PhotographIcon className="h-8 cursor-pointer hover:text-primary" />
                  <h3>Add Image</h3>
                </>
              )}
            </div>
            {/* TODO: Single Image 1  */}
            <div
              className="text-center flex items-center flex-col justify-center h-[200px] rounded-md border-dashed border-2 text-gray-500 relative"
              onClick={() => document.querySelector(".input_file").click()}
            >
              {images.length >= 5 ? (
                <>
                  <img
                    className="object-contain w-full h-full"
                    src={images[4]}
                  />
                  <XIcon className="absolute top-0 right-0 h-5 cursor-pointer" />
                </>
              ) : (
                <>
                  <input
                    type="file"
                    onChange={handleImageUpload}
                    className="hidden input_file"
                  />
                  <PhotographIcon className="h-8 cursor-pointer hover:text-primary" />
                  <h3>Add Image</h3>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProductImage;
