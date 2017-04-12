import React from "react";

export default class Header extends React.Component {
  render() {

    return (
        <header>
        <div class="container">
            <div class="intro-text">
                <div class="intro-lead-in">Welcome to my online resume!</div>
                <div class="intro-heading">It's Nice To Meet You</div>
                <a href="#services" class="page-scroll btn btn-xl">Tell Me More</a>
            </div>
        </div>
    </header>
    );
  }
}
