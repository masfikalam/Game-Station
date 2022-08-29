import React, { useState } from "react";
import PreCommunity from "../Home/Community";

const Community = ({ database, setDatabase }) => {
  const [preview, setPreview] = useState(false);
  const [newData, setNewData] = useState(database.community);

  const showPreview = (e) => {
    e.preventDefault();
    setPreview(true);

    if (e.target.goal.value) {
      setNewData({ goal: e.target.goal.value });
    }
  };

  const cancelPreview = () => {
    setPreview(false);
    setNewData(database.community);
  };

  const publish = () => {
    setDatabase({
      ...database,
      community: {
        ...newData,
      },
    });

    setPreview(false);
  };

  return (
    <article className="community">
      <h3>Edit Community Section</h3>

      {preview === false ? (
        <form onSubmit={showPreview}>
          <textarea
            name="goal"
            placeholder="Community Goal"
            rows={5}
          ></textarea>
          <button type="submit">Preview</button>
        </form>
      ) : (
        <div className="preview">
          <PreCommunity community={newData} />
          <div className="btns">
            <button onClick={cancelPreview}>Cancel</button>
            <button onClick={publish}>Publish</button>
          </div>
        </div>
      )}
    </article>
  );
};

export default Community;
