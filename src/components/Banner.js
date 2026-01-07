




"use client";
import React from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import bannerImg from './img/banner.jpg';
// import peugeot from 'components/img/PEUGEOT.png'
// import renault from 'components/img/RENAULT.png'
//  import skoda from  'components/img/Skoda.png'
//   import chevrolet from  'components/img/Chevrolet.png'

const Banner = () => {
  return (
    <section
    className="banner"
      style={{
        // backgroundImage: ` url(${bannerImg.src})`,
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        // backgroundRepeat: "no-repeat",
        // padding: "50px 0",
        // color: "#fff",
        // // minHeight: "600px",
        // display: "flex",
        // alignItems: "center",
        // borderRadius: "0 0 25px 25px",
        // marginBottom: "30px",
        // position: "relative",
        // height:"30vh"
      }}
    >
      
      {/* المحتوى */}
      {/* <Container style={{ position: "relative", zIndex: 2 }}>
        <Row className="justify-content-start align-items-center">
          <Col lg={8} md={9} sm={12}>
            <div style={{ textAlign: "right" }}> */}
         
             
              <img 
          
              src={bannerImg.src}
               >
              
              </img>
            
       
            
             
                          
            {/* </div>
          </Col>
        </Row>
        
      </Container>
       */}
   
    </section>
  );
};

export default Banner;

















