import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";

import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1, bigShoe2, bigShoe3 } from "../assets/images";
import { useState } from "react";
const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="md:padding-x w-full  flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl  text-coral-red font-montserrat">
          Our Summer Collection
        </p>

        <h1 className="mt-10   text-8xl max-sm:text-[72px] font-palanquin font-bold max-sm:leading-2">
          <span>The New Arrival</span> <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          eius distinctio quia consequatur.
        </p>
        <Button label="Shop now" iconUrl={arrowRight} />

      <div className="flex justify-start items-start  flex-wrap w-full mt-20 gap-16">
        {statistics.map((stat, index) => (
          <div key={index}>
            <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
            <p className=" leading-7 text-slate-gray font-montserrat">{stat.label}</p>
          </div>
        ))}
      </div>
      </div>


      <div 
      className="flex relative flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoeImage} alt="shoe collection"
        width={610}
        height={500}
        className=" object-contain relative z-10" />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
            <ShoeCard
            imgURL={shoe}
            changeBigShoeImage={(shoe) => setBigShoeImage(shoe)}
            bigShoeImage = {bigShoeImage}
            />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Hero;
