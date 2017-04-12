import React from "react";
import Modal from "./Modal";

export default class PortfolioItem extends React.Component {
  render() {

    return (
        <div class="col-md-4 col-sm-6 portfolio-item">
            <Modal />
            <div class="portfolio-caption">
                <h4>Dreams</h4>
                <p class="text-muted">Website Design</p>
            </div>
        </div>
    );
  }
}
