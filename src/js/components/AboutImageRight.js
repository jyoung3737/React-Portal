import React from "react";

export default class AboutImageRight extends React.Component {
  render() {

    return (
        <li class="timeline-inverted">
            <div class="timeline-image">
                <img class="img-circle img-responsive" src={this.props.image} alt="" />
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
