import { BiGroup } from "react-icons/bi";
import { GiGamepad } from "react-icons/gi";
import { HiHome } from "react-icons/hi";
import "../styles/Sidebar.css";

const Sidebar = ({ groups, groupRef }) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollGroup = () => {
    window.scrollTo({
      top: groupRef.current.offsetTop - 80,
      behavior: "smooth",
    });
  };

  return (
    <aside>
      <ul>
        <li onClick={scrollTop}>
          <HiHome className="icon" /> Home
        </li>
        <li onClick={scrollGroup}>
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
