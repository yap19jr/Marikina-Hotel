import React from 'react'

import BackgroundImgs from '../img/background/bg-contact.jpg'

const Contact = () => {
  return (
    <>
    <div className=' h-48'>
    </div>
      <div className="py-4 lg:py-8  relative">
                <div className="xl:mx-auto xl:container  relative ">
                    <div className="flex flex-wrap xl:mx-auto xl:container ">
                        <div className="w-full relative lg:w-1/2 xl:mt-10 mb-10 2xl:pr-24 2xl:pl-0 xl:pl-12 pl-0  ">
                       
                            <img src={BackgroundImgs} className="h-full w-full absolute inset-0 bg-cover bg-center xl:w-full " alt="map" />
                  
                      
                            <div className="w-full flex flex-col items-start  xl:justify-start  relative z-20 xl:px-0 px-4 xl:py-0 py-4 ">
                                <div className="w-full 2xl:pl-48 xl:pt-1">
                                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-white">We’re Here</h1>
                                    <div className="w-full md:w-10/12 mt-3">
                                        <h2 className="text-white text-base md:text-lg leading-8 tracking-wider">We believe digital innovation is at the heart of every business success</h2>
                                        <div className="mt-4 md:mt-8">
                                            <h2 className="text-sm md:text-base text-white font-semibold">Address</h2>
                                            <h2 className="text-white text-base md:text-lg leading-8 tracking-wider mt-2">Pio del Pilar corner Tangerine Street, SSS Village Marikina City</h2>
                                        </div>
                                        <div className="mt-4 md:mt-8">
                                            <h2 className="text-sm md:text-base text-white font-semibold">Contact</h2>
                                            <h2 className="text-white text-base md:text-lg leading-8 tracking-wider mt-2">+63 917-552-4627 (Phone)</h2>
                                            <h2 className="text-white text-base md:text-lg leading-8 tracking-wider mt-2">+632 234-0540 or 423-5382 (LandLine)</h2>
                                        </div>
                                        <div className="mt-4 md:mt-8">
                                            <h2 className="text-sm md:text-base text-white font-semibold">Email</h2>
                                            <h2 className="text-white text-base md:text-lg leading-8 tracking-wider mt-2">alphasquad@example.com</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        </div>
                        <div className="w-full lg:w-1/2   xl:pt-10 lg:pl-24">
                            <div className="flex flex-col items-start xl:justify-start 2xl:justify-end xl:px-0 px-4">
                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-gray-800">Let’s Talk</h1>
                                <div className="w-full 2xl:w-8/12 mt-3">
                                    <h2 className="text-gray-800 text-base md:text-lg leading-8 tracking-wider">For enquiries, please email us using the form below</h2>
                                    <div className="mt-4 md:mt-8">
                                        <p className="text-gray-800 text-base font-medium">Full Name</p>
                                        <input className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-gray-600 focus:border-gray-600 focus:outline-none border-black py-5 pl-4 text-white" type="text" placeholder="Juan Dela Cruz" />
                                    </div>
                                    <div className="mt-4 md:mt-8">
                                        <p className="text-gray-800 text-base font-medium">Email Address</p>
                                        <input className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 hover:border-gray-600 focus:border-gray-600 focus:outline-none border-black py-5 pl-4 text-white" type="email" placeholder="juandelacruz@gmail.com" />
                                    </div>
                                    <div className="mt-4 md:mt-8">
                                        <p className="text-gray-800 text-base font-medium">Message</p>
                                        <textarea className="mt-3 text-base border-2 w-11/12 lg:w-full xl:w-10/12 resize-none hover:border-gray-600 focus:border-gray-600 focus:outline-none border-black xl:h-40 py-5 pl-4 text-gray-800" type="text" placeholder="Write us something..." defaultValue={""} />
                                    </div>
                                    <div className="py-5">
                                        <button className="py-3 md:py-5 px-5 md:px-10 bg-stone-800 text-white hover:opacity-90 ease-in duration-150 text-sm md:text-lg tracking-wider rounded font-semibold">Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
    </>
  )
}

export default Contact