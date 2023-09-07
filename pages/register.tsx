import Image from "next/image";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useState } from "react";
import BaseButton from "../components/baseza/base-button";
import BaseInput from "../components/baseza/base-input";
import BaseSelect from "../components/baseza/base-select";
import api from "../plugins/api";

interface Options {
  label: string;
  value: number;
}

export default function Register() {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [gameCategory, setGameCategory] = useState<Options[]>([]);
  const [password, setPassword] = useState<string>("");
  const [checkPassword, setCheckPassword] = useState<string>("");
  const [position, setPosition] = useState<number>(1);

  const options: Options[] = [
    { label: "Apex Legends", value: 1 },
    { label: "Valorant", value: 2 },
    { label: "Rogue Company", value: 3 },
    { label: "PUBG ", value: 4 },
    { label: "Dead by Daylight", value: 5 },
    { label: "Fortnite", value: 6 },
  ];

  const movingStyle: string[] = [
    "w-1/3 translate-x-full duration-300",
    "w-1/3",
    "w-1/3 -translate-x-full duration-300",
  ];

  function onSubmit(): void {
    let error = validateForm();
    if (error) {
      alert(error);
    } else {
      let form = {
        username: username,
        email: email,
        name: name,
        // gameCategory: gameCategory.map((e) => e.value),
        password: password,
      };
      // console.log(form);
      let data = api.guestCreateUser(form);
      if (data != null) {
        router.push("/login")
      }
    }
  }

  function validateForm(): string {
    let error = "";
    if (!username) error = "Please enter you username";
    else if (!email) error = "Please enter you email";
    else if (!name) error = "Please enter you name";
    else if (!password) error = "Please enter you password";
    else if (password != checkPassword) error = "Password must be conform";
    return error;
  }

  return (
    <div className="w-full flex flex-col items-center justify-center py-8 space-y-8">
      <p className="text-5xl">
        Players List <span className="text-sun text-5xl">Register</span>
      </p>
      <div className="w-1/2 flex flex-col items-center px-4 py-8 space-y-4 bg-blood rounded-md">
        <Image src="/logo.png" alt="Players List Logo" width={300} height={0} />
        <div className="w-full flex space-x-2">
          <BaseInput
            label="Username"
            type="text"
            setState={setUsername}
            className="w-1/2"
            classInput="h-[40px]"
            classLabel="text-white"
          />
          <BaseInput
            label="Email"
            type="text"
            setState={setEmail}
            className="w-1/2"
            classInput="h-[40px]"
            classLabel="text-white"
          />
        </div>
        <div className="w-full flex space-x-2">
          <BaseInput
            label="Name (Your profile)"
            type="text"
            setState={setName}
            className="w-1/2"
            classInput="h-[40px]"
            classLabel="text-white"
          />
          <BaseSelect
            label="Game Category"
            value={gameCategory}
            options={options}
            setState={setGameCategory}
            className="w-1/2"
            classLabel="text-white"
          />
        </div>
        <div className="w-full flex space-x-2">
          <BaseInput
            label="Password"
            type="password"
            setState={setPassword}
            className="w-1/2"
            classInput="h-[40px]"
            classLabel="text-white"
          />
          <BaseInput
            label="Confirm Password"
            type="password"
            setState={setCheckPassword}
            className="w-1/2"
            classInput="h-[40px]"
            classLabel="text-white"
          />
        </div>
        <div className="w-full flex justify-between">
          <Link href={"/login"}>
            <p className="text-sm text-white underline">Login</p>
          </Link>
          <Link href={"/forgot"}>
            <p className="text-sm text-white underline">Forgot password</p>
          </Link>
        </div>
      </div>
      <div className="w-1/2 flex justify-center">
        <BaseButton
          onMouseOver={() => {
            if (!username || !password || !name || !checkPassword || !email)
              position == 0 ? setPosition(2) : setPosition(0);
          }}
          onClick={onSubmit}
          slot="Register"
          className={movingStyle[position] + " " + "text-xl"}
        />
      </div>
    </div>
  );
}
