
import './style.css'

export default function Landing(){

    // function findInFile(){
    //     return 
    // }

    return (<div className="h-screen">
            <div className="h-24 border border-b-2">
                <div className="flex justify-center">
                    <div className="w-1/6 flex items-center text-3xl font-bold pl-8">
                        Cook
                    </div>

                    <div className="flex justify-evenly w-3/5 mt-6 font-semibold text-lg">
                        <div>
                            Home
                        </div>
                        <div>
                            Recipe
                        </div>
                        <div>
                            Blogs
                        </div>
                        <div>
                            Videos
                        </div>
                        <div>
                            Contact
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" className="w-full p-3 ps-10 text-sm  rounded-full bg-white border-2 border-black outline-none" placeholder="Search..." required />
                            {/* <button type="submit"  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Search</button> */}
                        </div>
                    </div>

                    <div className="w-1/5 flex justify-center mt-6"> 
                        <div>
                            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Register</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="mx-20 pb-48 image-container">
                    <img src="../cook.jpg" alt="main_image" className="rounded-full" />
                    <div className="overlay-text w-2/3">
                        We are a team made up of professional, chefs, kitchen and newbies.
                    </div>
                </div>
            </div>
        
        </div>
    )
}