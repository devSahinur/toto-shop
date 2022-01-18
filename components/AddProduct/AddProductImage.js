import { PhotographIcon } from "@heroicons/react/solid";
import { useState } from "react";

function AddProductImage() {
  const [img1, setImage1] = useState(null);
  const [img2, setImage2] = useState(null);

  const [img3, setImage3] = useState(null);

  const [img4, setImage4] = useState(null);
  const [img5, setImage5] = useState(null);

  const Imagehandler1 = (e) => {
    e.preventDefault();
    const Image = e.target.files[0];

    if (Image == "" || Image === undefined) {
      alert(`not an image, file is a${Image.type}`);
    }

    setImage1(Image);
    console.log(img1);
  };

  const Imagehandler2 = (e) => {
    e.preventDefault();
    const Image = e.target.files[0];

    if (Image == "" || Image === undefined) {
      alert(`not an image, file is a${Image.type}`);
    }

    setImage2(Image);
  };

  const Imagehandler3 = (e) => {
    e.preventDefault();
    const Image = e.target.files[0];

    if (Image == "" || Image === undefined) {
      alert(`not an image, file is a${Image.type}`);
    }

    setImage3(Image);
  };

  const Imagehandler4 = (e) => {
    e.preventDefault();
    const Image = e.target.files[0];

    if (Image == "" || Image === undefined) {
      alert(`not an image, file is a${Image.type}`);
    }

    setImage4(Image);
  };

  const Imagehandler5 = (e) => {
    e.preventDefault();
    const Image = e.target.files[0];

    if (Image == "" || Image === undefined) {
      alert(`not an image, file is a${Image.type}`);
    }

    setImage5(Image);
  };

  console.log(img2);
  console.log(img3);
  console.log(img4);
  console.log(img5);

  return (
    <div>
      <h1>Product Image</h1>
      <div>
        <div className="space-y-6">
          <div className="grid grid-cols-2 space-x-4">
            {/* TODO: Single Image 1  */}
            <div className="text-center flex items-center flex-col justify-center h-[200px] rounded-md border-dashed border-2 text-gray-500">
              {img1 ? (
                <>
                  <img
                    className="object-contain w-full h-full"
                    src={URL.createObjectURL(img1)}
                    onClick={() => setImage1(null)}
                  />
                </>
              ) : (
                <>
                  <input
                    type="file"
                    onChange={Imagehandler1}
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
              {img2 ? (
                <>
                  <img
                    className="object-contain w-full h-full"
                    src={URL.createObjectURL(img2)}
                    onClick={() => setImage2(null)}
                  />
                </>
              ) : (
                <>
                  <input
                    type="file"
                    onChange={Imagehandler2}
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
              {img3 ? (
                <>
                  <img
                    className="object-contain w-full h-full"
                    src={URL.createObjectURL(img3)}
                    onClick={() => setImage3(null)}
                  />
                </>
              ) : (
                <>
                  <input
                    type="file"
                    onChange={Imagehandler3}
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
              {img4 ? (
                <>
                  <img
                    className="object-contain w-full h-full"
                    src={URL.createObjectURL(img4)}
                    onClick={() => setImage4(null)}
                  />
                </>
              ) : (
                <>
                  <input
                    type="file"
                    onChange={Imagehandler4}
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
              {img5 ? (
                <>
                  <img
                    className="object-contain w-full h-full"
                    src={URL.createObjectURL(img5)}
                    onClick={() => setImage5(null)}
                  />
                </>
              ) : (
                <>
                  <input
                    type="file"
                    onChange={Imagehandler5}
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
