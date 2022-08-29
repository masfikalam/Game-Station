import React, { useState } from "react";
import PreHeader from "../Home/Header";

const Header = ({ database, setDatabase }) => {
  const [preview, setPreview] = useState(false);
  const [newData, setNewData] = useState(database.brand);

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
          <input type="text" name="name" placeholder="Community Title" />
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
