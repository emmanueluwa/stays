import { Main } from "next/document";
import Navbar from "../components/navbar";

export default function Advertise() {
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
                <div className="space-y-8">
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
                        {/* <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#d8a90f] checked:border-[#d8a90f] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault"/> */}
                        <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckDefault">
                          Bold Advert (From just £10.00)
                        </label>
                        <div>
                          <p>Our bold options are coming soon</p>
                        </div>
                      </div>
                      <div className="form-check py-6">
                        <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-[#d8a90f] checked:border-[#d8a90f] focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label inline-block text-gray-800" htmlFor="flexCheckChecked">
                          Free Advert
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2 justify-center">
                      <button className="group relative flex w-full justify-center rounded-md border border-transparent bg-[#d8a90f] py-2 px-4 text-sm font-medium text-black hover:bg-[#d8a90f] focus:outline-none focus:ring-2 focus:ring-[#d8a90f] focus:ring-offset-2">
                        Place an ad now
                      </button>
                  </div>
                </div>

                {/* accepted payments */}
                {/* <h1>We will be accepting the following payments methods</h1> */}
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