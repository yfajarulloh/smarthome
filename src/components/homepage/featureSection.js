import dotDot from "../../assets/images/dot.png";
import ilustration from "../../assets/images/illustation.png";
import React, { Component } from "react";
import styled from "styled-components";

const ContainerImages = styled.img`
  float: right;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export default class FeatureSection extends Component {
  constructor(props) {
    super(props);

    console.log(this.props)
}
  render() {
    return (
      <div className="containerFeatureSection">
        <img className="containerImages" src={dotDot} alt="dot dot" />
        <p>
          Every day your home faces countless potential threats. Every day you
          face countless potential headaches. A small problem can become a major
          disaster. Early warning signs exist but often you can't hear or see
          them.
        </p>
        <div className="contentFeature">
          <p>FEATURES</p>
          <img src={ilustration} alt="ilustration" />
          <h2>Meet Siphome</h2>
          <h5>
            The most comprehensive smart solution to home maintenance. All it
            takes is a simple and affordable sensor installation by one of our
            Siphome certified technicians.
          </h5>
        </div>
        {/* <div className="item-feature-group">
          {FeatureData.map &&
            FeatureData.map((element) => (
              <div className="card-feature">
                <img src={this.props.FeatureData.image} alt="image" />
                <div className="content-body-title">
                  {this.props.FeatureData.title}
                </div>
                <div className="content-body-text">
                  {this.props.FeatureData.text}
                </div>
              </div>
            ))}
        </div> */}
      </div>
    );
  }
}
