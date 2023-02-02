import { useRouter } from "next/router";

export default function CardMyList() {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push("/mygame/playerlist/valorant");
      }}
      className="w-fit p-2 my-2 bg-sun hover:ring-[4px] ring-grape cursor-pointer hover:drop-shadow-[0_2px_10px_rgba(160,32,240,1)]"
    >
      <img
        src="https://wallpaperaccess.com/full/3911016.png"
        alt="Valorant"
        className="w-[200px] h-[280px] "
      />
      <p className="text-blood">Valorant</p>
      <p className="text-blood">Description</p>
    </div>
  );
}
