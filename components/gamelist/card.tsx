import { useRouter } from "next/router";
import BaseButton from "../base/base-button";
import GameList from "../../models/response/GameList";
import api from "../../plugins/api";

export default function CardGameList(props: any) {
  const router = useRouter();

  const modalSetting = () => {
    props.modalSetting(props.name, props.id)
  }

  return (
    <div onClick={() => {router.push(`/gamelist/${props.id}`)}}
      className="w-fit p-2 my-2 space-y-2 bg-sun hover:ring-[4px] ring-grape cursor-pointer hover:drop-shadow-[0_2px_10px_rgba(160,32,240,1)]">
      <img
        src={props.url_video}
        alt="Valorant"
        className="w-[200px] h-[280px] "
      />
      <p className="text-center text-blood text-lg ">{props.name}</p>
      <div className="w-full flex space-x-2">
        <BaseButton onClick={modalSetting} style="sky" slot="Add" className="w-1/2 hover:scale-110" />
        <BaseButton onClick={() => { router.push(`/gamelist/${props.id}`) }} style="blood" slot="Detail" className="w-1/2 hover:scale-110" />
      </div>
    </div>
  );
}
