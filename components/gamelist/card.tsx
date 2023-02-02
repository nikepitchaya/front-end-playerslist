import { useRouter } from "next/router";
import BaseButton from "../base/base-button";

export default function CardGameList() {
  const router = useRouter();
  return (
    <div className="w-fit p-2 my-2 space-y-2 bg-sun hover:drop-shadow-[0_2px_25px_rgba(0,255,0,1)]">
      <img
        src="https://wallpaperaccess.com/full/3911016.png"
        alt="Valorant"
        className="w-[200px] h-[280px] "
      />
      <p className="text-center text-blood text-lg ">Valorant</p>
      <div className="w-full flex space-x-2">
        <BaseButton style="sky" slot="Add" className="w-1/2 hover:scale-110"/>
        <BaseButton onClick={()=>{router.push("/gamelist/valorant")}} style="blood" slot="Detail" className="w-1/2 hover:scale-110"/>
      </div>
    </div>
  );
}
