import React from "react";

export default class TeamMember extends React.Component {
  render() {

    return (
        <div class="col-sm-6">
            <div class="team-member">
                <img src="img/team/1.jpg" class="img-responsive img-circle" alt="" />
                <h4>{this.props.name}</h4>
                <p class="text-muted">{this.props.title}</p>
        {/*<ul class="list-inline social-buttons">
                    <li><a href="#"><i class="fa fa-twitter"></i></a>
                    </li>
                    <li><a href="#"><i class="fa fa-facebook"></i></a>
                    </li>
                    <li><a href="#"><i class="fa fa-linkedin"></i></a>
                    </li>
                </ul>*/}
            </div>
        </div>
    );
  }
}
