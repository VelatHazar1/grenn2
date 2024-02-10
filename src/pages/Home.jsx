import NavBar from "../components/navbar/NavBar";
import Announcement from "../components/announcement/Announcement";
import Slider from "../components/slider/Slider";
import Categories from "../components/categories/Categories";
import Products from "../components/products/Products";
import Footer from "../components/footer/Footer";

function Home() {
  return (
    <div>
      <Announcement></Announcement>
      <NavBar></NavBar>
      <Slider></Slider>
      <Categories></Categories>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
}

export default Home;
