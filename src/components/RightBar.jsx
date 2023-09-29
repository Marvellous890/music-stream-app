import arrowDown from '../assets/icons/arrow-down.svg';
import profilePic from '../assets/images/profile-pic.png';
import  crown from '../assets/icons/crown.svg';
import alsoLike from '../assets/images/also-like.png'
import RecentlyPlayedItem from "./RecentlyPlayedItem.jsx";

import shapeOfYou from '../assets/images/song-image.png';
import hanin from '../assets/images/hanin.png'
import img2 from '../assets/images/image-2.png'
import img3 from '../assets/images/image-3.png'
import img4 from '../assets/images/image-4.png'

export default function RightBar() {
    return (
        <div className="w-fit max-w-full h-screen p-8 bg-neutral-800 overflow-y-auto overflow-x-hidden">

            <div className="w-60 h-12 justify-start items-center gap-5 flex">
                <div className="justify-start items-center gap-4 flex">
                    <img className="w-12 h-12 rounded-full object-cover" src={profilePic} />
                    <div className="flex-col justify-start items-start gap-1 inline-flex">
                        <div className="text-white text-base font-semibold ">James Rodriguez</div>
                        <div className="justify-start items-start gap-1 inline-flex">
                            <div className="text-white text-opacity-70 text-xs">Premium</div>
                            <div className="text-white text-opacity-70 text-xs">•</div>
                            <img src={crown}/>
                        </div>
                    </div>
                </div>
                <img src={arrowDown}/>
            </div>

            <div className="w-60 mt-10 flex-col justify-start items-start gap-4 inline-flex">
                <LabelWithAction label="Fans Also Like"/>
                <div className="w-full flex flex-col items-center mb-2.5">
                    <div className="w-60 h-60 relative">
                        <img className="w-full h-full rounded-xl" src={alsoLike} />
                        <div className="absolute bottom-0 left-0 w-60 h-16 bg-neutral-900 bg-opacity-60 rounded-bl-xl rounded-br-xl backdrop-blur-[8px]">
                            <div className="w-28 h-10 ml-4 mt-4 flex-col justify-start items-start gap-1 inline-flex">
                                <div className="w-28 text-white text-sm font-semibold ">James Arthur</div>
                                <div className="w-28 text-white text-opacity-70 text-xs font-normal ">Artist</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-14 h-2 relative mt-3">
                        <div className="w-2 h-2 left-0 top-0 absolute bg-white rounded-full" />
                        <div className="w-2 h-2 left-[16px] top-0 absolute bg-white bg-opacity-40 rounded-full" />
                        <div className="w-2 h-2 left-[32px] top-0 absolute bg-white bg-opacity-40 rounded-full" />
                        <div className="w-2 h-2 left-[48px] top-0 absolute bg-white bg-opacity-40 rounded-full" />
                    </div>
                </div>
                <LabelWithAction label="Recently Played"/>

                <div className="w-full flex flex-col gap-5">
                    <RecentlyPlayedItem imgUrl={shapeOfYou} songName="Perfect" artistName="Ed Sheeran" time="2min ago"/>
                    <RecentlyPlayedItem imgUrl={hanin} songName="Roman Picisan" artistName="Hanin Dhiya, Ah.." time="8min ago"/>
                    <RecentlyPlayedItem imgUrl={img2} songName="Title (Deluxe)" artistName="Meghan Trainor" time="1hr ago"/>
                    <RecentlyPlayedItem imgUrl={img3} songName="Shiver" artistName="Ed Sheeran" time="4hr ago"/>
                    <RecentlyPlayedItem imgUrl={img4} songName="Feel Something" artistName="Jaymes Young" time="5hr ago"/>
                    <RecentlyPlayedItem imgUrl={shapeOfYou} songName="Shape of You" artistName="Ed Sheeran" time="12hr ago"/>
                    <RecentlyPlayedItem imgUrl={img3} songName="Bad Habits" artistName="Ed Sheeran" time="14hr ago"/>
                </div>

            </div>
        </div>
    )
}

export function LabelWithAction ({label, action = "See All"}) {
    return (
        <div className="flex w-full justify-between mt-8">
            <div className="text-white text-lg font-bold ">{label}</div>
            <div className="text-right text-green-500 text-base font-semibold ">{action}</div>
        </div>
    )
}