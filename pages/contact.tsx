import Navbar from "../components/navbar";
import SideBar from "../components/sideBar";

export default function Contact() {
    return (
       <Navbar>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row flex-wrap py-4 space-y-8">
            <main className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2 space-y-8 text-left">

              {/* title */}
                <div className="">
                  <h1 className="text-[24px]  font-medium">PetStays - What makes us different?</h1>
                </div>

                <div>
                    
                    <h1 className="text-[20px] py-4 font-medium">Our Mission</h1>
                    <p>
                      Whether you're a pet owner looking for a new home or a landlord who wants to attract
                      responsible tenants, we invite you to join our community and start connecting with
                      like-minded individuals who share your passion for pets.
                    </p>

                </div>
            </main>
            <SideBar />
          </div>
        </div>
      </Navbar>
    )
}