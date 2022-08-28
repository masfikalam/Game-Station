import { BiTargetLock } from "react-icons/bi";
import "../styles/Community.css";

const Community = () => {
  return (
    <section id="community">
      <h2>
        <BiTargetLock class="target" /> Community Goles
      </h2>

      <article>
        <p>
          <b>How does anybody find friends?</b> In the traditional community, we
          search through our pool of neighbours and professional colleagues, in
          order to find people who share our values and interests. We exchange
          information about one another, disclose and discuss our mutual
          interests. In a virtual community we can go directly to the place
          where are favourite subjects are being discussed, then get acquainted
          with people who share our passions or who use words in a way we find
          attractive. Your chances of making friends are magnified by orders of
          magnitude over the old methods of finding a peer group.
        </p>

        <div className="perks">
          <p>
            <b>Perks -</b>
          </p>
          <ul>
            <li>Make friends virtually</li>
            <li>Find game servers to join</li>
            <li>Share your gameplay video</li>
            <li>Get tips on critical missions</li>
            <li>Get crazy game modifications</li>
            <li>Join your favorite game groups</li>
            <li>Realtime collaboration with fellow gamers</li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Community;
