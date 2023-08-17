'use client'
import { motion } from 'framer-motion'
import { fadeIn } from '../../../variants'
import Image from 'next/image'

const Brands = () => {
  return (
    <section className='xl:pt-16 xl:h-[200px] bg-white flex flex-col justify-center'>
      <motion.div
        variants={fadeIn('down', 0.4)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: false, amount: 0.6 }}
        className='container mx-auto'>
        {/* brand wrapper */}

        <div className='grid grid-cols-3 gap-6 place-items-center xl:flex xl:flex-wrap xl:gap-x-6 xl:justify-between'>
          <Image
            className='w-auto h-auto'
            src={'icons/brands/ford.svg'}
            width={85}
            height={32}
            alt='ford car'
          />
          <Image
            className='w-auto h-auto'
            src={'icons/brands/mercedes.svg'}
            width={60}
            height={60}
            alt='mercedes car'
          />
          <Image
            className='w-auto h-auto'
            src={'icons/brands/audi.svg'}
            width={85}
            height={50}
            alt='audi car'
          />
          <Image
            className='w-auto h-auto'
            src={'icons/brands/bmw.svg'}
            width={60}
            height={60}
            alt='bmw car'
          />
          <Image
            className='w-auto h-auto'
            src={'icons/brands/vw.svg'}
            width={60}
            height={60}
            alt='vw car'
          />
          <Image
            className='w-auto h-auto'
            src={'icons/brands/skoda.svg'}
            width={60}
            height={60}
            alt='skoda car'
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Brands
