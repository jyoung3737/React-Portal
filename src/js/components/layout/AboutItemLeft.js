import React from "react";

export default class AboutItemLeft extends React.Component {
  render() {

    return (
        <li>
            <div class="timeline-image">
                <img class="img-circle img-responsive" src="img/about/1.jpg" alt="" />
            </div>
            <div class="timeline-panel">
                <div class="timeline-heading">
                    <h4>{this.props.date}</h4>
                    <h4 class="subheading">{this.props.title}</h4>
                </div>
                <div class="timeline-body">
                    <p class="text-muted">{this.props.summary}</p>
                </div>
            </div>
        </li>
    );
  }
}