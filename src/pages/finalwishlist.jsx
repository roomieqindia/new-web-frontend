import React from "react";
import CardGrid from "../Components/Cardgrid";
import Wish from "./Wishlist";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import DownloadPromo from "../Components/DownloadPromo";
// import Navbar from "../Components/Navbar";
// import Cat1 from "./categorypagebefore";
// import AppStore from "../assets/AppStore.svg";
// import GooglePlay from "../assets/GooglePlay.svg";
// import SecondPhone from "../assets/SecondPhone.svg";

function CategoryPage() {
  return (
    <>
      <NavBar />
      <div className="mb-[60px]">
        <Wish />
        <div className="bg-black mx-auto w-[85%] sm:w-[94%] h-[1px] ml-[6] mt-3"></div>
      </div>
      <CardGrid />
      <div className="w-full text-center">
        <button className="mt-[40px] bg-[#e4c1f9] w-[220px] sm:w-[370px] h-[60px] sm:h-[90px] rounded-[60px] font-normal text-lg sm:text-2xl border-b-4 border-gray-400 mb-[60px]">
          View More Properties...
        </button>
      </div>

      {/* Eighth Division  */}
      <DownloadPromo />

      <Footer />
    </>
  );
}

export default CategoryPage;
