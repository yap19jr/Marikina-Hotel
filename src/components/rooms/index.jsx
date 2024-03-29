import React, { useState, useEffect } from "react";
import "./index.css";
import bgrooms from "../img/background/bgrooms.jpg";
import BookNow from "../Buttons/btnBookNow";

import image1 from "../img/rooms/deluxe room/deluxe-room-1.jpg"
import image2 from "../img/rooms/deluxe room/deluxe-room-2.jpg"
import image3 from "../img/rooms/deluxe room/deluxe-room-3.jpg"
import image4 from "../img/rooms/deluxe room/deluxe-room-4.jpg"

class Rooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [
        {
          id: "1",
          title: "Deluxe Room",
          src: [
            ,
            "https://www.thespruce.com/thmb/iMt63n8NGCojUETr6-T8oj-5-ns=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg",
            "https://assets.roomstogo.com/LRsets_FL_tile_KS_515x349.jpg?cache-id=L_Rsets_FL_tile_KS_515x349_612da6bcf7",
            "https://www.thespruce.com/thmb/iMt63n8NGCojUETr6-T8oj-5-ns=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg",
          ],

          description:
            "Families, couples and solo travelers find everything they need – and so much more – in a Deluxe Room. Natural daylight floods this welcoming space. In the evening, let the glittering skyline mesmerize you as you reach higher levels of relaxation. Work at the spacious desk, unwind in the cozy chaise longue or simply take in your surroundings from the comfortable vantage point of your Live N Dream bed. Whether you’re in Quezon City for business or leisure, Novotel is your home.",
          content: "Free Wifi",
          price: 1850,
          count: 1,
        },
      ],
      selectedTab: null,
    };
  }

  componentDidMount() {
    this.getAllRooms();
  }

  getAllRooms() {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3002/api/room", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        const derivedData = data.rooms.map((item) => ({
          ...item,
          src: [
            image1,
            "https://www.thespruce.com/thmb/iMt63n8NGCojUETr6-T8oj-5-ns=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg",
            "https://assets.roomstogo.com/LRsets_FL_tile_KS_515x349.jpg?cache-id=L_Rsets_FL_tile_KS_515x349_612da6bcf7",
            "https://www.thespruce.com/thmb/iMt63n8NGCojUETr6-T8oj-5-ns=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg",
          ],
        }));
        this.setState({ rooms: derivedData });
      })
      .catch((error) => console.log("error", error));
  }

  handleChangeTab = (selectedTab, index) =>
    this.setState({ selectedTab: { selectedTab, index } });
  render() {
    const { rooms, selectedTab } = this.state;
    console.log("THISSSS :", selectedTab?.selectedTab);
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
                    ROOMS <br />
                  </h2>
                  <p className="max-w-xl mb-4 text-base text-white md:text-lg">
                    Each room is defined by a color of a season and creates a
                    most enjoyable and refreshing surrounding. All the rooms at
                    Hotel Siru offer TV, Cable Channels, Telephone,
                    Wardrobe/Closet, Safety deposit Box, Private bathroom, Bath
                    or Shower, Hairdryer, Refrigerator, Wake-up service and Free
                    Wi-Fi. Check-in from 1:00PM and check-out until 12:00PM.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="app">
          {rooms.map((item) => (
            <div className="details" key={item.id}>
              <div className="big-img">
                {selectedTab &&
                selectedTab?.selectedTab.room_type_id === item.room_type_id ? (
                  <img
                    src={selectedTab?.selectedTab.src[selectedTab.index]}
                    alt={item.name}
                  />
                ) : (
                  <img src={item.src[0]} alt={item.name} />
                )}
              </div>
              <div className="box">
                <div className="row">
                  <h2>{item.name}</h2>
                  <hr />
                  <span>PHP {item.price_per_night}</span>
                </div>
                <p>{item.description}</p>
                <p>Size: {item.size}sqm</p>
                <p>Capacity: {item.capacity}Person</p>
                <div className="thumb">
                  {/* <h1>TEST</h1> */}
                  {item.src.map((img, ind) => (
                    <img
                      src={img}
                      alt=""
                      key={ind}
                      onClick={() => this.handleChangeTab(item, ind)}
                    />
                  ))}
                </div>
                <hr />
                <button class="rounded-lg px-5 py-2.5 bg-zinc-800 text-white hover:bg-stone-600">
                <BookNow />
                </button>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default Rooms;
