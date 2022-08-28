import { BiGroup } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <aside>
      <ul>
        <li onClick={scrollTop}>
          <HiHome className="icon" /> Home
        </li>
        <li>
          <BiGroup className="icon" /> Groups
        </li>
      </ul>

      <hr />
    </aside>
  );
};

export default Sidebar;
