import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserMe from "../../models/response/UserMe";
import { clearUser, getToken, getUser } from "../../redux/user/slice";
import Logout from "../icon/logout";

export default function Navbar() {
  const dispatch = useDispatch();
  const router = useRouter();
  const token: string = useSelector(getToken);
  const me: UserMe = useSelector(getUser);

  const [toggle, setToggle] = useState<boolean>(false);
  const [hoverProfile, setHoverProfile] = useState<boolean>(false);
  const [hoverLogout, setHoverLogout] = useState<boolean>(false);

  const logout = async (): Promise<void> => {
    await dispatch(clearUser());
    setTimeout(() => {
      router.push("/login");
    }, 1000);
  };

  return (
    <div className="w-full h-[58px] flex justify-between pl-4 z-40 overflow-hidden bg-[#DB0062]">
      <Link href={"/"} className="py-1">
        <Image src="/logo.png" alt="Players List Logo" width={100} height={0} />
      </Link>
      <div className="flex items-center space-x-6 text-lg">
        <Link href={"/mygame"}>
          <p className="text-[#80FFEE] text-lg tracking-tight hover:underline">
            My Game
          </p>
        </Link>
        <Link href={"/gamelist"}>
          <p className="text-[#80FFEE] text-lg tracking-tight hover:underline">
            Game List
          </p>
        </Link>
        <Link href={"/"}>
          <p className="text-[#80FFEE] text-lg hover:underline">About</p>
        </Link>
        {!token && (
          <div className="flex px-6 space-x-2">
            <Link href={"/login"}>
              <p className="text-[#80FFEE] text-lg hover:underline">Login </p>
            </Link>
            <p className="text-sky">|</p>
            <Link href={"/register"}>
              <p className="text-[#80FFEE] text-lg hover:underline">Register</p>
            </Link>
          </div>
        )}
        {token && (
          <div className="flex bg-sun h-full px-6 items-center space-x-2">
            <p className="text-lg text-blood font-bold">{me ? me.name : ""}</p>
            <div
              onClick={logout}
              className="w-fit h-fit cursor-pointer hover:border-b-[1px] hover:border-blood"
            >
              <Logout className="h-6 w-6" fill="#DB0062" />
            </div>
            {/* <div
              className="flex items-center px-4 space-x-2 cursor-pointer"
              onClick={async () => {
                await setToggle(!toggle);
              }}
            >
              <p className="text-2xl text-sun font-bold">
                {me ? me.name : ""}
                {toggle ? "1" : "0"}
              </p>
              <Logout className="h-8 w-8" fill="#FFEF00" />
            </div> */}
            {toggle && (
              <div className="w-full h-24 flex flex-col bg-white pt-2 space-y-2 absolute right-0 z-50 mt-10 origin-top-right rounded-b-sm">
                <p>Hello</p>
              </div>
              // <div className="w-full h-12 flex flex-col bg-white pt-2 space-y-2 absolute right-0 z-50 mt-10 origin-top-right rounded-b-sm">
              //   <div
              //     onMouseOut={() => setHoverProfile(false)}
              //     onMouseOver={() => setHoverProfile(true)}
              //     className={
              //       hoverProfile
              //         ? "flex space-x-2 py-1 px-2 cursor-pointer  bg-blood"
              //         : "flex space-x-2 py-1 px-2 cursor-pointer"
              //     }
              //   >
              //     <Mosquito
              //       className="h-8 w-8"
              //       fill={hoverProfile ? "#FFFFFF" : "#42C2FF"}
              //     />
              //     <p
              //       className={
              //         hoverProfile
              //           ? "font-bold text-white"
              //           : "font-bold  bg-blood"
              //       }
              //     >
              //       My Profile
              //     </p>
              //   </div>
              //   <div
              //     onClick={logout}
              //     onMouseOut={() => setHoverLogout(false)}
              //     onMouseOver={() => setHoverLogout(true)}
              //     className={
              //       hoverLogout
              //         ? "flex space-x-2 py-1 px-2 cursor-pointer  bg-blood rounded-b-sm"
              //         : "flex space-x-2 py-1 px-2 cursor-pointer"
              //     }
              //   >
              //     <Mosquito
              //       className="h-8 w-8"
              //       fill={hoverLogout ? "#FFFFFF" : "#42C2FF"}
              //     />
              //     <p
              //       className={
              //         hoverLogout
              //           ? "font-bold text-white"
              //           : "font-bold  bg-blood"
              //       }
              //     >
              //       Logout
              //     </p>
              //   </div>
              // </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
