import React, { useState } from "react";
import { FcClock } from "react-icons/fc";
import { useNavigate } from "react-router";
import { AiOutlineBars } from "react-icons/ai";
import { FcLeft } from "react-icons/fc";
import { FcDribbble } from "react-icons/fc";
import { FcIpad } from "react-icons/fc";
import { FcMultipleInputs } from "react-icons/fc";
const menuItems = [
  { icon: <FcClock />, label: "use-debounce", path: "/use-debounce" },
  { icon: <FcLeft />, label: "use-previous", path: "/use-previous" },
  { icon: <FcDribbble />, label: "use-idle", path: "/use-idle" },
  { icon: <FcIpad />, label: "use-responsive", path: "/use-responsive" },

  {
    icon: <FcMultipleInputs />,
    label: "use-intersection",
    path: "/use-intersection",
  },
];

function Sidebar() {
  const [activeItem, setActiveItem] = useState(0);
  const navigation = useNavigate();
  const clickHandle = (path: string, index: number) => {
    navigation(path);
    setActiveItem(index);
  };
  return (
    <nav className={`sidebar`}>
      <header>
        <div className="logo-text">
          <span className="name">Custom Hooks</span>
        </div>
      </header>
      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <li
            key={item.label}
            className={`menu-item ${
              activeItem === index ? "menu-item-active" : ""
            }`}
          >
            <span
              className="menu-bar"
              onClick={() => clickHandle(item.path, index)}
            >
              <span className="icon">{item.icon}</span>
              <span className="text">{item.label}</span>
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Sidebar;
