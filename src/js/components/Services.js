import React from "react";
import Service from "./Service";

export default class Services extends React.Component {
  render() {

    return (
        <section id="services">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading">How can I help you?</h2>
                    <h3 class="section-subheading text-muted">I am an enthusiastic and resourceful technical professional with over 12 years of experience in web development and digital marketing. An Accomplished software engineer with team leadership and project management skills.</h3>
                </div>
            </div>
            <div class="row text-center">
                <Service icon={"fa fa-users fa-stack-1x fa-inverse"} title={"Certified Scrum Master"} summary={"Lead a highly effective eight member team of developers and quality assurance specialists. In this role, I worked closely with our business partners to understand their strategies and requirements so I could effectively align and steer my team towards success."} />
                <Service icon={"fa fa-cogs fa-stack-1x fa-inverse"} title={"Software Engineer"} summary={"Highly accomplished in creating Rich Internet Applications and CMS driven websites with a focus on industry standards, best-practices and trending technologies."} />
                <Service icon={"fa fa-desktop fa-stack-1x fa-inverse"} title={"User Experience Designer"} summary={"Using creativity and innovation for creating highly effective user interfaces. Tailoring designs based on customer feedback and analytics to create visually engaging and functional websites."} />
            </div>
        </div>
    </section>
    );
  }
}
