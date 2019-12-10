
import React from "react";
import { Badge } from 'reactstrap';
import {
  FormGroup,
  Label,
  Input,
  FormText,
  Button
} from "reactstrap";
import IndexHeader from '../components/header/Header';
import LandingMenu from '../components/landing-food-menu/LandingFoodMenu';
import LandingReviews from '../components/landing-user-reviews/LandingUserReviews';
import LandingGallery from '../components/landing-gallery/LandingGallery';

function LandingPage() {


    return (
        <>
        <header className="App-header">
          <IndexHeader></IndexHeader>
          <LandingMenu></LandingMenu>
          <LandingGallery></LandingGallery>
          <LandingReviews></LandingReviews>
          </header>
        </>
    )
}


export default LandingPage