import React from 'react'
import {motion} from "framer-motion"
import SkillCard from './SkillCard'
type Props = {}

function Skills({}: Props) {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration: 1.5}}
    className='flex relative flex-col text-center md:text-left xl:flex-row  xl:px-10 min-h-screen  justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>

        <h3 className='absolute top-36 tracking-[3px] uppercase text-gray-500 text-sm w-screen text-center'>hover over a skill for current proficiency</h3>
        <div className='grid grid-cols-4 gap-5 '>
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        <SkillCard />
        </div>
    </motion.div>
  )
}

export default Skills