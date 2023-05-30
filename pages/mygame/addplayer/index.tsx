import { useRouter } from "next/router";
import BaseButton from "../../../components/base/base-button";
import BaseInput from "../../../components/base/base-input";
import { useState } from "react";
import api from "../../../plugins/api";
import UserPlayer from "../../../models/response/UserPlayer";
export default function AddPlayer() {
  const router = useRouter();

  // const [user_game_category_id, setUser_game_category_id] = useState<string>("");

  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  const [action, setAction] = useState<string>("");

  const addNewPlayer = async () => {
    if (!router.query.id) return;
    let form = {
      user_game_category_id: parseInt(router.query.id[0]),
      type_id: parseInt(type),
      name: name,
      about: about,
      action: action,
    };
    let response: UserPlayer = await api.userAddNewPlayer(form);
    if (response) {
      router.push(
        `/mygame/playerlist?id=${router.query.id}&name=${router.query.name}`
      );
    }
  };

  return (
    <div className="w-full flex flex-col items-center py-8 px-4 space-y-6">
      <div className="w-fit flex items-center space-x-4 ">
        <p className="text-5xl underline">Add Player To List</p>
        <p className=" p-4 text-blood text-5xl rounded-md bg-sun">
          {router.query.name}
        </p>
      </div>
      <div className="w-1/2 flex flex-col p-6 space-y-2 bg-white bg-opacity-50 rounded-md">
        <BaseInput label="Name" setState={setName} />
        {/* <BaseInput label="Type" setState={setType} /> */}
        <div className="w-full space-y-2 py-2">
          <p>Type</p>
          <select
            onChange={(e) => {
              setType(e.target.value);
            }}
            className="w-full py-0.5 rounded-md border-blood border-[3px]"
          >
            <option value="" hidden>
              Please select player type
            </option>
            <option value={1}>Kind</option>
            <option value={2}>Toxic</option>
            <option value={3}>Disturb</option>
            <option value={4}>Cheat</option>
            <option value={5}>Stupid</option>
            <option value={6}>Masterful</option>
          </select>
        </div>
        <BaseInput type="textarea" label="About" setState={setAbout} />
        <BaseInput type="textarea" label="action" setState={setAction} />
      </div>
      <BaseButton
        onClick={() => {
          addNewPlayer();
        }}
        slot="Add an new player"
        className="h-[42px]"
      />
    </div>
  );
}
