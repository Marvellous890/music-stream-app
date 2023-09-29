
export default function RecentlyPlayedItem({imgUrl, songName, artistName, time}) {
    return (
        <div className="w-60 h-11 justify-between items-center inline-flex">
            <div className="justify-start items-center gap-3 flex">
                <img className="w-11 h-11 rounded-xl" src={imgUrl} />
                <div className="flex-col justify-start items-start gap-1 inline-flex">
                    <div className="text-white text-sm font-bold font-['Manrope']">{songName}</div>
                    <div className="text-white text-opacity-70 text-xs font-normal font-['Manrope']">{artistName}</div>
                </div>
            </div>
            <div className="text-white text-xs font-normal font-['Manrope']">{time}</div>
        </div>
    )
}

// format timestamp to x minutes ago or hours ago or day ago or year ago
function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    if (seconds < 60) {
        return `${seconds} seconds ago`;
    }
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
        return `${minutes} minutes ago`;
    }
    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
        return `${hours} hours ago`;
    }
    const days = Math.floor(hours / 24);
    if (days < 365) {
        return `${days} days ago`;
    }
    const years = Math.floor(days / 365);
    return `${years} years ago`;
}

/*
// format timestamp to x minutes ago or hours ago or day ago
* function formatTimestamp(timestamp) {
    const now = new Date().getTime();
    const time = now - timestamp;
    const minutes = Math.floor(time / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    if (days > 0) {
        return `${days} d ago`;
    }
    if (hours > 0) {
        return `${hours} hr ago`;
    }
    return `${minutes} min ago`;
}*/