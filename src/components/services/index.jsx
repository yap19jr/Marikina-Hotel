import React from 'react'
import bgServices from '../img/background/services.jpg'

import Breakfast from '../img/background/breakfast.jpg'
import Roomservice from '../img/background/roomservice.jpg'
import Gym from '../img/background/gym.jpg'

const  Services = () => {
  return (
    <>
    <div className="relative">
        <div className="bg-green h-24 w-full "></div>
        <img
          src={bgServices}
          className="absolute inset-0 object-cover w-full h-full shadow-md"
          alt=""
        />
        <div className="relative  bg-gray-900 bg-opacity-50">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <small className=" mb-6 font-sans tracking-tight text-white sm:leading-none">
                  {" "}
                  INDULGE YOUR FOODIE CRAVINGS
                </small>
                <h2 className="max-w-lg mb-6 font-sans text-4xl font-extrabold tracking-tight text-white sm:text-4xl sm:leading-none">
                BREAK FAST & DINING WITH A TWIST <br />
                </h2>
                <p className="max-w-xl mb-4 text-base text-white md:text-lg">
                Catch a glimpse of The Marikina Hotel before you arrive by exploring the gallery, where luxury design does the talking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
      <div class=" p-2">
    <div class=" w-full lg:max-w-full lg:flex md:flex">
      <div class="h-auto lg:h-auto  lg:w-48 xl:h-94 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
        <img src={Breakfast} alt="breakfast" />
      </div>
      <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r xl:w-full p-4 flex flex-col justify-between leading-normal">
        <div class="mb-auto">
          <div class="text-gray-900 font-bold text-xl mb-2">Breakfast</div>
          <p class="text-gray-700 text-base">The only way to start your day. Delectable breakfast served with steaming coffee is what it’s about at The Marikina Hotel. Served in The Iris, take your pick from the sumptuous buffet. And for those of you who crave a little longer in bed, dial up room service and have breakfast brought directly to your room.</p>
        </div>
        <div class="flex items-center">
          <div class="text-sm">
            <p class="text-gray-900 leading-none">From 7am to 10am during the week, until 10:30am on Saturday and Sunday.</p>
            <p class="text-gray-600">Thank You.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="p-2">
    <div class=" w-full lg:max-w-full lg:flex md:flex">
      <div class="h-auto lg:h-auto  lg:w-48 xl:h-94 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
        <img src={Roomservice} alt="roomservice" />
      </div>
      <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r xl:w-full p-4 flex flex-col justify-between leading-normal">
        <div class="mb-auto">
          <div class="text-gray-900 font-bold text-xl mb-2">Room Service</div>
          <p class="text-gray-700 text-base">Food cravings call on you at all hours of the day, which is why The Hotel offers you exceptional room service, 24/7. Whether it’s breakfast in bed or a midnight snack on your mind, just make that call and let The Hotel bring you all things delicious.</p>
        </div>
        <div class="flex items-center">
          <div class="text-sm">
            <p class="text-gray-900 leading-none">24/7</p>
            <p class="text-gray-600">Thank You.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="p-2">
    <div class=" w-full lg:max-w-full lg:flex md:flex">
      <div class="h-auto lg:h-auto  lg:w-48 xl:h-94 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
        <img src={Gym} alt="Gym" />
      </div>
      <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r xl:w-full p-4 flex flex-col justify-between leading-normal">
        <div class="mb-auto">
          <div class="text-gray-900 font-bold text-xl mb-2">Gym</div>
          <p class="text-gray-700 text-base">Our spacious state-of-the-art fitness center is exclusive for our guests, offering free weights, circuit training, cardiovascular equipment and power plate machines.</p>
        </div>
        <div class="flex items-center">
          <div class="text-sm">
            <p class="text-gray-900 leading-none">From 6am to 11am  and 1pm to 9pm everyday</p>
            <p class="text-gray-600">Thank You.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
      </section>
    </>
  )
}

export default Services
