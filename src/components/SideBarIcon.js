function SideBarIcon({icon, text = 'tooltip 💡'}) {
    return (
        <div className="sidebar-icon group">
            {icon}

            <div className="sidebar-tooltip group-hover:scale-100">
                {text}
            </div>
        </div>
    )
}

export default SideBarIcon
