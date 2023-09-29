import navStyles from './navitem.module.css'

function NavItem({active, img, text}) {

    let classes = navStyles.navitem + (active ? ' ' + navStyles.active : '')

    return (
        <div className={`${classes} py-3 pl-8 flex cursor-pointer`}>
            <img src={img} alt={text}/>
            <p className="ml-4 font-medium white-72">{text}</p>
        </div>
    )

}

export default NavItem;