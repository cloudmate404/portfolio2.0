import React from "react";
import {motion} from "framer-motion"
type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5, 6];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 ">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12">
        {/* the background yellow */}
      </div>
      <div className="relative w-full flex gap-[300px] overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 ">
        {projects.map((project, i) => (
          // eslint-disable-next-line react/jsx-key
          <motion.div 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 1.5}}
          className="w-[1000px] max-w-[1400px] flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img 
            initial={{
                y: -300,
                opacity: 0
            }}
            transition={{duration: 1.2}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            src="/photosnap.png" alt="" />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#f7ab0a]/50">
                  Case Study {i + 1} of {projects.length}: Photosnap
                </span>
              </h4>
              <p className="text-lg text-center md:text-left">The photosnap project is a marketing website for a photo-sharing app. This is a project from Frontend Mentor , designed to test the use of grid, flexbox with a bit of JavaScript to create responsive layouts while working with a professional design system. </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
