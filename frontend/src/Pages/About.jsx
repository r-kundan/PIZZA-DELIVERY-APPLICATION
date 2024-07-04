import { PrimaryHeading, SecondaryHeading } from "../components/Heading";

export default function About() {
    return (
      <div className=" flex flex-col justify-center items-center w-3/4 gap-8">
      <PrimaryHeading>About Us</PrimaryHeading>
      <div className="flex flex-col justify-center items-center gap-10">
        <p className="text-center text-lg md:text-2xl">
          We are passionate about bringing you the freshest seafood, delectable
          desserts, mouth-watering burgers, and the best pizzas in town. Our
          mission is to deliver delicious food that satisfies your cravings and
          delights your taste buds.
        </p>
        
        <div className="grid grid-cols-11 gap-3 max-sm:gap-2 px-5">
          {about.map((src, index) => {
            return (
              <div key={index} className={`w-14 h-72 max-lg:w-9 max-sm:w-7 max-[480px]:w-6 relative col-span-1 shadow-xl border-white border  ${index===0 ? 'rounded-l-xl':''} ${index===about.length-1 ? 'rounded-r-xl':''}`}>
                <img
                  src={src}
                  alt={`Food Image ${index + 1} `}
                  layout="fill"
                  className={`object-cover object-center h-full w-full ${index===0 ? 'rounded-l-xl':''} ${index===about.length-1 ? 'rounded-r-xl':''}`}
                />
              </div>
            );
          })}
        </div>
      </div>

      
          <p className="text-center text-lg md:text-2xl">

            Founded in  2023, PizzaPal began as a
            small family-owned seafood restaurant.
            Over the years, we&apos;ve expanded our menu
            and our reach, always maintaining our
            commitment to quality and flavor.
          </p>
    </div>
    );
}

const about = [
  "/about1.png",
  "/about2.png",
  "/about3.png",
  "/about4.png",
  "/about5.png",
  "/about6.png",
  "/about7.png",
  "/about8.png",
  "/about9.png",
  "/about10.png",
  "/about11.png",
]