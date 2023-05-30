import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import BaseButton from "../../../components/base/base-button";
import BaseInput from "../../../components/base/base-input";
import BaseModal from "../../../components/base/base-modal";
import Trash from "../../../components/icon/trash";
import UserPlayer from "../../../models/response/UserPlayer";
import api from "../../../plugins/api";
import dayjs from "dayjs";

export default function PlayerList() {
  const router = useRouter();
  const [playerIds, setPlayerIds] = useState<string>("");
  const [playerId, setPlayerId] = useState<number>(0);
  const [playerName, setPlayerName] = useState<string>("");
  const [player, setPlayer] = useState<UserPlayer[]>([]);

  // Modal setting
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  const modalSetting = async (id: number) => {
    let title = "Delete Player";
    await setTitle(title);
    let content = `Do you want to delete "${player}" from your list? `;
    await setContent(content);
    await setPlayerId(id);
    setShowModal(true);
  };

  const getAllPlayer = async () => {
    if (!router.query.id) return;
    let userGameCategoryId = await parseInt(router.query.id[0]);
    let data = await api.userGetAllPlayer(userGameCategoryId);
    if (data) {
      console.log(data);
      setPlayer([...data]);
    }
  };

  const getPlayerType = (playerType: number): string => {
    let response = "";
    if (playerType == 6) response = "Masterful";
    else if (playerType == 5) response = "Stupid";
    else if (playerType == 4) response = "Cheat";
    else if (playerType == 3) response = "Distrub";
    else if (playerType == 2) response = "Toxic";
    else if (playerType == 1) response = "Kind";
    return response;
  };

  const deletePlayer = async () => {
    let data = await api.userDeletePlayer(playerId);
    if (data) {
      getAllPlayer();
      setShowModal(false);
    }
  };

  useEffect(() => {
    getAllPlayer();
  }, []);

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
            setState={setPlayerIds}
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
              router.push(
                `/mygame/addplayer?id=${router.query.id}&name=${router.query.name}`
              );
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
              <th className="py-4 px-0.5"></th>
            </tr>
          </thead>
          <tbody>
            {player.length != 0 ? (
              player.map((e, i) => (
                <tr
                  key={i}
                  className="text-center  text-gray-600 hover:bg-grass"
                >
                  <td className="py-3 px-0.5 border-b-[0.5px] border-blood">
                    {e.id}
                  </td>
                  <td className="py-3 px-0.5 border-b-[0.5px] border-blood">
                    {e.name}
                  </td>
                  <td className="py-3 px-0.5 border-b-[0.5px] border-blood">
                    {getPlayerType(e.type_id)}
                  </td>
                  <td className="py-3 px-0.5 border-b-[0.5px] border-blood">
                    {dayjs(e.updated_at).format("YYYY-MM-DD")}
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
                  <td className="py-3 px-0.5 border-b-[0.5px] border-blood">
                    <div
                      onClick={() => {
                        modalSetting(e.id);
                      }}
                    >
                      <Trash
                        className="h-6 w-6 hover:scale-110 cursor-pointer"
                        fill="#DB0062"
                      />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="text-center text-2xl text-gray-600 hover:bg-grass">
                <td
                  colSpan={6}
                  className="py-10 px-0.5 border-b-[0.5px] border-blood"
                >
                  No Playerlist
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <BaseModal
        onClick={deletePlayer}
        title={title}
        content={content}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </div>
  );
}
