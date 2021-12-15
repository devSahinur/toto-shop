import { useRouter } from "next/router";

const Breadcrum = ({title}) => {
  const router = useRouter();
  return (
    <div className="py-4 container flex gap-3 items-center">
      <div onClick={() => router.push("/")} className="text-primary cursor-pointer text-base">
        <i className="fas fa-home"></i>
      </div>
      <span className="text-sm text-gray-400">
        <i className="fas fa-chevron-right"></i>
      </span>
      <p className="text-gray-600 font-medium uppercase">{title}</p>
    </div>
  );
};

export default Breadcrum;
