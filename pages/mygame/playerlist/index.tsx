import { useRouter } from "next/router";
import { useState } from "react";
import BaseButton from "../../../components/base/base-button";
import BaseInput from "../../../components/base/base-input";
import Card from "../../../components/gamelist/card";

export default function PlayerList() {
  const router = useRouter();
  const [playerId, setPlayerId] = useState<string>("");
  const [playerName, setPlayerName] = useState<string>("");

  return (
    <div className="w-full flex flex-col items-center py-8">
      <div className="p-4 mb-8 bg-blood rounded-md">
        <p className="text-5xl text-sky">
          Players List <span className="text-sun">{router.query.name}</span>
        </p>
      </div>
      <div className="w-11/12 flex justify-between items-end p-4 mb-4 bg-white bg-opacity-50 rounded-md">
        <div className="w-1/2 flex space-x-2">
          <BaseInput
            label="Player Id"
            setState={setPlayerId}
            className="w-1/2"
          />
          <BaseInput
            label="Player Name"
            setState={setPlayerName}
            className="w-1/2"
          />
        </div>
        <div className="w-1/3 flex space-x-2">
          <BaseButton slot="Search" style="blood" className="w-1/2 h-[38px]" />
          <BaseButton
            onClick={() => {
              router.push(`/mygame/addplayer?id=${router.query.id}&name=${router.query.name}`);
            }}
            slot="Add Player"
            style="lime"
            className="w-1/2 h-[38px]"
          />
        </div>
      </div>
      <div className="w-11/12 h-auto overflow-hidden bg-white bg-opacity-50 rounded-md">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-sun text-blood">
              <th className="py-4 px-0.5">Player ID</th>
              <th className="py-4 px-0.5">Player Name</th>
              <th className="py-4 px-0.5">Player Type</th>
              <th className="py-4 px-0.5">Created at</th>
              <th className="py-4 px-0.5">More Details</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(8)].map((e, i) => (
              <tr className="text-center  text-gray-600 hover:bg-grass">
                <td className="py-3 px-0.5 border-b-[0.5px] border-blood">
                  Alfreds Futterkiste
                </td>
                <td className="py-3 px-0.5 border-b-[0.5px] border-blood">
                  Maria Anders
                </td>
                <td className="py-3 px-0.5 border-b-[0.5px] border-blood">
                  Germany
                </td>
                <td className="py-3 px-0.5 border-b-[0.5px] border-blood">
                  Germany
                </td>
                <td className="py-3 px-0.5 border-b-[0.5px] border-blood">
                  <BaseButton
                    onClick={() => {
                      router.push("/mygame/playerinfo/lnwza007");
                    }}
                    slot="View"
                    style="grape"
                    className="w-1/2"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
