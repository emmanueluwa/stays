import router from "next/router";
import { useState } from "react";
import Navbar from "../components/navbar";
import SideBar from "../components/sideBar";

export default function Advertise() {

  const [freeAd, setFreeAdd] = useState(Boolean)

    return (
      <Navbar>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row flex-wrap py-4 space-y-8">
            <main className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2 space-y-8 text-left">

              {/* title */}
                <div className="mx-8">
                  <h1 className="text-[24px]  font-medium">Advertise your Property to rent</h1>
                </div>

              {/* form  */}
                <form  className="space-y-8"
                  onSubmit={async e => {
                    // prevent browser from reloading page
                    e.preventDefault()
                    router.push("/adEin");
                  }}
                >
                  <div className="">
                    <div>
                      <h1>Please select your advert style</h1>
                    </div>
                    <div>
                      <p>(You can change your mind later)</p>
                    </div>
                  </div>
                  
                  {/* advert options */}
                  <div className="flex ">
                    <div className="">
                      <div className="form-check">
                        <input className="opacity-50 form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#d8a90f] checked:border-[#d8a90f] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" disabled/>
                        <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                          Bold Advert (From just £10.00)
                        </label>
                        <div>
                          <p>Our bold options are coming soon</p>
                        </div>
                      </div>
                      <div className="form-check py-6">
                        <input 
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#d8a90f] checked:border-[#d8a90f] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" 
                            type="checkbox" value="" id="accept"
                            // checked={freeAd} onChange={e => setFreeAdd(e.target.checked)} 
                            defaultChecked={true}
                        />
                        <label className="form-check-label inline-block text-gray-800" htmlFor="accept">
                          Free Advert
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2 justify-center">
                      <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#d8a90f] py-2 px-4 text-sm font-medium text-black hover:bg-[#d8a90f] focus:outline-none focus:ring-2 focus:ring-[#d8a90f] focus:ring-offset-2">
                        Place an ad now
                      </button>
                  </div>
                </form>

                {/* accepted payments */}
                {/* <h1>We will be accepting the following payments methods</h1> */}
            </main>
            <SideBar />
          </div>
        </div>
        


      </Navbar>
      )
}