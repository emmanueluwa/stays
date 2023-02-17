import Navbar from "../components/navbar";
import SideBar from "../components/sideBar";

export default function About() {
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
                    <p>
                      At PetStays, we understand the bond between pets and their owners. 
                      We also know how challenging it can be to find a rental property that welcomes
                       furry family members. That's why we created a platform that connects pet owners 
                       to pet-friendly landlords across the UK.
                    </p>

                    <h1 className="text-[20px] py-4 font-medium">Our Mission</h1>

                    <p>
                      Our mission is to make it easier for pet owners to find a home that accommodates
                      their pets while also providing landlords with a reliable way to attract responsible
                      and trustworthy tenants. We believe that pets should be able to enjoy the comfort of
                      a home just as much as their owners do.
                    </p>

                    <h1 className="text-[20px] py-4 font-medium">Our Team</h1>

                    <p>
                      Our team is made up of passionate pet lovers and experienced property professionals
                      who work hard to ensure that our platform is easy to use, safe, and effective.
                      We are dedicated to providing excellent customer service and support to all of our users,
                      and we're always happy to answer any questions or concerns you may have.
                    </p>

                    <h1 className="text-[20px] py-4 font-medium">The Community</h1>

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