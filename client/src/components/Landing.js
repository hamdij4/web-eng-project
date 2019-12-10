
import React from "react";
import { Badge } from 'reactstrap';
import {
  FormGroup,
  Label,
  Input,
  FormText,
  Button
} from "reactstrap";
import IndexHeader from './Header';
import LandingMenu from './LandingFoodMenu';
import LandingReviews from './LandingUserReviews';
import LandingGallery from './LandingGallery';

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