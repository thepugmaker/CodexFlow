import Menubar from "./components/Menubar";

import config from "./common/ConfigReader";

// This is the home page on / so this is just index

export default function Home() {
  return (
    <div 
      style={{ backgroundColor: config.global["background-color"] }}
      className="h-screen w-screen flex flex-col justify-center items-center"
    >
      <Menubar></Menubar> 

      <h3 className="text-white font-extrabold text-3xl mb-4">
        {config.global.sitename}
      </h3>

      <a 
        className="rounded-lg bg-teal-300 p-2 pl-4 pr-4 scale-100 ease-in-out duration-200 hover:bg-teal-500 hover:scale-110" 
        href="/doc" 
        target="_parent" 
        rel="noreferrer"
      >
        {config.homepage["view-docs-button-text"]}
      </a>
    </div>
  );
}
