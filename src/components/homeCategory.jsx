import Images from "../data/master-image";
const HomeCategory = () => {
  return (
    <>
      <h1
        className="bestseller-heading"
        style={{ width: "50%", margin: "auto", paddingTop: "2.4rem" }}
      >
        Explore Delicious Categories
      </h1>
      <div
        className="content-here"
        style={{ marginTop: "2.8rem", padding: "1.2rem" }}
      >
        <div className="pick-1 bgStyle">
          <img
            src={Images.Snack}
            alt="Snacking while travelling"
            className="pick-1-img"
          />
          <p className="pick-1-con bgStyle">
            TRAVEL SNACKS <br /> While you are going for a trip or a world tour,
            or maybe a family marriage in another city, we have snacks to give
            you company on every travel.
          </p>
        </div>

        <div className="pick-2 bgStyle">
          <img src={Images.healthyCereal} alt="" className="pick-2-img" />
          <p className="pick-2-con">KITTY PARTY READY</p>
        </div>
      </div>

      <div className="content-here-2">
        <div className="pick-4 bgStyle">
          <img src={Images.lavendarPoordige} alt="" className="pick-4-img" />
          <p className="pick-4-con">WHILE AT WORK</p>
        </div>

        <div className="pick-3 bgStyle">
          <img
            src={Images.oatmeal}
            alt="Snacking while travelling"
            className="pick-3-img"
          />
          <p className="pick-3-con">
            PLAYING GAMES
            <br /> While you are going for a trip or a world tour, or maybe a
            family marriage in another city, we have snacks to give you company
            on every travel.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeCategory;
