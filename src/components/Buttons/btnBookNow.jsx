import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function BookNow() {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <button
        onClick={() => setLgShow(true)}
        type="button"
      >
        Book Now
      </button>
      <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton className="bg-green w-full">
          <Modal.Title id="example-modal-sizes-title-lg ">Book Now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="p-6 bg-gray-100 flex items-center justify-center">
            <div class="container mx-auto">
              <div>
                <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb6">
                  <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div class="md:col-span-5">
                      <label for="full_name">Full Name</label>
                      <input
                        type="text"
                        name="full_name"
                        id="full_name"
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value=""
                        placeholder="Full Name"
                      />
                    </div>

                    <div class="md:col-span-5">
                      <label for="email">Email Address</label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value=""
                        placeholder="juandelacruz@email.com"
                      />
                    </div>
                    <div class="md:col-span-5">
                      <label for="email">Contact Number</label>
                      <input
                        type="text"
                        name="contactNumber"
                        id="contactNumber"
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value=""
                        placeholder="+6390 0000 0000"
                      />
                    </div>

                    <div class="md:col-span-5">
                      <label for="checkIn">Check In</label>
                      <input
                        type="date"
                        name="checkIn"
                        id="checkIn"
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value=""
                      />
                    </div>

                    <div class="md:col-span-5">
                      <label for="checkOut">Check Out</label>
                      <input
                        type="date"
                        name="checkOut"
                        id="checkOut"
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value=""
                      />
                    </div>

                    <div class="md:col-span-2">
                      <label for="country">Adult</label>
                      <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <select
                          id="countries"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option selected>No.</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </select>
                      </div>
                    </div>

                    <div class="md:col-span-2">
                      <label for="country">Child</label>
                      <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <select
                          id="countries"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option selected>None</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
                      </div>
                    </div>


                    <div class="md:col-span-5 text-right">
                      <div class="inline-flex items-end">
                        <button class="block w-full md:w-auto focus:outline-none rounded-lg px-5 py-2.5 text-center bg-zinc-800 text-white hover:bg-stone-600  hover:text-black">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BookNow;
