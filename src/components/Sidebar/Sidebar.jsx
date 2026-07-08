import './Sidebar.css'
const menuItems = ["Login","Home", "Movies", "TV shows", "Watch", "Awards & Events", "Celebs", "Community"];

function Sidebar({ selectedMenu, setSelectedMenu }){
    return(
        <aside className='Sidebar'>
            <ul>
                {menuItems.map((item) => (
                    <li
                        key={item}
                        className={selectedMenu === item ? "active" : ""}
                        onClick={() => setSelectedMenu(item)}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </aside>
    )
};
export default Sidebar;
