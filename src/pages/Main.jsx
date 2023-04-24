import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import mainr from "../assets/helperImg/mainr.png";
import Counter from "../components/Counter";
import Banner1 from "../components/Banner1";
import SwiperComponent from "../components/Swiper";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container className="main ">
      <Row xs={1} md={1} lg={2} className="g-5 w-100">
        <Col className="mainTexts">
          <div className="textContent slide-right">
            Hey!
            <p>
              Welcome to <br />
              <span className="text-warning">Sakura</span> Home !
            </p>
            <p>
              We are at your service with products <br /> that will give you
              happy and peaceful memories.
            </p>
            <br />
            <div className="buttonArea">
              <Link to="/about" className="btn btn-outline-dark  px-5 curved1">
                About
              </Link>
              <Link to="/shop" className="btn btn-dark px-5 curved1">
                Shop Now
              </Link>
            </div>
            <div className="socials d-flex my-5 position-relative gap-3">
              <a href="#" className="text-dark">
                <FaFacebookF size={22.4} />
              </a>
              <a href="#" className="text-dark">
                <FaTwitter size={22.4} />
              </a>
              <a href="#" className="text-dark">
                <FaYoutube size={22.4} />
              </a>
            </div>
          </div>
        </Col>
        <Col className="mainImg">
          <div className="imgBox ">
            <img src={mainr} />
          </div>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <Counter />
      <br />

      <Banner1 />
      <SwiperComponent />
    </Container>
  );
};

export default Main;
