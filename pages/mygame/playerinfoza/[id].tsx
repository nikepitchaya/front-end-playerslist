import { useRouter } from "next/router";

export default function PlayerInformation() {
  //   const test: ParsedUrlQuery = router.query;

  return (
    <div className="w-full flex flex-col items-center py-8 px-4 space-y-6">
      <div className="w-fit flex items-center space-x-4 ">
        <p className="text-5xl underline">Player Information</p>
        <p className=" p-4 text-blood text-5xl rounded-md bg-sun">Inwza007</p>
      </div>
      <div className="w-full flex flex-col space-y-2">
        <p className="underline">SYSTEM REQUIREMENTS</p>
        <div className="w-full flex flex-col">
          <div className="flex justify-around p-2 bg-sun rounded-t-md">
            <p>Windows</p>
            <p>macOS</p>
            <p>SteamOS + Linux</p>
          </div>
          <div className="p-2 space-y-4 bg-white bg-opacity-50 rounded-b-md">
            <p className="text-blood underline">Minimum</p>
            <p className="text-blood">
              Os <span className="text-black">Windows 7 or newer</span>
            </p>
            <p className="text-blood">
              Processor{" "}
              <span className="text-black">
                Dual core from Intel or AMD at 2.8 GHz
              </span>
            </p>
            <p className="text-blood">
              Memory <span className="text-black">4 GB RAM</span>
            </p>
            <p className="text-blood">
              Graphics{" "}
              <span className="text-black">
                NVIDIA GeForce 8600/9600GT, ATI/AMD Radeon HD2600/3600
              </span>
            </p>
            <p className="text-blood">
              Network{" "}
              <span className="text-black">Broadband Internet connection</span>
            </p>
            <p className="text-blood">
              Storage <span className="text-black">15 GB available space</span>
            </p>
            <p className="text-blood">
              Sound Card <span className="text-black">DirectX Compatible</span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col space-y-2">
        <p className="underline">About This Player</p>
        <div className="w-full p-2 bg-white bg-opacity-50 rounded-md ">
          <p>
            The most-played game on Steam. Every day, millions of players
            worldwide enter battle as one of over a hundred Dota heroes. And no
            matter if it's their 10th hour of play or 1,000th, there's always
            something new to discover. With regular updates that ensure a
            constant evolution of gameplay, features, and heroes, Dota 2 has
            truly taken on a life of its own. One Battlefield. Infinite
            Possibilities. When it comes to diversity of heroes, abilities, and
            powerful items, Dota boasts an endless array—no two games are the
            same. Any hero can fill multiple roles, and there's an abundance of
            items to help meet the needs of each game. Dota doesn't provide
            limitations on how to play, it empowers you to express your own
            style. All heroes are free. Competitive balance is Dota's crown
            jewel, and to ensure everyone is playing on an even field, the core
            content of the game—like the vast pool of heroes—is available to all
            players. Fans can collect cosmetics for heroes and fun add-ons for
            the world they inhabit, but everything you need to play is already
            included before you join your first match. Bring your friends and
            party up. Dota is deep, and constantly evolving, but it's never too
            late to join. Learn the ropes playing co-op vs. bots. Sharpen your
            skills in the hero demo mode. Jump into the behavior- and
            skill-based matchmaking system that ensures you'll be matched with
            the right players each game.
          </p>
        </div>
      </div>
    </div>
  );
}
