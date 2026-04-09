import config from "../common/ConfigReader";

export default function Menubar() 
{
    return (
        <div style={{ backgroundColor: config.global["menubar-color"]}} className="w-screen absolute border-b-1 flex border-b-white h-14 top-0">
            <h1 className="text-white font-extrabold text-2xl m-2 ml-4">{config.global.sitename}</h1>

            <a 
                className="invert absolute right-2 top-3 rounded-full scale-100 hover:scale-110 transition-all ease-in-out duration-200"
                href={`${config.global["github-link"]}`} 
                target="_blank" 
                rel="noreferrer"
            >
                <img className="h-8 w-8" src="/octicons-mark-github.svg"></img>
            </a>
        </div>
    )
}