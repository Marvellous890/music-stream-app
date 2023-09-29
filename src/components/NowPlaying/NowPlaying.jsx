import npStyles from './nowplaying.module.css'

import likeIcon from '../../assets/icons/heart-2.svg'
import songImage from '../../assets/images/song-image.png'
import shuffle from '../../assets/icons/shuffle.svg'
import rewind from '../../assets/icons/rewind.svg'
import pauseIcon from '../../assets/icons/pause.svg'
import forward from '../../assets/icons/forward.svg'
import repeat from '../../assets/icons/repeate-one.svg'
import volumeHigh from '../../assets/icons/volume-high.svg'
import message2 from '../../assets/icons/message-2.svg'


/*function _NowPlaying({children}) {
    return ()
}*/

export default function NowPlaying() {

    let classes = npStyles['now-playing']

    return (
       <div className={`${classes} flex justify-between items-center bg-neutral-900 bg-opacity-60 h-28 py-6 px-8`}>
           <div className={`absolute top-0 left-0 h-1 w-full bg-neutral-600`}>
               <div className="w-96 h-full bg-white rounded-tr-lg rounded-br-lg" />
           </div>
           <div className="items-center gap-8 inline-flex">
               <div className="items-center gap-4 flex">
                   <img className="w-16 h-16 rounded-xl" src={songImage /*"https://via.placeholder.com/64x64"*/} />
                   <div className={`flex-col items-start gap-2 inline-flex text-white`}>
                       <p className="text-white text-lg font-semibold">Shape of You</p>
                       <p className="text-white text-opacity-70 text-sm">Ed Sheeran</p>
                   </div>
               </div>
               <img src={likeIcon}/>
           </div>

           <div className="items-center gap-6 inline-flex">
               <img src={shuffle}/>
               <img src={rewind}/>
               <button className={`${npStyles.playBtn} p-3 flex justify-center items-center`}>
                   <img src={pauseIcon} />
               </button>
               <img src={forward}/>
               <img src={repeat}/>
           </div>

           <div className="flex items-center">
               <div className="text-white text-opacity-70">1:45 / 4:42</div>
               <img src={volumeHigh} className="ml-5"/>
               <div className="w-24 h-1 bg-neutral-600 rounded-2xl ml-3">
                   <div className="w-20 h-1 bg-white rounded-2xl" />
               </div>
               <img src={message2} className="ml-8" alt="message 2" />
           </div>
       </div>
    )
}