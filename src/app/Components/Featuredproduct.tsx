import Image from "next/image"
const FeaturedProducts = () => {
    return (
        <div className="flex lg:flex-row flex-col justify-between py-10 px-10 bg-yellow-500 mt-6 gap-7">
            <div className="md:w-4/12 w-medium mb-20">
                <Image
                    src="/Product1.jpg"
                    alt="Product One"
                    width={400}
                    height={600}
                />
                <p className="text-center pt-10">PKR 5,000</p>
                <div className="flex justify-center items-center my-3">

                    <button className="px-10 py-4 bg-blue-600 text-white rounded-md hover:bg-pink-600 hover:font-bold">
                        Buy Now
                    </button>
                </div>
            </div>

            <div className="md:w-4/12 w-full mb-20">
                <Image
                    src="/Product2.jpg"
                    alt="Product Two"
                    width={400}
                    height={300}
                />
                <p className="text-center pt-10">PKR 5,000</p>
                <div className="flex justify-center items-center my-3">

                    <button className="px-10 py-4 bg-blue-600 text-white rounded-md hover:bg-pink-600 hover:font-bold">
                        Buy Now
                    </button>
                </div>
            </div>

            <div className="md:w-4/12 w-full">
                <Image
                    src="/product3.jpg"
                    alt="Product Three"
                    width={400}
                    height={300}
                />
                <p className="text-center pt-10">PKR 5,000</p>
                <div className="flex justify-center items-center my-3">

                    <button className="px-10 py-4 bg-blue-600 text-white rounded-md hover:bg-pink-600 hover:font-bold">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProducts;