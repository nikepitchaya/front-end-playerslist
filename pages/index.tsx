import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import UserMe from "../models/response/UserMe";
import { getToken, getUser } from "../redux/user/slice";
import styles from "../styles/Home.module.css";

export default function Home() {
  const me: UserMe = useSelector(getUser);
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full relative">
        <div className="w-fit absolute top-48 left-[320px] drop-shadow-xl">
          <h1 className="text-6xl animate-bounce">
            Welcome {me && <span className="text-blood">{me.name}</span>} to
            <Link href="/mygame">
              <span className="text-[#FFEF00] hover:underline ">
                Players List
              </span>
            </Link>
          </h1>
        </div>
        <Image src="/home_v2.jpeg" alt="Home" width={1920} height={0} />
        <div className={`${styles.grid} absolute bottom-4 right-4`}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Document &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Document &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>
          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Document &rarr;</h2>
            <p>Discover and deploy boilerplate example.</p>
          </a>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Document &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </div>
      <div className="w-full flex justify-center py-12 drop-shadow-xl bg-[#81E777]">
        <p className="text-2xl">
          Get started by editing{" "}
          <span className="text-[#FFEF00] hover:underline animate-pulse">
            pages/index.tsx
          </span>
        </p>
      </div>
    </div>
  );
}
