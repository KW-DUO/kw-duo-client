import Link from "next/link";
import Links from "./links/Links";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-secondary h-20">
      <div className="max-w-maxWidth mx-auto h-full flex text-white justify-between items-center text-xl">
        <div className="text-2xl font-semibold">KW DUO</div>
        <div className="flex items-center">
          <Links />
          <Image
            src={"/icons/user_icon.svg"}
            alt="user-image"
            width={30}
            height={30}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
