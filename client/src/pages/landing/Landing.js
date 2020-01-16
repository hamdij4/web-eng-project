
import React from "react";
import IndexHeader from '../../components/header/Header';
import LandingReviews from '../../components/landing-user-reviews/LandingUserReviews';
import LandingGallery from '../../components/landing-gallery/LandingGallery';
import LandingMenu from '../../components/landing-food-menu/LandingFoodMenu';
import Footer from '../../components/footer/Footer'
import IndexNavbar from '../../components/navbar/Navbar';

function LandingPage() {


    return (
        <>
        <header className="App-header">
        <IndexNavbar></IndexNavbar>
          <IndexHeader></IndexHeader>
          <LandingMenu></LandingMenu>
          <LandingGallery></LandingGallery>
          <LandingReviews></LandingReviews>
          <Footer></Footer>
          </header>
        </>
    )
}


export default LandingPage