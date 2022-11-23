import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full h-[58px] flex justify-between px-4 py-1 overflow-hidden bg-[#DB0062]">
      <Link href={"/"}>
        <Image src="/logo.png" alt="Players List Logo" width={100} height={0} />
      </Link>
      <div className="flex items-center space-x-6 text-lg">
        <Link href={"/mygame"}>
          <p className="text-[#80FFEE] text-lg tracking-tight hover:underline">My Game</p>
        </Link>
        <Link href={"/gamelist"}>
          <p className="text-[#80FFEE] text-lg tracking-tight hover:underline">Game List</p>
        </Link>
        <Link href={"/"}>
          <p className="text-[#80FFEE] text-lg hover:underline">About</p>
        </Link>
        <div className="flex space-x-2">
          <Link href={"/login"}>
            <p className="text-[#80FFEE] text-lg hover:underline">Login </p>
          </Link>
          <p className="text-sky">|</p>
          <Link href={"/register"}>
            <p className="text-[#80FFEE] text-lg hover:underline">Register</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
