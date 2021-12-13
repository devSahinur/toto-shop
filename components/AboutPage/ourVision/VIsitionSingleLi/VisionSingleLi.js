import Link from "next/link";

function VisionSingleLi({ Icon, text }) {
  const key = Math.floor(Math.random() * 100000);
  return (
    <li className="py-2" key={key}>
      <a className="flex items-center text-gray-700" href="#">
        <Icon className="h-6 pr-5 text-primary" /> {text}
      </a>
    </li>
  );
}

export default VisionSingleLi;
