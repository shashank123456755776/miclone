import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu ";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Postnavbar from "./components/Postnavbar";
import ProductReviews from "./components/ProductReviews";
import SliderImg from "./components/SliderImg";
import StarProducts from "./components/StarProducts";
import Videos from "./components/Videos";
import data from "./Data/data.json";

function App() {
  return (
    <>
      <Navbar />
      <Postnavbar
        miPhones={data.miPhones}
        redmiPhones={data.redmiPhones}
        tv={data.tv}
        laptop={data.laptop}
        fitnessAndLifeStyle={data.fitnessAndLifeStyle}
        home={data.home}
        audio={data.audio}
        accessories={data.accessories}
      />
      <Banner start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading heading="STAR PRODUCTS" />
      <StarProducts starProduct={data.starProduct} />
      <Heading heading="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      <Heading heading="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews} />
      <Heading heading="VIDEOS" />
      <Videos videos={data.videos} />
      <Heading heading="IN THE PRESS" />
      <SliderImg end={data.banner.end} />
      <Footer footer={data.footer}/>
    </>
  );
}

export default App;
