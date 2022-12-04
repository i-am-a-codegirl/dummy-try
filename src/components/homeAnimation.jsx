import home from "../images/homeAnimation/Home.png"
import Specials from "../images/homeAnimation/Specials.png"
import home3 from "../images/homeAnimation/3.png"


const HomeAnimation = () => {
  return (
    <div id="slider">
      <figure>
        <img src={home} />
        <img src={Specials} />
        <img src={home} />
        <img src={home3} />
        <img src={home} />
      </figure>
    </div>
  );
};

export default HomeAnimation;
