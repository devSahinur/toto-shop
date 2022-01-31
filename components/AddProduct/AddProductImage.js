import { PhotographIcon } from "@heroicons/react/solid";
import { useState } from "react";

function AddProductImage({ handleImageUpload, images }) {
  console.log(images);
  return (
    <div>
      <h1 className="pb-4 text-lg text-gray-600 font-bold">Product Image</h1>
      <div>
        <div className="space-y-6">
          <div className="grid grid-cols-2 space-x-4">
            {/* TODO: Single Image 1  */}
            <div className="text-center flex items-center flex-col justify-center h-[200px] rounded-md border-dashed border-2 text-gray-500">
              {images.length >= 1 ? (
                <>
                  <img
                    className="object-contain w-full h-full"
                    src={images[0]}
                  />
                </>
              ) : (
                <>
                  <input
                    type="file"
                    onChange={handleImageUpload}
                    className="hidden input_file"
                  />
                  <PhotographIcon
                    className="h-8"
                    onClick={() =>
                      document.querySelector(".input_file").click()
                    }
                  />
                  <h3>Add Image</h3>
                </>
              )}
            </div>
            {/* FIXME: 2nd one */}
            {/* TODO: Single Image 1  */}
            <div
              className="text-center flex items-center flex-col justify-center h-[200px] rounded-md border-dashed border-2 text-gray-500"
              onClick={() => document.querySelector(".input_file").click()}
            >
              {images.length >= 2 ? (
                <>
                  <img
                    className="object-contain w-full h-full"
                    src={images[1]}
                  />
                </>
              ) : (
                <>
                  <input
                    type="file"
                    onChange={handleImageUpload}
                    className="hidden input_file"
                  />
                  <PhotographIcon
                    className="h-8"
                    onClick={() =>
                      document.querySelector(".input_file").click()
                    }
                  />
                  <h3>Add Image</h3>
                </>
              )}
            </div>
          </div>

          {/* FIXME: another three one */}
          <div className="grid grid-cols-3 space-x-3">
            {/* TODO: Single Image 1  */}
            <div className="text-center flex items-center flex-col justify-center h-[200px] rounded-md border-dashed border-2 text-gray-500">
              {images.length >= 3 ? (
                <>
                  <img
                    className="object-contain w-full h-full"
                    src={images[2]}
                  />
                </>
              ) : (
                <>
                  <input
                    type="file"
                    onChange={handleImageUpload}
                    className="hidden input_file"
                  />
                  <PhotographIcon
                    className="h-8"
                    onClick={() =>
                      document.querySelector(".input_file").click()
                    }
                  />
                  <h3>Add Image</h3>
                </>
              )}
            </div>
            {/* FIXME: 2nd one */}
            {/* TODO: Single Image 1  */}
            <div
              className="text-center flex items-center flex-col justify-center h-[200px] rounded-md border-dashed border-2 text-gray-500"
              onClick={() => document.querySelector(".input_file").click()}
            >
              {images.length >= 4 ? (
                <>
                  <img
                    className="object-contain w-full h-full"
                    src={images[3]}
                  />
                </>
              ) : (
                <>
                  <input
                    type="file"
                    onChange={handleImageUpload}
                    className="hidden input_file"
                  />
                  <PhotographIcon
                    className="h-8"
                    onClick={() =>
                      document.querySelector(".input_file").click()
                    }
                  />
                  <h3>Add Image</h3>
                </>
              )}
            </div>
            {/* TODO: Single Image 1  */}
            <div
              className="text-center flex items-center flex-col justify-center h-[200px] rounded-md border-dashed border-2 text-gray-500"
              onClick={() => document.querySelector(".input_file").click()}
            >
              {images.length >= 5 ? (
                <>
                  <img
                    className="object-contain w-full h-full"
                    src={images[4]}
                  />
                </>
              ) : (
                <>
                  <input
                    type="file"
                    onChange={handleImageUpload}
                    className="hidden input_file"
                  />
                  <PhotographIcon
                    className="h-8"
                    onClick={() =>
                      document.querySelector(".input_file").click()
                    }
                  />
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
