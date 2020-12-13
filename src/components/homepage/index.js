import React, {Component} from "react";
import styled from "styled-components";
import { TopSection } from "./topSection";
import { UpdateSection } from "./updateSection";
import icon from "../../assets/images/icon.png";
import featureData from "./featureData";
import FeatureSection from "./featureSection";
import Service from "./Services";
import featureImg1 from "../../assets/images/icon.png";
import featureImg2 from "../../assets/images/iconDiagnosis.png";
import featureImg3 from "../../assets/images/icon (1).png";
import featureImg4 from "../../assets/images/icon (2).png";
import { Testimonial } from "./testimonial";
import Contact from "./contact";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export default class Homepage extends Component {
  constructor(props) {
    super(props);

    console.log(this.props)
}
  render() {
    const objItem = [
      {
        icon,
        title: "Monitor",
        text:
          "Make your standard systems smart with Siphome. A simple installation or integration and we can start to monitor 24/7 to make sure your home is Siphome.",
      },
      {
        icon,
        title: "Maintenance",
        text:
          "Siphome helps you maintain your home. The HomeHealth Record ensures you have the right information at the right time, and if you aren’t able to do the maintenance yourself, we can connect you to a service pro to help.",
      },
      {
        icon,
        title: "Repair",
        text:
          "Siphome empowers you with smart notifications so you can make repairs before they become problems. Notifications provide diagnostics and recommended next actions so you know what to do and have the same information as your service pro.",
      },
      {
        icon,
        title: "Replace",
        text:
          "Improve your home over time. Build your next-gen smart home with Siphome’s advice along the way.",
      },
    ];

    const FeatureData = [
      {
        image : featureImg1,
        title: "Automatic Threat Detection",
        text:
          "Siphome reacts the moment your equipment fails, alerting you to the problem.",
      },
      {
        image : featureImg2,
        title: "Smart Diagnostics",
        text:
          "    See exactly what is malfunctioning and compare your maintenance options on the same screen.",
      },
      {
        image : featureImg3,
        title: "Disaster Prevention",
        text:
          "          Predictive analytics lets you see what needs maintenance before it fails.",
      },
      {
        image : featureImg4,
        title: "24/7 Service",
        text:
          "          Siphome monitors your critical systems 24/7 so you can enjoy peace of mind.",
      },
    ];
    return (
      <>
        <PageContainer>
          <TopSection />
          <FeatureSection FeatureData = {this.props.FeatureData}/>
          <UpdateSection />
          <Service/>
          <Testimonial/>
          <Contact/>
        </PageContainer>
      </>
    );
  }
}
