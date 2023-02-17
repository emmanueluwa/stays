import router from "next/router";
import Navbar from "../components/navbar";
import SideBar from "../components/sideBar";

export default function AdDrei() {
    return (
        <Navbar>
          <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row flex-wrap py-4 space-y-8">
            
            <div className="mx-8">
                  <h1 className="text-[24px]  font-medium">Post an Advert Step 3 of 3</h1>
                </div>
            <main className="sm:w-2/3 md:w-3/4 pt-1 px-2 space-y-8 text-left">

              {/* title */}
                <div className="">
                  <h1 className="text-[24px]  font-medium">More about the property</h1>
                </div>

              {/* form  */}
              <form 
                className="space-y-8"
                onSubmit={async e => {
                    // prevent browser from reloading page
                    e.preventDefault()
                    router.push({
                        pathname: "/adPosted",
                    });
                  }}
              >
                <div>
                    {/* show areas based on previously entered postcode */}
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="area" className="block text-sm font-medium text-gray-700 py-4">
                        Area:
                      </label>
                      <select
                        id="area"
                        name="area"
                        autoComplete="area-type"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-[#d8a90f] focus:outline-none focus:ring-[#d8a90f] sm:text-sm"
                      >
                        <option>Area</option>
                      </select>
                    </div>
                    <label htmlFor="" className="block text-sm font-medium text-gray-700 py-4">Street name:</label>
                    <div>
                      <input
                        className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#d8a90f] focus:outline-none focus:ring-[#d8a90f] sm:text-sm"
                        type=""
                        value=""
                        placeholder=""
                      />
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
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 py-4">
                          Security deposit
                    </label>
                      <div className="col-span-6 sm:col-span-3">
                        
                        <input
                          type="text"
                          name="rent"
                          id="rent"
                          autoComplete="rent"
                          className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#d8a90f] focus:outline-none focus:ring-[#d8a90f] sm:text-sm"
                        />
                      </div>

                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 py-4">
                          Furnishings
                    </label>
                    <div className="flex space-x-8 ">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#d8a90f] checked:border-[#d8a90f] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox1" value="option1"/>
                        <label className="form-check-label inline-block text-gray-800" htmlFor="inlineCheckbox1">Furnished</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#d8a90f] checked:border-[#d8a90f] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox2" value="option2"/>
                        <label className="form-check-label inline-block text-gray-800" htmlFor="inlineCheckbox2">Part Furnished</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#d8a90f] checked:border-[#d8a90f] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2" type="checkbox" id="inlineCheckbox3" value="option3" />
                        <label className="form-check-label inline-block text-gray-800 " htmlFor="inlineCheckbox3">Unfurnished</label>
                      </div>
                    </div>

                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 py-4">
                          Available from
                    </label>
                    <div className="flex">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="payments" className="text-sm font-medium text-gray-700 hidden">
                          Day
                        </label>
                        <select
                          id="payments"
                          name="counpayments"
                          autoComplete="payments-type"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-[#d8a90f] focus:outline-none focus:ring-[#d8a90f] sm:text-sm"
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11</option>
                          <option>12</option>
                          <option>13</option>
                          <option>14</option>
                          <option>15</option>
                          <option>16</option>
                          <option>17</option>
                          <option>18</option>
                          <option>19</option>
                          <option>20</option>
                          <option>21</option>
                          <option>22</option>
                          <option>23</option>
                          <option>24</option>
                          <option>25</option>
                          <option>26</option>
                          <option>27</option>
                          <option>28</option>
                          <option>29</option>
                          <option>30</option>
                          <option>31</option>
                        </select>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="payments" className="text-sm font-medium text-gray-700 hidden">
                          Month
                        </label>
                        <select
                          id="payments"
                          name="counpayments"
                          autoComplete="payments-type"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-[#d8a90f] focus:outline-none focus:ring-[#d8a90f] sm:text-sm"
                        >
                          <option>Jan</option>
                          <option>Feb</option>
                          <option>Mar</option>
                          <option>Apr</option>
                          <option>May</option>
                          <option>June</option>
                          <option>July</option>
                          <option>Aug</option>
                          <option>Sep</option>
                          <option>Oct</option>
                          <option>Nov</option>
                          <option>Dec</option>
                        </select>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="payments" className="text-sm font-medium text-gray-700 hidden">
                          Year
                        </label>
                        <select
                          id="payments"
                          name="counpayments"
                          autoComplete="payments-type"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-[#d8a90f] focus:outline-none focus:ring-[#d8a90f] sm:text-sm"
                        >
                          <option>2023</option>
                        </select>
                      </div>
                      
                    </div>

                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 py-4">
                          Minimum stay
                    </label>
                    <div className="flex">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="payments" className="text-sm font-medium text-gray-700 hidden">
                          Minimum stay
                        </label>
                        <select
                          id="payments"
                          name="counpayments"
                          autoComplete="payments-type"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-[#d8a90f] focus:outline-none focus:ring-[#d8a90f] sm:text-sm"
                        >
                          <option>None</option>
                          <option>3 months</option>
                          <option>12 months</option>
                          <option>24 months</option>
                        </select>
                      </div>
                    </div>

                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 py-4">
                          Maximum stay
                    </label>
                    <div className="flex">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="payments" className="text-sm font-medium text-gray-700 hidden">
                          Maximum stay
                        </label>
                        <select
                          id="maxstay"
                          name="maxstay"
                          autoComplete="maxstay-type"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-[#d8a90f] focus:outline-none focus:ring-[#d8a90f] sm:text-sm"
                        >
                          <option>1 month</option>
                          <option>3 months</option>
                          <option>12 months</option>
                          <option>24 months</option>
                        </select>
                      </div>
                    </div>

                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 py-4">
                          References required?
                    </label>
                    <div className="flex space-x-8 ">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#d8a90f] checked:border-[#d8a90f] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox1" value="option1"/>
                        <label className="form-check-label inline-block text-gray-800" htmlFor="inlineCheckbox1">Yes</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#d8a90f] checked:border-[#d8a90f] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox2" value="option2"/>
                        <label className="form-check-label inline-block text-gray-800" htmlFor="inlineCheckbox2">No</label>
                      </div>
                    </div>

                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 py-4">
                          Amneties
                    </label>
                    <div>
                      <div className="flex space-x-8 ">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#d8a90f] checked:border-[#d8a90f] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox1" value="option1"/>
                          <label className="form-check-label inline-block text-gray-800" htmlFor="inlineCheckbox1">Parking</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#d8a90f] checked:border-[#d8a90f] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox2" value="option2"/>
                          <label className="form-check-label inline-block text-gray-800" htmlFor="inlineCheckbox2">Garden/Roof terrace</label>
                        </div>
                      </div>
                      <div className="flex space-x-8 ">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#d8a90f] checked:border-[#d8a90f] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox1" value="option1"/>
                          <label className="form-check-label inline-block text-gray-800" htmlFor="inlineCheckbox1">Garage</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#d8a90f] checked:border-[#d8a90f] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox2" value="option2"/>
                          <label className="form-check-label inline-block text-gray-800" htmlFor="inlineCheckbox2">Balcony/patio</label>
                        </div>
                      </div>
                      <div className="flex space-x-8 ">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#d8a90f] checked:border-[#d8a90f] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox1" value="option1"/>
                          <label className="form-check-label inline-block text-gray-800" htmlFor="inlineCheckbox1">Disabled access</label>
                        </div>
                      </div>
                    </div>
                    
                    {/* subtitle */}
                    <div className="mt-8">
                      <h1 className="text-[24px]  font-medium">Preferences for new tenant</h1>
                    </div>

                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 py-4">
                          Smoking
                    </label>
                    <div className="flex">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="payments" className="text-sm font-medium text-gray-700 hidden">
                          Smoking
                        </label>
                        <select
                          id="smoking"
                          name="smoking"
                          autoComplete="smoking-type"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-[#d8a90f] focus:outline-none focus:ring-[#d8a90f] sm:text-sm"
                        >
                          <option>No preference</option>
                          <option>Smoking allowed</option>
                          <option>No smoking</option>
                        </select>
                      </div>
                    </div>

                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 py-4">
                          Occupation
                    </label>
                    <div className="flex">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="occupation" className="text-sm font-medium text-gray-700 hidden">
                          Occupation
                        </label>
                        <select
                          id="occupation"
                          name="occupation"
                          autoComplete="occupation-type"
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-[#d8a90f] focus:outline-none focus:ring-[#d8a90f] sm:text-sm"
                        >
                          <option>No preference</option>
                          <option>Employed</option>
                          <option>Student</option>
                        </select>
                      </div>
                    </div>

                    {/* subtitle */}
                    <div className="mt-8">
                      <h1 className="text-[24px]  font-medium">Your advert and contact details</h1>
                    </div>

                    <label htmlFor="" className="block text-sm font-medium text-gray-700 py-4">Title (short description - max 50 characters)</label>
                    <div>
                      <input
                        className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#d8a90f] focus:outline-none focus:ring-[#d8a90f] sm:text-sm"
                        type=""
                        value=""
                        placeholder=""
                      />
                     
                    </div>

                    <div>
                      <label htmlFor="about" className="mt-4 block text-sm font-medium text-gray-700">
                        Description (No contact details are allowed to be left within the description)
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="about"
                          name="about"
                          rows={15}
                          className="mt-1 block w-full rounded-md border shadow-sm focus:border-[#d8a90f] focus:ring-[#d8a90f] sm:text-sm"
                          placeholder=""
                          defaultValue={''}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500">
                        Research shows the process of finding quality renters for you on petstays is improved when details about the acommodation
                        and the type of tenant you are looking for are given. For this reason we require you write at least 40 words. Please feel free to reach out to us
                        if you need any help with this. 
                      </p>
                    </div>

                    <label htmlFor="" className="block text-sm font-medium text-gray-700 py-4">First name</label>
                    <div>
                      <input
                        className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#d8a90f] focus:outline-none focus:ring-[#d8a90f] sm:text-sm"
                        type=""
                        value=""
                        placeholder=""
                      />
                    </div>

                    <label htmlFor="" className="block text-sm font-medium text-gray-700 py-4">Last name</label>
                    <div>
                      <input
                        className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#d8a90f] focus:outline-none focus:ring-[#d8a90f] sm:text-sm"
                        type=""
                        value=""
                        placeholder=""
                      />
                    </div>
                    <div>
                      <div className="flex space-x-8 ">
                        <div className="form-check form-check-inline">
                          <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[rgb(216,169,15)] checked:border-[#d8a90f] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox1" value="option1"/>
                          <label className="form-check-label inline-block text-gray-800" htmlFor="inlineCheckbox1">Display last name on advert?</label>
                        </div>
                      </div>
                    </div>

                    <label htmlFor="" className="block text-sm font-medium text-gray-700 py-4">Telephone</label>
                    <div className="flex">
                      <div>
                        <input
                          className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#d8a90f] focus:outline-none focus:ring-[#d8a90f] sm:text-sm"
                          type=""
                          value=""
                          placeholder=""
                        />
                      </div>
                      <div className="pl-1">
                        <div className="flex space-x-8 ">
                          <div className="form-check form-check-inline">
                            <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[rgb(216,169,15)] checked:border-[#d8a90f] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox1" value="option1"/>
                            <label className="form-check-label inline-block text-gray-800" htmlFor="inlineCheckbox1">Display in advert?</label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <label htmlFor="" className="block text-sm font-medium text-gray-700 pt-4">Email</label>
                    <p>Your email address will never be revealed. Potential renters will communicate with you via the messaging chat.</p>

                    <div className="mt-8">
                      <h1 className="text-[24px]  font-medium">Login information</h1>
                    </div>

                    {/* login information */}

                    <div className="flex space-x-20">
                      <div>
                        <p>Existing user?</p>
                        <p>Log in if you have registered with us before</p>
                        <div>
                          <label htmlFor="" className="block text-sm font-medium text-gray-700 py-4">Email</label>
                          <div>
                            <input
                              className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#d8a90f] focus:outline-none focus:ring-[#d8a90f] sm:text-sm"
                              type=""
                              value=""
                              placeholder=""
                            />
                          </div>
                          <label htmlFor="" className="block text-sm font-medium text-gray-700 py-4">Password</label>
                          <div>
                            <input
                              className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#d8a90f] focus:outline-none focus:ring-[#d8a90f] sm:text-sm"
                              type=""
                              value=""
                              placeholder=""
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <p>New user?</p>
                        <div>
                          <label htmlFor="" className="block text-sm font-medium text-gray-700 py-4">Your Email</label>
                          <div>
                            <input
                              className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#d8a90f] focus:outline-none focus:ring-[#d8a90f] sm:text-sm"
                              type=""
                              value=""
                              placeholder=""
                            />
                          </div>
                          <label htmlFor="" className="block text-sm font-medium text-gray-700 py-4">Confirm email</label>
                          <div>
                            <input
                              className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#d8a90f] focus:outline-none focus:ring-[#d8a90f] sm:text-sm"
                              type=""
                              value=""
                              placeholder=""
                            />
                          </div>
                          <label htmlFor="" className="block text-sm font-medium text-gray-700 py-4">Choose a password</label>
                          <div>
                            <input
                              className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#d8a90f] focus:outline-none focus:ring-[#d8a90f] sm:text-sm"
                              type=""
                              value=""
                              placeholder=""
                            />
                          </div>
                          <label htmlFor="" className="block text-sm font-medium text-gray-700 py-4">Confirm password</label>
                          <div>
                            <input
                              className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#d8a90f] focus:outline-none focus:ring-[#d8a90f] sm:text-sm"
                              type=""
                              value=""
                              placeholder=""
                            />
                          </div>
                          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 py-4">
                            Email preferences
                          </label>
                          <div className="">
                            <div className="form-check form-check-inline">
                              <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#d8a90f] checked:border-[#d8a90f] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox1" value="option1"/>
                              <label className="form-check-label inline-block text-gray-800" htmlFor="inlineCheckbox1">Email me about suitable tenants</label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#d8a90f] checked:border-[#d8a90f] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox2" value="option2"/>
                              <label className="form-check-label inline-block text-gray-800" htmlFor="inlineCheckbox2">Email occasional newsletters</label>
                            </div>
                            <p>(Your details will never be passed on to third parties)</p>
                          </div>
                          <label htmlFor="" className="block text-sm font-medium text-gray-700 py-4">Where did you hear about us?</label>
                          <div>
                            <input
                              className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#d8a90f] focus:outline-none focus:ring-[#d8a90f] sm:text-sm"
                              type=""
                              value=""
                              placeholder=""
                            />
                          </div>
                          <label htmlFor="agreement" className="block text-sm font-medium text-gray-700 py-4">
                            Your agreement with us
                          </label>
                          <div className="form-check form-check-inline">
                              <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#d8a90f] checked:border-[#d8a90f] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="inlineCheckbox1" value="option1"/>
                              <label className="form-check-label inline-block text-gray-800" htmlFor="inlineCheckbox1">I have read and agree to the terms & conditions and privacy policy</label>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="flex space-x-2 justify-center">
                  Place your advert by clicking:
                    <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#d8a90f] py-2 px-4 text-sm font-medium text-black hover:bg-[#d8a90f] focus:outline-none focus:ring-2 focus:ring-[#d8a90f] focus:ring-offset-2">
                    Finish &gt;&gt;
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