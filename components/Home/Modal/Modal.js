import { XIcon } from "@heroicons/react/outline";
import Image from "next/image";

function Modal({ setShowModal }) {
  const dontShow = () => {
    window.sessionStorage.setItem("showModal", false);
  };
  return (
    <div
      className="fixed top-0 left-0 custom_modal flex items-center w-full h-full"
      style={{ background: "rgba(0, 0, 0, 0.5)", zIndex: "70" }}
    >
      <div className="relative px-3 md:px-4 py-6 md:py-10 rounded-md max-w-[75%] md:max-w-[700px] mx-auto bg-white flex flex-col md:flex-row md:items-center md:justify-between animation">
        {/* Icon */}
        <XIcon
          onClick={() => setShowModal(false)}
          className="h-4 md:h-6 absolute top-3 right-3 transform hover:scale-125 hover:text-primary transition-all ease-in cursor-pointer"
        />

        <div>
          <Image
            src="/popup-bg.jpg"
            width={400}
            height={300}
            className="object-contain"
          />
        </div>

        <div className="pt-4 flex-grow text-center space-y-5">
          <h1 className="text-2xl md:text-4xl uppercase font-semibold">
            GET <span className="text-primary">30%</span> OFF
          </h1>
          <p className="text-gray-700 text-xs md:text-base">
            Subscribe to the newsiettier to recive updates about new products
          </p>

          {/* searchbar */}
          <div className="flex w-full">
            <input
              type="text"
              className="pl-2 md:pl-12 w-full border border-r-0 border-primary py-2 md:py-3 px-1 md:px-3 rounded-l-md outline-primary focus:border-primary"
              placeholder="Your email address"
            />
            <button
              type="submit"
              className="bg-primary border border-primary text-white px-2 md:px-6 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition uppercase"
            >
              Subscribe
            </button>
          </div>

          {/* check button */}
          <label className="flex items-center justify-center space-x-3 text-gray-500">
            <input
              type="checkbox"
              className="form-checkbox text-primary border-primary rounded-md border-2 p-2 focus-within:outline-primary outline-primary"
              onChange={dontShow}
            />
            <span className="ml-2 text-sm md:text-base">
              Do not show this again
            </span>
          </label>
        </div>

        {/* backgroundimage */}
      </div>
    </div>
  );
}

export default Modal;
