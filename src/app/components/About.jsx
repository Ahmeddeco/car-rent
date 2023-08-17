'use client'
import {
  MdOutlineMapsHomeWork,
  MdOutlineBuildCircle,
  MdOutlineDirectionsCar,
} from 'react-icons/md'

import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../variants'

const About = () => {
  const [ref, inview] = useInView({ threshold: 0.5 })
  return (
    <section
      className='section flex items-center '
      id='about'
      ref={ref}>
      <div className='container mx-auto'>
        {/* image */}
        <div className=''>image</div>
        {/* text & state */}
        <div className=''>text & state</div>
      </div>
    </section>
  )
}

export default About
