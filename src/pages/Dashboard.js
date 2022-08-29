import React, { useContext } from "react";
import { dbContext } from "../App";
import Community from "../components/Dashboard/Community";
import Header from "../components/Dashboard/Header";
import Hero from "../components/Dashboard/Hero";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [database, setDatabase] = useContext(dbContext);

  return (
    <section id="dashboard">
      <h2>Welcome to Dashboard</h2>
      <p>Edit the community landing page template from here</p>

      <Header database={database} setDatabase={setDatabase} />
      <Hero database={database} setDatabase={setDatabase} />
      <Community database={database} setDatabase={setDatabase} />
    </section>
  );
};

export default Dashboard;
