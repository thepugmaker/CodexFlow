import config from "../common/ConfigReader";

export default function LandingMenubar() 
{
    return (
        <div style={{ backgroundColor: config.menubar["menubar-color"], color: config["global-colors"]["text-color"] }} className={`w-screen absolute flex h-14 top-0 
        ${
            config.menubar["show-border"]
            ? "border-b-white border-b"
            : "border-0"
        }
        `}>
            <a 
                style={{ color: config["global-colors"]["text-color"] }}
                className="font-extrabold text-2xl m-2 ml-4"
                href={`/`} 
                target="_parent" 
                rel="noreferrer"
            >
                {config.global.sitename}
            </a>

            {/* Improve built with codeflow later plus add the github logo back to top-3 when making it normal */}

            <a 
                style={{
                    color: `${config["global-colors"]["text-color"]}80`
                }}
                className="text-xs absolute right-0 italic"
                href={`https://github.com/thepugmaker/CodexFlow`} 
                target="_blank" 
                rel="noreferrer"
            >
                Built with CodexFlow
            </a>

            {config.global["should-github-stuff"] && (
                <a 
                    className="invert absolute right-2 top-4 rounded-full scale-100 hover:scale-110 transition-all ease-in-out duration-200"
                    href={config.global["github-link"]}
                    target="_blank" 
                    rel="noreferrer"
                >
                    <img className="h-8 w-8" src="/octicons-mark-github.svg" />
                </a>
            )}
        </div>
    )
}