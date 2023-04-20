import Image from "next/image";

export default function Footer() {
  return (
    <div className="bottom-0 w-full flex flex-col items-center justify-center py-4 space-y-2 bg-[#DB0062] ">
      <div className="w-full flex justify-center items-center space-x-4">
        <p className="text-[#80FFEE]">
          Players List is a personal project. Made for educational and practice
          purposes only.
        </p>
        <Image
          src="/logo.png"
          alt="Players List Smile Logo"
          width={100}
          height={0}
        />
      </div>
      <div className="flex space-x-2">
        <p className="text-[#80FFEE] text-sm">
          Developed by{" "}
          <span className="text-sm text-[#FFEF00]">
            Pitchaya Kacharatpaisal
          </span>
        </p>
      </div>
    </div>
  );
}
