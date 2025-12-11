import Logo from "/SpellBook-Logo.png"
import * as React from "react";

function Sidebar() {
    const Buttons: string[] = ["Accueil", "Notes", "To-Do", "Compte"];
    const [isHovered, setHovered] = React.useState(false);

    return (

            <div className={`min-h-full flex flex-col overflow-hidden rounded-2xl bg-gray-50 p-3 drop-shadow-md/10 gap-3 transition-all duration-300 ${isHovered ? 'w-80' : 'w-28'}`}
                 onMouseEnter={() => setHovered(true)} //div principale + hover
                 onMouseLeave={() => setHovered(false)}
            >

                <div className="w-full h-fit flex items-center gap-3 drop-shadow-xl/30 drop-shadow-MainDark">
                    <img className="h-20 ratio-1/1" src={Logo} alt="SpellBook logo"/>
                            <h1 className={`font-geom font-extrabold text-3xl duration-150 text-MainDark ${isHovered ? 'opacity-100' : 'opacity-0'}`}>SPELLBOOK</h1>
                </div>

                <div className="w-full flex-1 flex flex-col gap-3">
                    {Buttons.map((button) => (
                        <div className="bg-gray-100 w-full drop-shadow-md">
                            <nav key={button} className="w-full h-12 flex-none flex items-center p-3 font-geom drop-shadow-sm">
                                {button}
                            </nav>
                        </div>
                    ))
                    }
                </div>
            </div>
    )
}

export default Sidebar;