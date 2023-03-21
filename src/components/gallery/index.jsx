import React from "react";
import bgGallery from "../img/background/gallery.jpg";

import testimage1 from "../img/meetingrooms/wedding-venue.jpg";
import testimage2 from "../img/rooms/room01.jpg";
import testimage3 from "../img/meetingrooms/garden-venue.jpg";
import testimage4 from "../img/rooms/room02.jpg";
import testimage5 from "../img/meetingrooms/businesscenter-room.jpg";
import testimage6 from "../img/rooms/room05.jpg";

const Gallery = () => {
  return (
    <>
      <div className="relative">
        <img
          src={bgGallery}
          className="absolute inset-0 object-cover w-full h-full shadow-md"
          alt=""
        />
        <div className="relative  bg-gray-900 bg-opacity-50">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <small className=" mb-6 font-sans tracking-tight text-white sm:leading-none">
                  {" "}
                  SEE NEW LUXURY FOR YOURSELF
                </small>
                <h2 className="max-w-lg mb-6 font-sans text-4xl font-extrabold tracking-tight text-white sm:text-4xl sm:leading-none">
                  TAKE A GALLERY TOUR OF THE HOTEL <br />
                </h2>
                <p className="max-w-xl mb-4 text-base text-white md:text-lg">
                  Catch a glimpse of The Marikina Hotel before you arrive by
                  exploring the gallery, where luxury design does the talking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="overflow-hidden text-neutral-700">
        <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
          <div class="-m-1 flex flex-wrap md:-m-2">
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={testimage1}
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={testimage2}
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={testimage3}
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={testimage4}
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={testimage5}
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={testimage6}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
