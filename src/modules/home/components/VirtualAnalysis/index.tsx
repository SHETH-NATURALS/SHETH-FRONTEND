const VirtualAnalysis = () => {
  return (
    <section className="bg-background w-full flex flex-col items-center gap-16 py-16">
      <h3 className="font-semibold text-2xl my-12">Virtual Analysis</h3>
      <div className="w-[1224px] h-[281px] bg-primary flex text-white">
        <div className="w-1/2 pl-24 py-8 pr-3">
          <h3 className="font-semibold text-2xl">
            NEW Virtual Skincare Analysis
          </h3>
          <p className="font-light">
            Looking For A Full Skincare Routine? Our NEW Virtual Skincare
            Analysis Tool Evaluates Your Skin And Provides The Most Personalized
            Recommendations.
          </p>
          <p className="font-semibold">Scan With Your Phone To Get Started</p>
          <p className="font-light">Or</p>
          <button className="p-3 border-2 border-white text-white bg-transparent hover:border-gray-400 hover:text-gray-400">
            Answer A Few Questions
          </button>
        </div>
        <div className="w-1/2">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="w-[1224px] h-[281px] bg-primary flex text-white">
        <div className="w-1/2">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-1/2 pl-24 py-8 pr-3">
          <h3 className="font-semibold text-2xl">
            NEW Virtual Haircare Analysis
          </h3>
          <p className="font-light">
            Looking For A Full Skincare Routine? Our NEW Virtual Skincare
            Analysis Tool Evaluates Your Skin And Provides The Most Personalized
            Recommendations.
          </p>
          <p className="font-semibold">Scan With Your Phone To Get Started</p>
          <p className="font-light">Or</p>
          <button className="p-3 border-2 border-white text-white bg-transparent hover:border-gray-400 hover:text-gray-400">
            Answer A Few Questions
          </button>
        </div>
      </div>
    </section>
  )
}

export default VirtualAnalysis
