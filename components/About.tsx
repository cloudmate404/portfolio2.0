import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity: 0
    }}
    whileInView={{
        opacity: 1
    }}
    transition={{
        duration: 1.5
    }}
    className="relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        src="/IMG2.jpg"
        width={1500}
        height={1500}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] "
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          My journey into frontend development began towards the end of 2021,
          when there were a lot of fuss about tech and how anyone can do it,
          well they forgot to mention the hard work and ton of hours required. I
          started with learning UIUX but I didn't enjoy it as much, coming from
          a civil engineering background, I prefer following designs and
          providing a great user experience but I did gain some technical
          knowledge on User Inferface and User Experience. I then began to dive
          into the world of frontend dev, I was overwhelmed at first but after
          learning to take it step by step with the assurance that there's
          almost no problem I have that stack overflow or youtube doesn't have
          the solution to, it became easier to learn. I'm currently learning at
          Scrimba bootcamp under amazing tutors with great teaching skills. I'm
          quite passionate about bringing both the visual and technical aspects
          of designs to life. User experience, writing clean, well detailed,
          readable and accessible code is a goal I want to keep pushing towards
          The most important thing is, I love it here!😊{" "}
        </p>
      </div>
    </motion.div>
  );
}

export default About;
