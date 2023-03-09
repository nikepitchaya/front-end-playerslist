import { useRouter } from "next/router";
import { useState } from "react";
import BaseButton from "../../components/base/base-button";
import BaseInput from "../../components/base/base-input";
import Card from "../../components/gamelist/card";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getToken } from "../../redux/user/slice";
import GameList from "../../models/response/GameList"
import api from "../../plugins/api";
import BaseModal from "../../components/base/base-modal";

export default function Lobby() {
  const router = useRouter();
  // Data
  const [gameList, setGameList] = useState<GameList[]>([]);

  // Search query
  const [id, setId] = useState<number>();
  const [gameId, setGameId] = useState<string>();
  const [gameName, setGameName] = useState<string>("");

  // Modal setting
  const [title, setTitle] = useState<string>("")
  const [content, setContent] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false)

  // Temporary waiting for middleware
  const token: string = useSelector(getToken);
  const checkLogin = () => {
    if (!token) router.push("/login");
    else getGameList()
  }

  const modalSetting = async (name: string, id: number) => {
    let title = "New game"
    await setTitle(title)
    let content = `Do you want to add a game "${name}" ? Once you press OK, the game will be added to your category`
    await setContent(content)
    await setId(id)
    setShowModal(true)
  }

  const addMyGame = async () => {
    let payload = await {
      game_category_id : id
    }
    let response = await api.userAddMyGame(payload)
    if (response) console.log(response)
    await setId(0)
    setShowModal(false)
  }

  const getGameList = async () => {
    let data = await api.userGetGameList()
    setGameList([...data])
  }

  useEffect(() => {
    checkLogin()
  }, [])

  return (
    <div className="w-full flex flex-col items-center py-8">
      <div className="p-4 mb-8 bg-blood rounded-md">
        <p className="text-5xl text-sky">
          Add My Game <span className="text-sun">200% {showModal ? "1" : "0"}</span>
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
        {gameList.map((e, i) => (
          <Card modalSetting={modalSetting} key={i} {...e} />
        ))}
      </div>
      <BaseModal onClick={addMyGame} title={title} content={content} showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
