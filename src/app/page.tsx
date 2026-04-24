"use client";

import Menubar from "./components/LandingMenubar";

import config from "./common/ConfigReader";

// This is the home page on / so this is just index

export default function Home() {
  return (
    <div 
      style={{ backgroundColor: config["global-colors"]["background-color"] }}
      className="h-screen w-screen flex flex-col justify-center items-center"
    >
      <Menubar></Menubar> 

      <img className="rounded-2xl h-46 w-46" src={`${config.global["logo-location"]}`} alt="logo" />

      <h3 
        style={{ color: config["global-colors"]["text-color"] }}
        className="font-extrabold text-3xl mb-4"
      >
        {config.global.sitename}
      </h3>

      <span 
        style={{
          color: config["global-colors"]["text-color"]
        }}
        className="mb-4 font-bold text-xl"
      >{config.global.sitedescription}</span>

      <a 
        style={{
          backgroundColor: config.homepage["view-docs-button-color"],
          color: config.homepage["view-docs-button-text-color"],
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor =
            config.homepage["view-docs-button-color-hover"])
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor =
            config.homepage["view-docs-button-color"])
        }
        className="rounded-lg p-2 pl-4 pr-4 scale-100 ease-in-out duration-200 hover:scale-110" 
        href={`/doc?md=` + config.docs["index-md"]}
        target="_parent" 
        rel="noreferrer"
      >
        {config.homepage["view-docs-button-text"]}
      </a>
    </div>
  );
}
