import { assets } from "../../assets/assets";
import { useEffect, useRef, useState } from "react";
const AddProduct = () => {
    const handleInput = useRef<HTMLInputElement | null>(null);
    const [image, setImage] = useState<File | null>(null);
    const handleImage = () => {
        handleInput.current?.click();
    }


    return (
        <div className="px-4 mt-5">
            <form className="flex flex-col items-start gap-y-2  p-2 max-w-[300px] md:max-w-[500px]">
                <div>
                    <label className="text-base font-medium">Product Image</label>
                    <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="upload" className="h-14 mt-2 cursor-pointer" onClick={handleImage} />
                    <input type="file" ref={handleInput} className="hidden" accept="image/*" onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                            setImage(e.target.files[0])
                        }
                    }} />
                </div>
                <div className="mt-2 w-full">
                    <label className="text-base font-medium">Product Name</label>
                    <input type="text" name="productName" placeholder="Type here" className="border border-gray-300 w-full py-2 px-2 rounded-md outline-none" />
                </div>
                <div className="mt-2 w-full">
                    <label className="text-base font-medium">Product Name</label>
                    <textarea name="productDescrption" placeholder="Type here" className="border border-gray-300 w-full py-4 px-2 rounded-md outline-none" />
                </div>
                <div className="flex flex-col items-start md:flex-row  md:items-center gap-3 w-full">
                    <div className="flex flex-col gap-2 w-full">
                        <label className="text-base font-medium">Category</label>
                        <select className="w-full md:w-40 border border-gray-300 p-2 rounded-md cursor-pointer">
                            <option>Earphone</option>
                            <option>Headphone</option>
                            <option>Watch</option>
                            <option>Smartphone</option>
                            <option>Laptop</option>
                            <option>Camera</option>
                            <option>Accessories</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label className="text-base font-medium">Product Price</label>
                        <input type="number" name="productPrice" className="w-full md:w-40 border border-gray-300 p-2 rounded-md" />
                    </div>
                    <div className="flex flex-col gap-2 w-full">
                        <label className="text-base font-medium">Offer Price</label>
                        <input type="number" name="offerPrice" className="w-full md:w-40 border border-gray-300 p-2 rounded-md" />
                    </div>
                </div>
                <button className="px-8 py-2.5 bg-orange-600 text-white font-medium rounded mt-2">Add</button>
            </form>
        </div>
    )
}
export default AddProduct;