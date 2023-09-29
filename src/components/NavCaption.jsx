export default function NavCaption({text, icon = false, }) {

    return (
        <div className="pt-6 pb-3 px-8 flex justify-between">
            <p className="font-bold uppercase tracking-widest white-72 text-xs">{text}</p>
            { icon ? <img src={icon} alt={text} className="cursor-pointer"/> : ''}
        </div>
    )

}