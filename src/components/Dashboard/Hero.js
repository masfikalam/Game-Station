import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import PreHero from "../Home/Hero";

const Hero = ({ database, setDatabase }) => {
  const [preview, setPreview] = useState(false);
  const [newData, setNewData] = useState(database.hero);

  const showPreview = (e) => {
    e.preventDefault();
    setPreview(true);

    const obj = { ...newData };
    e.target.childNodes.forEach((inp) => {
      if (inp.type !== "submit" && inp.value) {
        obj[inp.name] = inp.value;
      }
    });

    setNewData({ ...newData, ...obj });
  };

  const cancelPreview = () => {
    setPreview(false);
    setNewData(database.hero);
  };

  const publish = () => {
    setDatabase({
      ...database,
      hero: {
        ...newData,
      },
    });

    setPreview(false);
  };

  return (
    <article className="hero">
      <h3>Edit Hero Section</h3>

      {preview === false ? (
        <form onSubmit={showPreview}>
          <input type="text" name="banner" placeholder="Banner Link" />
          <textarea
            rows={5}
            type="text"
            name="heroText"
            placeholder="Hero Text"
          ></textarea>
          <button type="submit">
            Preview <FaEye className="icon" />
          </button>
        </form>
      ) : (
        <div className="preview">
          <PreHero hero={newData} />
          <div className="btns">
            <button onClick={cancelPreview}>Cancel</button>
            <button onClick={publish}>Publish</button>
          </div>
        </div>
      )}
    </article>
  );
};

export default Hero;
