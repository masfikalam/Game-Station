import { RiQuestionAnswerFill } from "react-icons/ri";
import "../../styles/Testimonials.css";

const Testimonials = ({ testlist }) => {
  return (
    <section id="testimonials">
      <h2>
        <RiQuestionAnswerFill className="icon" /> Testimonials
      </h2>

      <div className="test-boxes">
        {testlist.map((test) => (
          <article key={test.username}>
            <div className="test">
              <img src={test.photo} alt={test.username} />

              <div>
                <h4>@{test.username}</h4>
                <p>{test.text}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
