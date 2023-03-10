import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid"
import router from "next/router";
import { Fragment, useState } from "react";
import Navbar from "../components/navbar";
import SideBar from "../components/sideBar";

// data for 2nd type of dropdown list
// const bedrooms = [
//     {
//         id: 1,
//         beds: "1 bed"
//     },
//     {
//         id: 2,
//         beds: "2 bed"
//     },
//     {
//         id: 3,
//         beds: "3 bed"
//     },
//     {
//         id: 4,
//         beds: "4 bed"
//     },
//     {
//         id: 5,
//         beds: "5 bed"
//     },
//     {
//         id: 6,
//         beds: "6 bed"
//     },
//     {
//         id: 7,
//         beds: "7 bed"
//     },
//     {
//         id: 8,
//         beds: "8 bed"
//     },
//     {
//         id: 9,
//         beds: "9 bed"
//     },
//     {
//         id: 10,
//         beds: "10 bed"
//     },
//     {
//         id: 11,
//         beds: "11 bed"
//     },
//     {
//         id: 12,
//         beds: "12 bed"
//     },
// ]
// const propertyType = [
//     {
//         id: 1,
//         property: "Flat/Apartment"
//     },
//     {
//         id: 2,
//         property: "House"
//     },
//     {
//         id: 3,
//         property: "Property"
//     }
// ]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function AddEin() {

    // data for 2nd type of dropdown list
    // const [selected, setSelected] = useState(bedrooms[0])
    // const [typeSelected, setTypeSelected] = useState(propertyType[0])


    return (
        <Navbar>
         <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row flex-wrap py-4 space-y-8">
            
            <main className="sm:w-2/3 md:w-3/4 pt-1 px-2 space-y-8 text-left">

              {/* title */}
                <div className="mx-8">
                  <h1 className="text-[24px]  font-medium">Post an Advert Step 1 of 3</h1>
                </div>

              {/* form  */}
              <form 
                className="space-y-8"
                onSubmit={async e => {
                    // prevent browser from reloading page
                    e.preventDefault()
                    router.push({
                        pathname: "/adZwei",
                    });
                  }}
              >
                <div>
                    <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700">
                        Beds
                      </label>
                      <select
                        id="bedrooms"
                        name="beds"
                        autoComplete="1 bed"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-[#d8a90f] focus:outline-none focus:ring-[#d8a90f] sm:text-sm"
                      >
                        <option>1 bed</option>
                        <option>2 bed</option>
                        <option>3 bed</option>
                        <option>4 bed</option>
                        <option>5 bed</option>
                        <option>6 bed</option>
                        <option>7 bed</option>
                        <option>8 bed</option>
                        <option>9 bed</option>
                        <option>10 bed</option>
                        <option>11 bed</option>
                        <option>12 bed</option>
                      </select>
                    
                     <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                          Property type
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-[#d8a90f] focus:outline-none focus:ring-[#d8a90f] sm:text-sm"
                        >
                          <option>Flat/Apartment</option>
                          <option>House</option>
                          <option>Property</option>
                        </select>

                    {/* 2nd type of dropdown list option  */}
                    {/* <Listbox value={typeSelected} onChange={setTypeSelected}>
                        {({ open }) => (
                            <>
                            <Listbox.Label className="block text-sm font-medium text-gray-700"></Listbox.Label>
                            <div className="relative mt-1">
                                <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:[#d8a90f] focus:outline-none focus:ring-1 focus:ring-[#d8a90f] sm:text-sm">
                                <span className="flex items-center">
                                    <span className="ml-3 block truncate">{typeSelected.property}</span>
                                </span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                                </Listbox.Button>

                                <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                                >
                                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {propertyType.map((property) => (
                                    <Listbox.Option
                                        key={property.id}
                                        className={({ active }) =>
                                        classNames(
                                            active ? 'text-white bg-[#d8a90f]' : 'text-gray-900',
                                            'relative cursor-default select-none py-2 pl-3 pr-9'
                                        )
                                        }
                                        value={property}
                                    >
                                        {({ selected, active }) => (
                                        <>
                                            <div className="flex items-center">
                                            <span
                                                className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                            >
                                                {property.property}
                                            </span>
                                            </div>

                                            {selected ? (
                                            <span
                                                className={classNames(
                                                active ? 'text-white' : 'text-[#d8a90f]',
                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                )}
                                            >
                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                            ) : null}
                                        </>
                                        )}
                                    </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                                </Transition>
                            </div>
                            </>
                        )}
                    </Listbox> */}
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
            <SideBar />
          </div>
        </div>
        </Navbar>
        )
}