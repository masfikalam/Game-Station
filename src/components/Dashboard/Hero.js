import React, { useState } from "react";
import PreHero from "../Home/Hero";

const Hero = ({ database, setDatabase }) => {
  const [preview, setPreview] = useState(false);
  const [newData, setNewData] = useState(database.hero);

  const showPreview = (e) => {
    e.preventDefault();
    setPreview(true);

    if (e.target.text.value && e.target.banner.value) {
      setNewData({
        heroText: e.target.text.value,
        banner: e.target.banner.value,
      });
    } else if (e.target.text.value) {
      setNewData({ ...newData, heroText: e.target.text.value });
    } else if (e.target.banner.value) {
      setNewData({ ...newData, banner: e.target.banner.value });
    }
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
          <textarea name="text" placeholder="Hero Text" rows={5}></textarea>
          <button type="submit">Preview</button>
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
