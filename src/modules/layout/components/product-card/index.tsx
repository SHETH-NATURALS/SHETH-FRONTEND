interface ProductProps {
    title: string;
    imageUrl: string;
    description: string;
    price: number;
}

const ProductCard = () => {
    return (
        // <div className="flex flex-shrink-0 relative w-full sm:w-auto">
        //     <img src="https://i.ibb.co/tCfVky2/carosel-3.png" alt="sitting area" className="object-cover h-full w-full" />
        //     <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
        //         <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">Catalog 2</h2>
        //         <div className="flex h-full items-end pb-6">
        //             <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">Minimal Interior</h3>
        //         </div>
        //     </div>
        // </div>
        <div className="w-full bg-background flex flex-col flex-shrink-0 relative sm:w-auto">
            <div className="h-[384px]">
                <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover h-full w-full" />
            </div>
            <div className="flex flex-col text-center items-center">
                <p className="font-semibold text-primary">Marula Oil</p>
                <p>Product Description</p>
                <p>Ksh 800</p>
            </div>
        </div>
    )
}

export default ProductCard