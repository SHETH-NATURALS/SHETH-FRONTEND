import Image from "next/image"

const BlogCard = () => {
    return (
        <div className="w-[392px] flex flex-col bg-white h-[500px]">
            <div className="w-full h-5/6">
                <Image
                    src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                    alt="image 1"
                    className="h-full w-full object-cover"
                    width={392}
                    height={392}
                />
            </div>
            <div className="flex flex-col p-6">
                <h3 className="font-semibold text-2xl my-3">How to get clear skin fast</h3>
                <p className="text-sm text-gray-400">Skincare | Dr Gasheri | Feb 20, 2024</p>
                <p className="pt-3">Many People Find It Difficult To Get Clear Skin. The Methods For Getting Clear Skin Will Vary...</p>
            </div>
        </div>
    )
}

export default BlogCard