import { useRouter } from "next/router";

const Breadcrum = ({title}) => {
  const router = useRouter();
  return (
    <div class="py-4 container flex gap-3 items-center">
      <div onClick={() => router.push("/")} class="text-primary cursor-pointer text-base">
        <i class="fas fa-home"></i>
      </div>
      <span class="text-sm text-gray-400">
        <i class="fas fa-chevron-right"></i>
      </span>
      <p class="text-gray-600 font-medium uppercase">{title}</p>
    </div>
  );
};

export default Breadcrum;
