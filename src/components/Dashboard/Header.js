import React, { useState } from "react";
import PreHeader from "../Home/Header";

const Header = ({ database, setDatabase }) => {
  const [preview, setPreview] = useState(false);
  const [newData, setNewData] = useState(database.brand);

  const showPreview = (e) => {
    e.preventDefault();
    setPreview(true);

    if (e.target.title.value && e.target.logo.value) {
      setNewData({ name: e.target.title.value, logo: e.target.logo.value });
    } else if (e.target.title.value) {
      setNewData({ ...newData, name: e.target.title.value });
    } else if (e.target.logo.value) {
      setNewData({ ...newData, logo: e.target.logo.value });
    }
  };

  const cancelPreview = () => {
    setPreview(false);
    setNewData(database.brand);
  };

  const publish = () => {
    setDatabase({
      ...database,
      brand: {
        ...newData,
      },
    });

    setPreview(false);
  };

  return (
    <article className="header">
      <h3>Edit Header Section</h3>

      {preview === false ? (
        <form onSubmit={showPreview}>
          <input type="text" name="logo" placeholder="Logo Link" />
          <input type="text" name="title" placeholder="Community Title" />
          <button type="submit">Preview</button>
        </form>
      ) : (
        <div className="preview">
          <PreHeader brand={newData} />
          <div className="btns">
            <button onClick={cancelPreview}>Cancel</button>
            <button onClick={publish}>Publish</button>
          </div>
        </div>
      )}
    </article>
  );
};

export default Header;
