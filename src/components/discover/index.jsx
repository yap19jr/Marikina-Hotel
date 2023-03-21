import React from "react";
import bgDiscovery from "../img/background/bgmarikina.jpg";

import attractions1 from "../img/attractions/shoeMuseum.jpg";
import attractions2 from "../img/attractions/bookMuseum.jpg";
import attractions3 from "../img/attractions/marikinaRiverPark.jpg";
import attractions4 from "../img/attractions/ourLadyOfTheAbandonedChurch.jpg";

import ban1 from "../img/localevents/band1.jpg";

const attracttion = [
  {
    id: 1,
    name: 'Shoe Museum',
    href: '#',
    imageSrc: 'https://hotelsiru.com/wp-content/uploads/2019/02/services-breakfast2-1.jpg',
    imageAlt: "Shoe Museum",
    description: 'As the shoe capital, Marikina, of course, has a Shoe Museum.Officially opened in 2001, the Shoe Museum is built to nurture the historical and cultural value of the local shoe industry.',
  },
  // More products...
]



function Discover() {
  return (
    <>
      <div className="relative">
        <img
          src={bgDiscovery}
          className="absolute inset-0 object-cover w-full h-full shadow-md"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-50">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <small className=" mb-6 font-sans tracking-tight text-white sm:leading-none">
                  {" "}
                  THE BEST ATTRACTIONS AND PLACES TO VISIT
                </small>
                <h2 className="max-w-lg mb-6 font-sans text-4xl font-extrabold tracking-tight text-white sm:text-4xl sm:leading-none">
                  DISCOVER MARIKINA CITY <br />
                </h2>
                <p className="max-w-xl mb-4 text-base text-white md:text-lg">
                  Always in style, What better location for The Marikina Hotel?
                  Located in the city’s fashion district, this central spot is
                  minutes away from top attractions, making it the perfect base
                  for taking the capital by storm. Simply step out of the hotel
                  and discover the city directly from your doorstep
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
      <div>
        <div>
          <hr />
          <div className="pl-5">
            <h2>ATTRACTIONS</h2>
          </div>
          <div className="flex mx-auto max-w-2xl py-4 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-14 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  xl:gap-x-20 ">
          <div class="card w-80">
              <img src={attractions1} class="card-img-top" alt="..." />
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">Shoe Museum</h5>
                <hr />
                <p class="card-text">
                  As the shoe capital, Marikina, of course, has a Shoe Museum.
                  Officially opened in 2001, the Shoe Museum is built to nurture
                  the historical and cultural value of the local shoe industry.
                </p>
                <button type="button" class="align-self-end  bg-zinc-800 hover:bg-stone-600 mt-auto pt-1 rounded pb-1 w-full text-white">View More.</button>
              </div>
            </div>

            <div class="card w-80 mr-5">
              <img src={attractions2} class="card-img-top" alt="..." />
              <div class="card-body d-flex flex-column ">
                <h5 class="card-title">Book Museum</h5>
                <hr />
                <p class="card-text">
                Tucked away in a quiet neighborhood in Dao Street, the Book Museum cum Ethnology Center exhibits the personal book and artifact collection of Atty. Dominador Buhain, chairman and president of Rex Group of companies. The museum includes first edition books,
                </p>
                <button type="button" class="align-self-end bg-zinc-800 hover:bg-stone-600 mt-auto pt-1 pb-1 rounded w-full text-white">View More.</button>
                
              </div>
            </div>
            
            <div class="card w-80 mr-5">
              <img src={attractions3} class="card-img-top" alt="..." />
              <div class="card-body d-flex flex-column ">
                <h5 class="card-title">Marikina River Park</h5>
                <hr />
                <p class="card-text">
                Found alongside Marikina River, the Marikina River Park is a 220-hectare system of parks, trails, open spaces, recreation facilities and commercial complex. The Marikina River Park is the focal point of the city’s communities and cultural activities.
                </p>
                <button type="button" class="align-self-end bg-zinc-800 hover:bg-stone-600 mt-auto pt-1 pb-1 rounded w-full text-white">View More.</button>
                
              </div>
            </div>
            <div class="card w-80 mr-5">
              <img src={attractions4} class="card-img-top" alt="..." />
              <div class="card-body d-flex flex-column ">
                <h5 class="card-title">Our Lady of the Abandoned Church</h5>
                <hr />
                <p class="card-text">
                The Our Lady of Abandoned Parish in Marikina opened in 1572 and consecrated in 1690. The church was originally constructed from bamboo and leaves, and then on 1687, it is constructed in Baroque style with heavily fortified façade, high ceiling, and round pediment bell-tower.
                </p>
                <button type="button" class="align-self-end bg-zinc-800 hover:bg-stone-600 mt-auto pt-1 pb-1 rounded w-full text-white">View More.</button>
                
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="pl-5">
          <hr />
          <h2>LOCAL EVENTS</h2>
        </div>

        <div className="ml-5 mr-5 flex">
          <div class="card w-80 mr-5">
              <img src={ban1} class="card-img-top" alt="..." />
              <div class="card-body d-flex flex-column">
                <h5 class="card-title">Para Sayo</h5>
                <hr />
                <p class="card-text">
                Parokya Ni Edgar
                </p>
                <p class="card-text">
                Rouge
                </p>
                <p class="card-text">
                December Avenue
                </p>
                <button type="button" class="align-self-end  bg-green-400 hover:bg-teal-600 mt-auto pt-1 rounded pb-1 w-full">View More.</button>
              </div>
            </div>
            </div>
      </div>
      </section>
    </>
  );
}
export default Discover;
