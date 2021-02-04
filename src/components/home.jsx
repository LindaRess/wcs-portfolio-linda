import ReactTypingEffect from "react-typing-effect";
import profilepic from "./img/linda_ress_photo.jpg";
import Social from "./tools/social";

const Home = () => {
  return (
    <div className="condivhome">
      <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
      <p className="imlinda">I'm Linda</p>
      <ReactTypingEffect
        className="typingeffect"
        text={["Junior Web Developer"]}
        speed={100}
        eraseDelay={700}
      />
      <p className="javascript">JAVASCRIPT - REACT - NODEJS</p>
      <Social />
    </div>
  );
};

export default Home;
