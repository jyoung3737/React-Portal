import React from "react";
import AboutItemLeft from "./AboutItemLeft";
import AboutImageRight from "./AboutImageRight";

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
                    <AboutItemLeft image={"img/about/1.jpg"} date={"2017 - 2015"} title={"Schneider Electric - Scrum Master & Web Developer"} summary={"In Janurary of 2015, I received my Scrum Master Certification from Scrum, Inc. I then accpeted a position on Schneider Electric's SDL Tridion Web Development Team. In this role, I was responsible for a high performing team of eight developers and QA engineers."} />
                    <AboutImageRight image={"img/about/2.jpg"} date={"2015 - 2013"} title={"Schneider Electric - User Experience / User Interface Designer"} summary={"In Janurary of 2013, I accepted a position as User Experience / UI Designer. I was responsible for creating highly effective and creatively engaging web user interfaces. This is icluded speaking with customer and gathering feedback (usability testing), creating photoshop mockups and HTML/CSS interfaces. Continuously refining and iterating designs based on user feedback and analytics."} />
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
