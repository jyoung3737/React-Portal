import React from "react";
import PortfolioItem from "./PortfolioItem";

export default class Portfolio extends React.Component {
  render() {

    return (
        <section id="portfolio" class="bg-light-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="section-heading">Portfolio</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
            </div>
            <div class="row">
                <PortfolioItem />
                <PortfolioItem />
                <PortfolioItem />
            </div>
        </div>
    </section>
    );
  }
}
