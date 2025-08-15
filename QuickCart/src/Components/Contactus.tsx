const Contactus=()=>{
    return(
        <div>
            <div className="flex flex-row  items-center justify-center mt-10 container max-w-2xl mx-auto ">
                  <form className="flex flex-col  gap-2 shadow-md  border border-gray-800 rounded-md bg-white p-4">
                       <h1 className="font-bold text-center">Contact us form</h1>
                       <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col items-start">
                               <label>First Name</label>
                               <input type="text" name="firstName" placeholder="First Name" className="rounded-md outline-none px-4 py-1 border border-gray-400" required/>
                            </div>
                            <div className="flex flex-col items-start">
                               <label>Last Name</label>
                               <input type="text" name="lastName" placeholder="Last Name" className="rounded-md outline-none px-4 py-1 border border-gray-400" required/>
                            </div>
                       </div>
                       <div className="w-full flex flex-col items-start">
                          <label>Email Address</label>
                          <input type="email" name="email" placeholder="Email Address" className="rounded-md outline-none px-4 py-1 border border-gray-400 w-full" required/>
                       </div>
                       <div className="w-full flex flex-col items-start">
                          <label>Phone Number</label>
                          <input type="number" name="phoneNumber" placeholder="Phone Number" className="rounded-md outline-none px-4 py-1 border border-gray-400 w-full" required/>
                       </div>
                       <div className="w-full flex flex-col items-start">
                             <label>Reason for Contact</label>
                             <textarea name="reasonforContact" placeholder="Choose your reason contacting us" className="rounded-md outline-none px-4 py-4 border border-gray-300 w-full"/>
                       </div>
                        <button className="bg-green-600 w-full py-2 text-white font-bold rounded-md cursor-pointer">Submit</button>
                  </form>
            </div>
        </div>
    )
}
export default Contactus