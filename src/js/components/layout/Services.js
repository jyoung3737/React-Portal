import React from "react";
import Service from "./Service";

export default class Services extends React.Component {
  render() {

    return (
        <section id="services">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading">Services</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
            </div>
            <div class="row text-center">
                <Service title={"Team Leader / Scrum Master"} summary={"Lead a highly effective eight member team of developers and quality assurance specialists. In this role, I worked closely with our business partners to understand their strategies and requirements so I could effectively align and steer my team towards success."} />
                <Service title={"Software Engineer"} summary={"Highly accomplished in creating Rich Internet Applications and CMS driven websites with a focus on industry standards, best-practices and trending technologies."} />
                <Service title={"User Experience Designer"} summary={"Using creativity and innovation for creating highly effective user interfaces. Tailoring designs based on customer feedback and analytics to create visually engaging and functional websites."} />
            </div>
        </div>
    </section>
    );
  }
}
