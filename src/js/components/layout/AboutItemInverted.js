import React from "react";

export default class AboutItemInverted extends React.Component {
  render() {

    return (
        <li class="timeline-inverted">
            <div class="timeline-image">
                <img class="img-circle img-responsive" src="img/about/2.jpg" alt="" />
            </div>
            <div class="timeline-panel">
                <div class="timeline-heading">
                    <h4>March 2011</h4>
                    <h4 class="subheading">An Agency is Born</h4>
                </div>
                <div class="timeline-body">
                    <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
            </div>
        </li>
    );
  }
}
