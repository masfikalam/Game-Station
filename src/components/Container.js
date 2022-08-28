import "../styles/Container.css";
import Sidebar from "./Sidebar";

const Container = ({ children }) => {
  return (
    <div className="container">
      <Sidebar />
      <div>{children}</div>
    </div>
  );
};

export default Container;
