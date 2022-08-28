import "../styles/Container.css";
import Sidebar from "./Sidebar";

const Container = ({ groups, children }) => {
  return (
    <div className="container">
      <Sidebar groups={groups} />
      <div>{children}</div>
    </div>
  );
};

export default Container;
