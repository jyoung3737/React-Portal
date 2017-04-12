import React from "react";

export default class Modal extends React.Component {
  render() {

    return (
        <a href="#portfolioModal6" class="portfolio-link" data-toggle="modal">
            <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                </div>
            </div>
            <img src="img/portfolio/dreams.png" class="img-responsive" alt="" />
        </a>
    );
  }
}