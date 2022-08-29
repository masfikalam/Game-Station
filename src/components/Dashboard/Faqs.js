import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Faqs = ({ database, setDatabase }) => {
  const navigate = useNavigate();
  const [edit, setEdit] = useState(null);

  const publish = (e, id) => {
    e.preventDefault();

    const obj = {
      question: e.target.question.value,
      answer: e.target.answer.value,
    };
    const filtered = database.faqlist.filter((faq) => faq.id !== id);

    setDatabase({
      ...database,
      faqlist: [...filtered, obj],
    });
    setEdit(null);
    navigate("/");
  };

  return (
    <article className="faqs">
      <h3>Edit FAQs Section</h3>

      {database.faqlist.map((faq) =>
        edit === faq.id ? (
          <form key={faq.id} onSubmit={(e) => publish(e, faq.id)}>
            <input
              type="text"
              name="question"
              placeholder="Question"
              defaultValue={faq.question}
            />
            <textarea
              rows={5}
              type="text"
              name="answer"
              placeholder="Answer"
              defaultValue={faq.answer}
            ></textarea>
            <div className="btns">
              <button onClick={() => setEdit(null)}>Cancel</button>
              <button>Publish</button>
            </div>
          </form>
        ) : (
          <div key={faq.id} className="faq">
            <p>
              <b>{faq.question}</b>
            </p>
            <p>{faq.answer}</p>

            <button className="edit" onClick={() => setEdit(faq.id)}>
              <FiEdit />
            </button>
          </div>
        )
      )}
    </article>
  );
};

export default Faqs;