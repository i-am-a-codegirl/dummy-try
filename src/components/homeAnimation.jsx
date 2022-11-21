import Images from "../data/master-image";

const HomeAnimation = () => {
  return (
    <div id="slider">
      <figure>
        <img src={Images.home} />
        <img src={Images.Specials} />
        <img src={Images.home} />
        <img src={Images.home3} />
        <img src={Images.home} />
      </figure>
    </div>
  );
};

export default HomeAnimation;
