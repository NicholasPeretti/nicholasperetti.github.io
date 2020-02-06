import { h } from 'preact'

export default function TopSection() {
  return (
    <div className="h-screen lg:h-auto flex flex-col justify-around">
      <div className="text-center text-white md:py-20 font-thin tracking-widest">
        <h1 className="text-4xl font-sans">Nicholas Peretti</h1>
        <div className="flex flex-row justify-center">
          <div className="w-1/3 lg:w-1/6 flex flex-col justify-center items-end">
            <hr className="w-full stretch-in" />
          </div>
          <div className="px-3 rotate-in">&#10005;</div>
          <div className="w-1/3 lg:w-1/6 flex flex-col justify-center">
            <hr className="w-full stretch-in" />
          </div>
        </div>
        <p className="text-base font-sans xs:text-3xl md:text-base">
          Frontend engineer
        </p>
      </div>
    </div>
  )
}
