import { FaQuestionCircle } from "react-icons/fa";
import "../styles/Faqs.css";

const Faqs = () => {
  const faqlist = [
    {
      question: "What is Game Station?",
      answer:
        "Game Station is a platform that connects gamers, allowing them to play their favorite games with partners worldwide. We are redefining the gaming community experience, providing gamers and newcomers alike a safe and place to interact",
    },
    {
      question: "How do I sign up?",
      answer:
        "Signing up to Game Station is easy and free! Just click login on the top of the page or download our APP from PlayStore",
    },
    {
      question: "Can I have more than one account?",
      answer:
        "Game Station users are limited to a single account only. One account per person is in place to prevent competitive advantages in our platform.",
    },
    {
      question: "What are the community guidelines?",
      answer:
        "https://www.facebook.com/fbgaminghome/creators/gaming-community-guidelines",
    },
  ];

  return (
    <section id="faqs">
      <h2>
        <FaQuestionCircle className="icon" /> Community FAQs
      </h2>

      {faqlist.map((faq, id) => (
        <details key={id}>
          <summary>{faq.question}</summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </section>
  );
};

export default Faqs;
