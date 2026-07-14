import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const menuItems = [
  
  { name: "Login", path: "/login" },
   { name: "Home", path: "/" },
  { name: "Movies", path: "/movies" },
  { name: "TV Shows", path: "/tvshows" },
  { name: "Watch", path: "/watch" },
  { name: "Awards & Events", path: "/awards" },
  { name: "Celebs", path: "/celebs" },
  { name: "Community", path: "/community" },
];

function Sidebar() {
  return (
    <aside className="Sidebar">
      <ul>
        {menuItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;