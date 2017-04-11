import React from "react";

export default class Services extends React.Component {
  render() {

    return (
        <div class="col-md-4">
            <span class="fa-stack fa-4x">
                <i class="fa fa-circle fa-stack-2x text-primary"></i>
                <i class="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="service-heading">{this.props.title}</h4>
            <p class="text-muted">{this.props.summary}</p>
        </div>
    );
  }
}
