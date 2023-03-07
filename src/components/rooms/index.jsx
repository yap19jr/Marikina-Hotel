import { render } from "@testing-library/react";
import React from "react";
import "./index.css";
import bgrooms from "../img/background/bgrooms.jpg"

class Rooms extends React.Component {
  state = {
    product: [
      {
        id: "1",
        title: "Deluxe Room",
        src: [
          "https://assets.roomstogo.com/LRsets_FL_tile_KS_515x349.jpg?cache-id=L_Rsets_FL_tile_KS_515x349_612da6bcf7",
          "https://www.thespruce.com/thmb/iMt63n8NGCojUETr6-T8oj-5-ns=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg",
          "https://assets.roomstogo.com/LRsets_FL_tile_KS_515x349.jpg?cache-id=L_Rsets_FL_tile_KS_515x349_612da6bcf7",
          "https://www.thespruce.com/thmb/iMt63n8NGCojUETr6-T8oj-5-ns=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg",
        ],

        description: "Deluxe roomssssss",
        content: "welcome to our",
        price: 1850,
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
      },
    ],
    index: 0,
  };
  handleTab = (index) => {
    this.setState({ index: index });
  };

  render() {
    const { product, index } = this.state;
    return (
      <>
            <div className="relative">
      <div className="bg-green h-28 w-full">

</div>
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
                  Each room is defined by a color of a season and creates a most
                  enjoyable and refreshing surrounding. All the rooms at Hotel
                  Siru offer TV, Cable Channels, Telephone, Wardrobe/Closet,
                  Safety deposit Box, Private bathroom, Bath or Shower,
                  Hairdryer, Refrigerator, Wake-up service and Free Wi-Fi.
                  Check-in from 1:00PM and check-out until 12:00PM.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="app">
        {product.map((item) => (
          <div className="details" key={item._id}>
            <div className="big-img">
              <img src={item.src[index]} alt="" />
            </div>
            <div className="box">
              <div className="row">
                <h2>{item.title}</h2>
                <span>PHP{item.price}</span>
              </div>
              <div className="colors">
                {item.colors.map((color, index) => (
                  <button style={{ background: color }} key={index}></button>
                ))}
              </div>
              <p>{item.description}</p>
              <p>{item.content}</p>
              <div className="thumb">
                {item.src.map((img, index) => (
                  <img
                    src={img}
                    alt=""
                    key={index}
                    onClick={() => this.handleTab(index)}
                  />
                ))}
              </div>
              <button className="book">Book Now</button>
            </div>
          </div>
        ))}
      </div>
      </>
    );
  }
}
export default Rooms;
