import {
  LocationMarkerIcon,
  PhoneIcon,
  MailIcon,
} from "@heroicons/react/solid";

function ContactInfo() {
  return (
    <div className="px-5 md:px-8 py-6 md:py-7 border rounded-md shadow-md hover:shadow-lg space-y-6">
      {/* div top */}

      <div>
        <h2 className="uppercase font-semibold pb-3 text-xl">OUR STORE</h2>
        <a className="flex items-center space-x-5 space-y-4 text-md text-gray-700">
          <LocationMarkerIcon className="h-6" />{" "}
          <span>7895 Dr New Albuquerue, NM 19800, nited States Of America</span>
        </a>
        <a className="flex items-center space-x-5 space-y-4 text-md text-gray-700">
          <PhoneIcon className="h-6" />{" "}
          <span>+8801646177169, +8801859650917</span>
        </a>
        <a className="flex items-center space-x-5 space-y-4 text-md text-gray-700">
          <MailIcon className="h-6" /> <span>info@totoshop.tech</span>
        </a>
      </div>
      {/* div middle */}
      <div>
        <h2 className="uppercase font-semibold pb-3 text-xl">
          HOURS OF OPERATION
        </h2>
        <ul className="space-y-4 text-light text-gray-700">
          <li className="flex items-center justify-between">
            Staurday <span>12.00 PM</span>
          </li>
          <li className="flex items-center justify-between">
            Sunday <span>12.00 PM</span>
          </li>
          <li className="flex items-center justify-between">
            Monday <span>12.00 PM</span>
          </li>
          <li className="flex items-center justify-between">
            Tuesday <span>12.00 PM</span>
          </li>
          <li className="flex items-center justify-between">
            Wednesday <span>12.00 PM</span>
          </li>
          <li className="flex items-center justify-between">
            Thursday <span>12.00 PM</span>
          </li>
          <li className="flex items-center justify-between">
            Friday <span>12.00 PM</span>
          </li>
        </ul>
      </div>

      {/* div bottom */}
      <div>
        <h2
          className="uppercase font-semibold pb-3 text-xl"
          style={{ lineHeight: "40px" }}
        >
          CAREERS
        </h2>
        <p className="text-gray-900 text-light" style={{ lineHeight: "30px" }}>
          If you are interesting in emplyment opportunities at ToToShop. Please
          email us :{" "}
          <span className="text-primary text-semibold cursor-pointer hover:underline">
          info@totoshop.tech
          </span>
        </p>
      </div>
    </div>
  );
}

export default ContactInfo;
