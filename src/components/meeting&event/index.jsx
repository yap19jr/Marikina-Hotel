import React from "react";
import "./index.css";
import bgrooms from "../img/background/meeting-room.jpg";

import testimage from "../img/meetingrooms/wedding-venue.jpg";

function MeetingAndEvents() {
  return (
    <>
      <div className="relative">
        <img
          src={bgrooms}
          className="absolute inset-0 object-cover w-full h-full shadow-md"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-50">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-4xl font-extrabold tracking-tight text-white sm:text-4xl sm:leading-none">
                  MEETING & EVENTS <br />
                </h2>
                <p className="max-w-xl mb-4 text-base text-white md:text-lg">
                  Our meeting rooms & Events can accommodate up to 140 people.
                  Whether it is for a conference, a meeting or a private event,
                  Marikina Hotel wishes to offer you the best service you can
                  ask for. The success of your event is our pride. With hundreds
                  of square meters of flexible meeting space, and a selection of
                  function rooms designed for comfort and benefiting from
                  natural sunlight, your event will be a success. Technological
                  efficiency is the hallmark of our Meeting Rooms, boasting
                  leading-edge equipment such as the latest audiovisual and
                  technological resources, sophisticated projection and sound
                  systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="w-full bg-green shadow-md">
        <div className=" h-10  mr-10 ml-10 ">
          <div class="grid grid-cols-3 gap-4 ">
            <div>
              <div class="wrapper text-gray-900">
                <div>
                  <img
                    src={testimage}
                    alt="Room 1"
                    class=" object-cover object-center rounded-lg shadow-md w-80"
                  />
                  <div class="relative px-4 -mt-16 ">
                    <div class="bg-green p-6 rounded-lg shadow-lg">
                      <div class="flex items-baseline">
                        <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                          New
                        </span>
                        <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                          &bull; up to 140pax
                        </div>
                      </div>

                      <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                        Indoor Wedding
                      </h4>

                      <div class="mt-1">
                        PHP 150,000.00
                        <span class="text-gray-600 text-sm"> </span>
                      </div>
                      <div className=" mt-1 ">
                        <span>
                          <button className="bg-teal text-white rounded-lg btn-view ml-1 mr-1">
                            {" "}
                            View Details
                          </button>
                          <button className="bg-teal text-white rounded-lg btn-view ml-1 mr-1">
                            {" "}
                            Book Now
                          </button>
                        </span>
                      </div>
                      <div class="mt-4">
                        <span class="text-teal-600 text-md font-semibold">
                          4/5 ratings{" "}
                        </span>
                        <span class="text-sm text-gray-600">
                          (based on 234 ratings)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer">
        <div class="w-full text-center text-md-start mt-5 bg-green text text-gray-800">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3 text-secondary"></i>
                Marikina Hotel
              </h6>
              <p>
                The Marikina Hotel is a unique property, convenient for your
                business visits, family and city breaks lovers.
              </p>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Services</h6>
              <p>
                <a href="#!" class="text-reset">
                  Rooms
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Meeting Rooms
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Discover
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Gallery
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Services
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Contact
                </a>
              </p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">General</h6>
              <p>
                <a href="#!" class="text-reset">
                  General Terms & Condition of Sale
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Privacy
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Cookie Policy
                </a>
              </p>
              <p>
                <a href="#!" class="text-reset">
                  Digital Policy
                </a>
              </p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i class="fas fa-home me-3 text-secondary"></i> Marikina City
                Metro Manila Philippines
              </p>
              <p>
                <i class="fas fa-envelope me-3 text-secondary"></i>
                marikina-hotel@marikinahotel.com
              </p>
              <p>
                <i class="fas fa-phone me-3 text-secondary"></i> + 639 123 412
                385
              </p>
              <p>
                <i class="fas fa-print me-3 text-secondary"></i> + 632 888 888
                88
              </p>
            </div>
          </div>
        </div>

        <div class="text-center p-4">© 2023 All Rights Reserved</div>
      </section>
    </>
  );
}

export default MeetingAndEvents;
