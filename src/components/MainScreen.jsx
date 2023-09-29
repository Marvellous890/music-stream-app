import mainScreenStyles from './mainscreen.module.css'

import arrowLeft from '../assets/icons/arrow-left.svg'
import arrowRight from '../assets/icons/arrow-right.svg'
import search from '../assets/icons/search-normal.svg'
import star from '../assets/icons/star.svg'
import check from '../assets/icons/check.svg'
import headphone from '../assets/icons/headphone.svg'
import notification from '../assets/icons/notification.svg'
import clock from '../assets/icons/clock.svg'
import like from '../assets/icons/heart-2.svg'
import dots from '../assets/icons/dots.svg'

import ArtistSectionBgImg from '../assets/images/image-139.png'
import ArtistSectionImg from '../assets/images/fococlipping-20220120-2192 1.png'
import shapeOfYou from '../assets/images/song-image.png';
import img3 from '../assets/images/image-3.png'
import peru from '../assets/images/peru.png'
import wembly from '../assets/images/wembly.png'
import collection from '../assets/images/no06.png'

import {LabelWithAction} from "./RightBar.jsx";

export default function MainScreen() {
    return (
        <div className="bg-[#121212] w-fit h-screen box-content px-8 overflow-y-auto">
            <NavHeader/>
            <ArtistSection/>
            <LabelWithAction label="Popular"/>
            <PopularSection/>
            <LabelWithAction label="Popular Releases" action={false}/>
            <PopularReleasesSection/>
        </div>
    )
}

function NavHeader() {
    return (
        <div className="flex justify-between pt-4">
            <div className="inline-flex gap-4 items-center">
                <button className="w-12 h-12 p-3 bg-neutral-800 rounded-xl">
                    <img src={arrowLeft} className="m-auto"/>
                </button>
                <div className="w-44 h-5 justify-start items-center gap-3 inline-flex">
                    <div className="text-opacity-50 text-sm font-semibold">Home</div>
                    <img src={arrowRight}/>
                    <div className="text-sm font-semibold">Popular Artist</div>
                </div>
            </div>

            <div className="flex gap-4">
                <div className="w-80 h-12 relative">
                    <div className="w-80 h-12 left-0 top-0 absolute bg-neutral-800 rounded-xl"/>
                    <div
                        className="w-64 h-5 left-[16px] top-[14px] absolute justify-start items-center gap-3 inline-flex">
                        <img src={search}/>
                        <input className="text-neutral-500 text-base block bg-transparent outline-none w-full"
                               placeholder="Search music, artist, albums..."/>
                    </div>
                </div>

                <button className="w-12 h-12 p-3 bg-neutral-800 rounded-xl">
                    <img src={notification}/>
                </button>
            </div>
        </div>
    )
}

function ArtistSection() {
    return (
        <div className={`${mainScreenStyles.artist_section} rounded-2xl p-8 flex justify-between mt-5 mb-5`}
             style={{backgroundImage: `url("${ArtistSectionBgImg}")`}}>
            <div className="w-72 h-52 flex-col justify-start items-start gap-8 inline-flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                    <div className="flex-col justify-start items-start gap-0.5 flex">
                        <div className="justify-start items-center gap-3 inline-flex">
                            <div className="relative">
                                <img src={star} alt="verified"/>
                                <img className="absolute top-1/2 left-1/2" src={check}
                                     style={{transform: "translate(-50%, -50%)"}}/>
                            </div>
                            <div className="text-opacity-70 text-base font-medium">Verified Artist</div>
                        </div>
                        <div className="text-5xl font-bold">Ed Sheeran</div>
                    </div>
                    <div className="justify-start items-center gap-3 inline-flex">
                        <img src={headphone}/>
                        <div><span className="text-base font-semibold">82,736,050</span><span
                            className="text-opacity-70 text-base font-medium"> </span><span
                            className="text-opacity-70 text-base font-normal">monthly listeners</span></div>
                    </div>
                </div>
                <div className="justify-start items-start gap-3 inline-flex">
                    <button className="px-6 py-3 bg-green-500 rounded-3xl justify-start items-start gap-2.5 flex">
                        <p className="text-base font-bold tracking-wide">PLAY</p>
                    </button>
                    <button
                        className="pl-4 pr-6 py-3 rounded-3xl border border-white justify-start items-center gap-2.5 flex">
                        <img src={check}/>
                        <p className="text-base font-bold tracking-wide">FOLLOWING</p>
                    </button>
                </div>
            </div>

            <img className="" style={{marginTop: "-40px"}} src={ArtistSectionImg}/>
        </div>

    )
}

function PopularSection() {
    return (
        <div className="mt-5">
            <PopularSectionItem no="1" img={img3} title="Shiver" listenCount="460,228,511" length="3:27"/>
            <PopularSectionItem no="2" img={shapeOfYou} title="Perfect" listenCount="1,952,015,881" length="4:23"/>
            <PopularSectionItem no="3" img={img3} title="Bad Habits" listenCount="850,545,959" length="3:50"/>
            <PopularSectionItem no="4" img={shapeOfYou} title="Shape of You" listenCount="3,024,067,930" length="3:53"/>
        </div>
    )
}

function PopularSectionItem({no, title, img, listenCount, length}) {
    let classes = mainScreenStyles.pop_item +
        " flex items-center justify-between py-4 hover:border-y border-neutral-600 cursor-pointer"

    return (
        <div className={classes}>
            <div className="flex items-center">
                <div className="text-base font-bold">{no}</div>
                <img className="ml-6 w-14 h-14 rounded-xl" src={img}/>
                <div className="text-base font-bold ml-4">{title}</div>
            </div>
            <div className="flex gap-16">
                <div className="flex gap-4">
                    <img src={headphone}/>
                    <p className="text-base font-bold">{listenCount}</p>
                </div>
                <div className="gap-3 inline-flex">
                    <img src={clock}/>
                    <div className="text-base font-bold">{length}</div>
                </div>
                <img src={like}/>
                <img src={dots}/>
            </div>
        </div>
    )
}

function PopularReleasesSection() {
    return (
        <div className="flex mt-6 gap-5">
            <PopularReleasesCard imgSrc={peru} name="Peru" year="Latest Releases" type="S.."/>
            <PopularReleasesCard imgSrc={img3} name="=" year="2021"/>
            <PopularReleasesCard imgSrc={shapeOfYou} name="÷ (Deluxe)" year="2017"/>
            <PopularReleasesCard imgSrc={wembly} name="x (Wembley Edit.." year="2015"/>
            <PopularReleasesCard imgSrc={collection} name="No. 6 Collaborat.." year="2019"/>
            <PopularReleasesCard imgSrc={wembly} name="x (Delux Edition)" year="2014"/>
        </div>
    );
}

function PopularReleasesCard({imgSrc, name, year, type = "Album"}) {
    return (
        <div className="flex-col justify-start items-start gap-4 inline-flex">
            <img className="w-28 h-28 rounded-xl" src={imgSrc}/>
            <div className="flex-col justify-start items-start gap-1 flex">
                <div className="text-sm font-semibold">{name}</div>
                <div className="text-white text-opacity-70 text-xs font-normal">{year} • {type}</div>
            </div>
        </div>
    )
}