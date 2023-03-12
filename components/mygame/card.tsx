import { useRouter } from "next/router";
import UserGameList from "../../models/response/UserGameList";

export default function CardMyList(props: UserGameList) {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(`/mygame/playerlist/?id=${props.id}&name=${props.gameCategory.name}`);
      }}
      className="w-fit p-2 my-2 bg-sun hover:ring-[4px] ring-grape cursor-pointer hover:drop-shadow-[0_2px_10px_rgba(160,32,240,1)]"
    >
      <img
        src={props.gameCategory.url_picture}
        alt="Valorant"
        className="w-[200px] h-[280px] "
      />
      <p className="text-blood">{props.gameCategory.name}</p>
      <p className="text-blood">{props.gameCategory.about}</p>
    </div>
  );
}
