import { useRouter } from "next/router";
import { useState } from "react";
import BaseButton from "../../components/base/base-button";
import BaseInput from "../../components/base/base-input";
import Card from "../../components/gamelist/card";
import { useEffect } from "react";

export default function Lobby() {
  const router = useRouter();
  const [gameId, setGameId] = useState<string>("");
  const [gameName, setGameName] = useState<string>("");

  useEffect(() => {
    
  }, [])
  
  return (
    <div className="w-full flex flex-col items-center py-8">
      <div className="p-4 mb-8 bg-blood rounded-md">
        <p className="text-5xl text-sky">
          Add My Game <span className="text-sun">200%</span>
        </p>
      </div>
      <div className="w-11/12 flex justify-between items-end p-4 mb-4 bg-white bg-opacity-50">
        <div className="w-1/2 flex space-x-2">
          <BaseInput label="Game Id" setState={setGameId} className="w-1/2" />
          <BaseInput
            label="Game Name"
            setState={setGameName}
            className="w-1/2"
          />
        </div>
        <div className="w-1/3 flex space-x-2">
          <BaseButton slot="Search" style="blood" className="w-1/2 h-[38px]" />
          <BaseButton slot="Import New Game" style="sun" className="w-1/2 h-[38px]" />
        </div>
      </div>
      <div className="w-11/12 h-auto grid grid-cols-5 place-items-center gap-0 px-4 py-2 bg-white bg-opacity-50 rounded-md">
        <p className="col-span-5 mb-4 text-3xl underline">Game List</p>
        {[...Array(10)].map((e, i) => (
          <Card key={i} />
        ))}
      </div>
    </div>
  );
}
