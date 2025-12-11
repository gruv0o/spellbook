import Logo from "/SpellBook-Logo.png"

function Sidebar() {
    return (
            <div className="h-full w-90 flex-col overflow-scroll rounded-2xl bg-gray-50 p-3 drop-shadow-md/10 ">
                <div className="w-full h-fit flex items-center drop-shadow-xl/30 drop-shadow-MainDark">
                    <img className="h-20 ratio-1/1" src={Logo} alt="SpellBook logo"/>
                    <h1 className="font-geom font-extrabold text-4xl text-MainDark">SPELLBOOK</h1>
                </div>
                <div className="bg-gray-400 w-full h-full flex-auto">
                    <nav></nav>
                    <nav></nav>
                    <nav></nav>
                    <nav></nav>
                </div>
            </div>
    )
}

export default Sidebar;