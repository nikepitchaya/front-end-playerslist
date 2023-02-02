import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import BaseButton from "../components/base/base-button";
import BaseInput from "../components/base/base-input";
import api from "../plugins/api";
import { setToken, setUser } from "../redux/user/slice";
import UserLogin from "../models/request/UserLogin";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [position, setPosition] = useState<number>(1);

  const movingStyle: string[] = [
    "w-1/3 translate-x-full duration-300",
    "w-1/3",
    "w-1/3 -translate-x-full duration-300",
  ];

  async function onSubmit(): Promise<void> {
    let error: string = validateForm();
    if (error) {
      alert(error);
      return undefined;
    }
    let form: UserLogin = {
      username: username,
      password: password,
    };
    let token: string = await api.userLogin(form);
    // console.log(token);
    if (token) {
      await dispatch(setToken(token));
      let me = await api.userGetMe(token);
      await dispatch(setUser(me));
      router.push("/");
    }
  }

  function validateForm(): string {
    let error = "";
    if (!username) error = "Please enter you username";
    else if (!password) error = "Please enter you password";
    return error;
  }

  return (
    <div className="w-full flex flex-col items-center justify-center py-8 space-y-8">
      <p className="text-5xl">
        Players List <span className="text-sun text-5xl">Login</span>
      </p>
      <div className="w-1/3 flex flex-col items-center px-4 py-8 space-y-4 bg-blood rounded-md">
        <Image src="/logo.png" alt="Players List Logo" width={300} height={0} />
        <BaseInput
          label="Username"
          type="text"
          setState={setUsername}
          className="w-full"
          classLabel="text-white"
        />
        <BaseInput
          label="Password"
          type="password"
          setState={setPassword}
          className="w-full"
          classLabel="text-white"
        />
        <div className="w-full flex justify-between">
          <Link href={"/register"}>
            <p className="text-sm text-white underline">Register</p>
          </Link>
          <Link href={"/forgot"}>
            <p className="text-sm text-white underline">Forgot password</p>
          </Link>
        </div>
      </div>
      <div className="w-1/3 flex justify-center">
        <BaseButton
          onMouseOver={() => {
            if (!username || !password)
              position == 0 ? setPosition(2) : setPosition(0);
          }}
          onClick={onSubmit}
          slot="Login"
          className={movingStyle[position]}
        />
      </div>
    </div>
  );
}
