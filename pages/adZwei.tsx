import Navbar from "../components/navbar";
import router from "next/router";import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid"
import { Fragment, useState } from "react";

const rents = [
    {
        id: 1,
        rentType: "Per week"
    },
    {
        id: 2,
        rentType: "Per month"
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function AdZwei() {

    const [selected, setSelected] = useState(rents[0])

    return (
       <Navbar>
        <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row flex-wrap py-4 space-y-8">
            
            <div className="mx-8">
                  <h1 className="text-[24px]  font-medium">Post an Advert Step 2 of 3</h1>
                </div>
            <main className="sm:w-2/3 md:w-3/4 pt-1 px-2 space-y-8 text-left">

              {/* title */}
                <div className="mx-8">
                  <h1 className="text-[24px]  font-medium">We need a few basic details first</h1>
                </div>

              {/* form  */}
              <form 
                className="space-y-8"
                onSubmit={async e => {
                    // prevent browser from reloading page
                    e.preventDefault()
                    router.push({
                        pathname: "/adDrei",
                    });
                  }}
              >
                <div>
                    <label htmlFor="" className="block text-sm font-medium text-gray-700 py-4">Postcode of property</label>
                    <div>
                      <input
                        className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#d8a90f] focus:outline-none focus:ring-[#d8a90f] sm:text-sm"
                        type=""
                        value=""
                        placeholder=""
                      />
                      <p className="mt-1 text-sm text-gray-500">
                      (e.g LS1 4AD)
                      </p>
                    </div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 py-4">
                          Rent (for the whole property)
                    </label>
                    <div className="flex">
                      <div className="col-span-6 sm:col-span-3">
                        
                        <input
                          type="text"
                          name="rent"
                          id="rent"
                          autoComplete="rent"
                          className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#d8a90f] focus:outline-none focus:ring-[#d8a90f] sm:text-sm"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="payments" className="text-sm font-medium text-gray-700 hidden">
                          Payments
                        </label>
                        <select
                          id="payments"
                          name="counpayments"
                          autoComplete="payments-type"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-[#d8a90f] focus:outline-none focus:ring-[#d8a90f] sm:text-sm"
                        >
                          <option>Per week</option>
                          <option>Per month</option>
                        </select>
                      </div>
                      
                    </div>

                    <div className="mt-5 md:col-span-2 md:mt-0 pt-4">
                      <div className="overflow-hidden shadow-2xl sm:rounded-md">
                        <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                          <fieldset>
                            <legend className="sr-only">I am a</legend>
                            <div className="text-base font-medium text-gray-900" aria-hidden="true">
                              I am a
                            </div>
                            <div className="mt-4 space-y-4">
                              <div className="flex items-start">
                                <div className="flex h-5 items-center">
                                  <input
                                    id="comments"
                                    name="comments"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-[#d8a90f] focus:ring-[#d8a90f]"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor="comments" className="font-medium text-gray-700">
                                    live out landlord
                                  </label>
                                  <p className="text-gray-500">(I own the property but don't live there)</p>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <div className="flex h-5 items-center">
                                  <input
                                    id="candidates"
                                    name="candidates"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-[#d8a90f] focus:ring-[#d8a90f]"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor="candidates" className="font-medium text-gray-700">
                                    agent
                                  </label>
                                  <p className="text-gray-500">(I am a advertising on a landlord's behalf)</p>
                                </div>
                              </div>
                              <div className="flex items-start">
                                <div className="flex h-5 items-center">
                                  <input
                                    id="offers"
                                    name="offers"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-[#d8a90f] focus:ring-[#d8a90f]"
                                  />
                                </div>
                                <div className="ml-3 text-sm">
                                  <label htmlFor="offers" className="font-medium text-gray-700">
                                    current tenant(s)
                                  </label>
                                  <p className="text-gray-500">(I want to move out but need someone to replace me)</p>
                                </div>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="flex space-x-2 justify-center">
                    <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#d8a90f] py-2 px-4 text-sm font-medium text-black hover:bg-[#d8a90f] focus:outline-none focus:ring-2 focus:ring-[#d8a90f] focus:ring-offset-2">
                    Continue &gt;&gt;
                    </button>
                </div>
                {/* accepted payments */}
                {/* <h1>We will be accepting the following payments methods</h1> */}
            </form>
            </main>
            <aside className="w-full sm:w-1/3 md:w-1/4 px-2 items-end">
              <div className="sticky top-0 p-4 w-full">
                <div className="flex items-center py-4">
                  <div className="w-2 h-2 bg-[#d8a90f] rounded mr-1"></div>
                  <p>Need help?</p>
                </div>
                <p>Contact us by <a>email</a></p>
              </div>
            </aside>
          </div>
        </div>
       </Navbar>
    )
}