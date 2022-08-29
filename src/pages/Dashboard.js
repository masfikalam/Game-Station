import React, { useContext, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";
import { dbContext } from "../App";
import Admin from "../components/Dashboard/Admin";
import Community from "../components/Dashboard/Community";
import Header from "../components/Dashboard/Header";
import Hero from "../components/Dashboard/Hero";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [database, setDatabase] = useContext(dbContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="dashboard">
      <nav id="nav">
        <div>
          <h2>
            <FiEdit className="down" /> Template Dashboard
          </h2>
          <Link to="/">
            <button>
              <TiArrowBack className="icon" /> Back
            </button>
          </Link>
        </div>
      </nav>

      <p>Edit the community landing page</p>

      <Header database={database} setDatabase={setDatabase} />
      <Hero database={database} setDatabase={setDatabase} />
      <Community database={database} setDatabase={setDatabase} />
      <Admin database={database} setDatabase={setDatabase} />
    </section>
  );
};

export default Dashboard;
