import { BiGroup } from "react-icons/bi";
import { GiGamepad } from "react-icons/gi";
import { HiHome } from "react-icons/hi";
import "../styles/Sidebar.css";

const Sidebar = ({ groups }) => {
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
          <BiGroup className="icon" /> Explore
        </li>
      </ul>

      <hr />

      <ul>
        {groups.map((group, id) => (
          <li key={id}>
            <GiGamepad className="icon" /> {group.title}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
