

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-between w-[430px] gap-4">
        <span className="font-bold text-2xl">
          How do you want your project to be?
        </span>
        <div className="flex flex-row justify-start gap-4 w-36">
          <div className="w-[80px] h-[40px] bg-gray-300 rounded-full p-[3px]">
            <div className="w-[34px] h-[34px] rounded-full bg-white"></div>
          </div>
          <span className="leading-[40px]">Good</span>
        </div>
        <div className="flex flex-row justify-start gap-4 w-36">
          <div className="w-[80px] h-[40px] bg-gray-300 rounded-full p-[3px]">
            <div className="w-[34px] h-[34px] rounded-full bg-white"></div>
          </div>
          <span className="leading-[40px]">Cheap</span>
        </div>
        <div className="flex flex-row justify-start gap-4 w-36">
          <div className="w-[80px] h-[40px] bg-gray-300 rounded-full p-[3px]">
            <div className="w-[34px] h-[34px] rounded-full bg-white"></div>
          </div>
          <span className="leading-[40px]">Fast</span>
        </div>
      </div>
    </div>
  )
}
