import config from "../common/ConfigReader";

export default function Sidebar() 
{
    return (
        <div 
            className="flex flex-col rounded-2xl border-1 border-white absolute left-4 top-17 h-200 w-62"
            style={{ backgroundColor: config.global["sidebar-color"] }}
        >
            
        </div>
    )
}