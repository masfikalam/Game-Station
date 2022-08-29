import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import PreAdmin from "../Home/Admin";

const Admin = ({ database, setDatabase }) => {
  const [preview, setPreview] = useState(false);
  const [newData, setNewData] = useState(database.admin);

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
    setNewData(database.admin);
  };

  const publish = () => {
    setDatabase({
      ...database,
      admin: {
        ...newData,
      },
    });

    setPreview(false);
  };

  return (
    <article className="admin">
      <h3>Edit Admin Section</h3>

      {preview === false ? (
        <form onSubmit={showPreview}>
          <input type="text" name="photo" placeholder="Photo Link" />
          <input type="text" name="username" placeholder="Admin Username" />
          <input type="text" name="bio" placeholder="Admin Bio Text" />
          <input type="text" name="youtube" placeholder="Youtube Channel" />
          <input type="text" name="instagram" placeholder="Instagram Profile" />
          <button type="submit">
            Preview <FaEye className="icon" />
          </button>
        </form>
      ) : (
        <div className="preview">
          <PreAdmin admin={newData} />
          <div className="btns">
            <button onClick={cancelPreview}>Cancel</button>
            <button onClick={publish}>Publish</button>
          </div>
        </div>
      )}
    </article>
  );
};

export default Admin;
