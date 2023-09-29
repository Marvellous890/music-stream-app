import NavItem from "./NavItem/NavItem.jsx";
import NavCaption from "./NavCaption.jsx";

import logo from "../assets/icons/logo.svg";
import home from "../assets/icons/home.svg";
import discovery from "../assets/icons/discovery.svg";
import radio from "../assets/icons/radio.svg";
import albums from "../assets/icons/audio-square.svg";
import cover from "../assets/icons/microphone-2.svg";
import recent from "../assets/icons/music-square-add.svg";
import favourite from "../assets/icons/Heart.svg";
import local from "../assets/icons/Folder.svg";
import add from "../assets/icons/add.svg";
import audio from "../assets/icons/note-square.svg";

function _NavBar({children}) {
    return (
        <div className="Sidebar w-64 h-screen pt-8 bg-neutral-800 overflow-y-auto text-[80%]">
        {children}
        </div>
    )
}

export default function NavBar() {
    return (
        <_NavBar>
            <img src={logo} className="mx-auto mb-10"/>

            <NavItem img={home} text="Home" active="e"/>
            <NavItem img={discovery} text="Discovery"/>
            <NavItem img={radio} text="Radio"/>
            <NavItem img={albums} text="Albums"/>
            <NavItem img={cover} text="Cover"/>
            <NavCaption text="Library"/>
            <NavItem img={recent} text="Recently Added"/>
            <NavItem img={favourite} text="Favourite Song"/>
            <NavItem img={local} text="Local Files"/>
            <NavCaption text="Playlist" icon={add}/>
            <NavItem img={audio} text="Lo-fi Music"/>
            <NavItem img={audio} text="Best of Bon Jovi"/>
            <NavItem img={audio} text="Best of John Mayer"/>

        </_NavBar>
    )
}