import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaTachometerAlt, FaChartPie, FaUsers, FaCog } from "react-icons/fa";
import { BsArrowLeftCircle } from "react-icons/bs";
import "./style.scss";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const location = useLocation();

  const menuItems = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaTachometerAlt />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaChartPie />,
    },
    {
      path: "/users",
      name: "Users",
      icon: <FaUsers />,
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <FaCog />,
    },
  ];

  useEffect(() => {
    const mainContent = document.querySelector(".main-content");
    if (mainContent) {
      mainContent.classList.toggle("sidebar-collapsed", !isExpanded);
    }
  }, [isExpanded]);

  return (
    <div className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
      <div className="sidebar-header">
        <button
          className="toggle-button"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <BsArrowLeftCircle className={!isExpanded ? "rotate-180" : ""} />
        </button>
      </div>
      <Nav className="flex-column">
        {menuItems.map((item) => (
          <Nav.Link
            key={item.path}
            as={Link}
            to={item.path}
            className={`sidebar-link ${
              location.pathname === item.path ? "active" : ""
            }`}
          >
            <span className="icon">{item.icon}</span>
            <span
              className="label"
              style={{
                opacity: isExpanded ? 1 : 0,
                transition: "opacity 0.3s ease-in-out",
              }}
            >
              {item.name}
            </span>
          </Nav.Link>
        ))}
      </Nav>
    </div>
  );
};

export default Sidebar;
