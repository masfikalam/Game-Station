import { RiQuestionAnswerFill } from "react-icons/ri";
import "../styles/Testimonials.css";

const Testimonials = () => {
  const testList = [
    {
      username: "DragonSlayer04",
      text: "Best community ever!",
      photo:
        "https://img.freepik.com/premium-vector/gamer-mascot-geek-boy-esports-logo-avatar-with-headphones-glasses-cartoon-character_8169-228.jpg",
    },
    {
      username: "Mystique45",
      text: "Love this platform. Thanks to everyone XOXO",
      photo:
        "https://i.pinimg.com/236x/86/08/c5/8608c5397759d85490fee0e75847b417.jpg",
    },
    {
      username: "PinkPanther87",
      text: "Found the best buddies here <3",
      photo:
        "https://cdn.dribbble.com/users/1146759/screenshots/16326268/_3.png?compress=1&resize=400x300",
    },
    {
      username: "DarkMaster69",
      text: "Great platform for mods :D",
      photo:
        "https://i.pinimg.com/236x/8d/02/ed/8d02edb5b00a2d11a398fefc56ac45e7.jpg",
    },
  ];

  return (
    <section id="testimonials">
      <h2>
        <RiQuestionAnswerFill className="icon" /> Testimonials
      </h2>

      {testList.map((test) => (
        <article key={test.username}>
          <img src={test.photo} alt={test.username} />

          <div>
            <h4>@{test.username}</h4>
            <p>{test.text}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Testimonials;
