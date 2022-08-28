import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import admin from "../resources/pewdiepie.png";
import "../styles/Admin.css";

const Admin = () => {
  return (
    <section id="admin">
      <h2>
        <MdAdminPanelSettings class="target" /> Community Admin
      </h2>

      <article>
        <img src={admin} alt="pewdiepie" />

        <div>
          <h4>@Pewdiepie</h4>
          <small>Admin | Gamer | Streamer</small>
          <br />

          <div className="social">
            <a
              className="youtube"
              href="https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw"
            >
              <FaYoutube className="icon" /> Youtube
            </a>
            <a
              className="instagram"
              href="https://www.instagram.com/pewdiepie/"
            >
              <AiFillInstagram className="icon" /> Instagram
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Admin;
