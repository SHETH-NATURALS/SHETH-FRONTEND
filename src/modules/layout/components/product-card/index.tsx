interface ProductProps {
    title: string;
    imageUrl: string;
    description: string;
    price: number;
}

const ProductCard = () => {
    return (
        <div className="h-[500px] w-auto bg-white flex flex-col flex-shrink-0 relative">
            <div className="h-[384px]">
                <img src="https://i.ibb.co/fDngH9G/carosel-1.png" alt="black chair and white table" className="object-cover h-full w-full" />
            </div>
            <div className="flex flex-col text-center justify-end absolute w-full h-full p-3 gap-4">
                <p className="font-semibold text-primary">Marula Oil</p>
                <p>Product Description</p>
                <p>Ksh 800</p>
            </div>
        </div>
    )
}

export default ProductCard