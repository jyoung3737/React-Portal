import React from "react";
import AboutItemImage from "./AboutItemImage";
import AboutItemInverted from "./AboutItemInverted";

export default class About extends React.Component {
  render() {

    return (
        <section id="about">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading">About</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
            </div>
            <div class="row">
                <ul class="timeline">
                    <AboutItemImage />
                    <AboutItemInverted />
                    <AboutItemImage />
                    <AboutItemInverted />
                    <li class="timeline-inverted">
                        <div class="timeline-image">
                            <h4>Be Part
                                <br />Of Our
                                <br />Story!</h4>
                        </div>
                    </li>
                </ul>                
            </div>
        </div>
    </section>
    );
  }
}
