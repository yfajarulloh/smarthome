import React from "react";
import styled from "styled-components";
import contactImg from "../../assets/images/illustrationre.png";

const contactContainer = styled.div`
  padding-inline-start: 119px;
  margin-top: 50px;
  width: 1007px;
  height: 674px;
`;

function Contact(props) {
  return (
    <div
      style={{
        paddingInlineStart: "119px",
        marginTop: "50px",
        width: "1007px",
        height: "674px",
        alignItems: "center",
        marginBottom:'17px'
      }}
    >
      <p
        style={{
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: "15px",
          lineHeight: "140%",
          letterSpacing: "0.6em",
          textTransform: "uppercase",
          color: "#1C57C9",
          paddingLeft:'119px'
        }}
      >
        Contact
      </p>
      <p style={{
        width: '424px',
        height: '177px',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '42px',
        lineHeight: '140%',
        letterSpacing: '-0.02em',
        color: '#262B35',
        textAlign:'left',
        paddingLeft:'119px'
        
      }}>Skip logging in, get what you need with a few key details</p>
      <img style={{
                paddingLeft:'119px'
      }} src={contactImg} />
    </div>
  );
}

export default Contact;
