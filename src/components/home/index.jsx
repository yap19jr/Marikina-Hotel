import React, { useState } from "react";
import "./index.css";
import hero from "../img/background/marikina-hotel.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import video from "../img/rooms/room05.jpg"

import firstSlide from "../img/rooms/room01.jpg";
import secondSlide from "../img/rooms/room02.jpg";
import thirdSlide from "../img/rooms/room03.jpg";
import forthSlide from "../img/rooms/room04.jpg";
import fifthSlide from "../img/rooms/room05.jpg";

import meetingFirstSlide from "../img/meetingrooms/board-room.jpg";
import meetingSecondSlide from "../img/meetingrooms/businesscenter-room.jpg";        
import meetingThirdSlide from "../img/meetingrooms/garden-venue.jpg";
import meetingForthSlide from "../img/meetingrooms/wedding-venue.jpg";
import meetingFifthSlide from "../img/meetingrooms/loungebar-room.jpg";

const Home = () => {
  return (
    <section>
      <div class="hero-section">
        <img src={hero} className="w-full" alt="" />
        <div className="w-full">
          <div class=" ">
            <div class="bg-gradient-to-r from-gray-100 via-[#85ca85] to-gray-100">
              <div class="hero text-gray-800 text">
                <h3>A VIEW FROM THE TOP</h3>
              </div>
            </div>
          </div>
          <div class=" w-full row md">
            <div class="column">
              <div class="hero topview">
                <div class="topview-video">
                  <div>
                    <video src={video}  loop muted  autoplay="autoplay" />
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="hero topview">
                <p>
                  Kick off your urban adventures with a new perspective on
                  Marikina Hotel. Standing tall above the Manila skyline, the
                  Hotel givesMetro Manila view with a difference – come join us
                  up here and experience a stay like no other.
                </p>
                <p>
                  From your sky-high base in the fashion district, you are all
                  set to conquMetro Manila in style. Wake up to the Hotel’s
                  oh-so-chic rooms and suites, and turbo charge with a workout
                  at the Urban Spa & Fitness. Need to boss your own meetings?
                  Events & meeting spaces await.
                </p>

                <p>
                  After your busy day, retreat back to the Hotel with great food
                  and a social drink. Sit back and unwind as you soak up the
                  friendly atmosphere; today you’ve done good, and now you’ve
                  made it back to one of the best hotels to stay in Metro
                  Manila, where you’re about to enjoy the sweetest night’s sleep
                  Metro Manila.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="bg-gradient-to-r from-gray-100 via-[#85ca85] to-gray-100">
          <div class="hero text">
            <h3>ROOMS & SUITES</h3>
          </div>
        </div>
        <Carousel className=" text-center ml-28 mr-28 ">
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 z-10"
              src={firstSlide}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100 "
              src={secondSlide}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={thirdSlide} alt="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={forthSlide} alt="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={fifthSlide} alt="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div class="w-full">
        <div class="bg-gradient-to-r from-gray-100 via-[#85ca85] to-gray-100">
          <div class="hero text text-gray-800">
            <h3>Meeting & Events</h3>
          </div>
        </div>
        <Carousel className="text-center ml-28 mr-28">
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100 z-10"
              src={meetingFirstSlide}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100 "
              src={meetingSecondSlide}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={meetingThirdSlide}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={meetingForthSlide}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={meetingFifthSlide}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};
export default Home;
