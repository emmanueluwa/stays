import Navbar from "../components/navbar";
import SideBar from "../components/sideBar";

export default function Register() {
    return (
       <Navbar>
          <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row flex-wrap py-4 space-y-8">
            
            <div className="mx-8">
                  <h1 className="text-[24px]  font-medium">Completed advert process</h1>
                </div>
            <main className="sm:w-2/3 md:w-3/4 pt-1 px-2 space-y-8 text-left">

              {/* title */}
              {/* ref number to be made dynamic */}
              <div className=" flex ">
                <h1 className="text-[24px]  font-medium bg-[#d8a90f] px-1 border rounded">Thank you, your ad has been posted. Your add ref # is 1</h1>
              </div>

              <div>
                  <p>Flat hunters can contact you from day one - no Early Bird required</p>
              </div>

           
            </main>
            <SideBar />
          </div>
        </div>
        </Navbar>
    )
}