import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import BaseButton from "../../../components/base/base-button";
import BaseInput from "../../../components/base/base-input";
import { useState } from "react";
export default function AddPlayer() {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  const [action, setAction] = useState<string>("");

  return (
    <div className="w-full flex flex-col items-center py-8 px-4 space-y-6">
      <div className="w-fit flex items-center space-x-4 ">
        <p className="text-5xl underline">Add Player To List</p>
        <p className=" p-4 text-blood text-5xl rounded-md bg-sun">Valorant</p>
      </div>
      <div className="w-1/2 flex flex-col p-6 space-y-2 bg-white bg-opacity-50 rounded-md">
        <BaseInput label="Name" setState={setName} />
        <BaseInput label="Type" setState={setType} />
        <BaseInput type="textarea" label="About" setState={setAbout} />
        <BaseInput type="textarea" label="action" setState={setAction} />
      </div>
      <BaseButton
        onClick={() => {
          router.push("/mygame/playerlist/123");
        }}
        slot="Add an new player"
        className="h-[42px]"
      />
    </div>
  );
}
