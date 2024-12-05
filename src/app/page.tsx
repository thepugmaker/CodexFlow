import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="h-screen w-72 bg-white border-2 border-black justify-items-center rounded-tr-xl shadow-xl">
        <h3 className="text-black font-medium mt-2">
          CodexFlow
        </h3>
        <p className="text-black font-medium mt-2 ml-2 justify-self-start">
          Pages
        </p>
      </div>
    </div>
  );
}
