import Image from 'next/image'
import styles from './nav.module.css'
import clsx from 'clsx'
function Hero() {
  return (
    <section className='p-8 mt-15'>
        <h2 className={clsx('text-gray-400' , styles.focus)}>OPTICAL PRECISION IN DESIGN</h2>
        <h1 className={clsx('text-5xl sm:text-7xl capitalize font-medium w-full lg:w-[50%]' , styles.focus)}>Bring your Business Into Focus</h1>
        <p className={clsx('text-gray-600 font-medium w-full lg:w-[50%] mt-5' , styles.focus)}>Custom websites and systems designed to simplify, automate, and scale small businesses. We engineer clarity from digital complexity.</p>
        <div className='flex gap-4 mt-9 flex-row'>
        <button className='bg-gray-800 hover:bg-sky-400 transition-colors duration-500 cursor-pointer text-white font-medium rounded-4xl p-2 flex gap-3 items-center'>Contact us <Image src='/assets/contact.png' className={styles.contactIcon} alt='Contact' width={30} height={30} /></button>
        <button className='bg-gray-300  hover:bg-sky-400 transition-colors duration-500 cursor-pointer text-black font-medium rounded-4xl pl-3 pr-3'>View Pricing</button>
        </div>
        <div className={styles.features}>
            <p className='bg-sky-900 p-3'>Quality Build</p>
            <p className='bg-sky-900 p-3'>Fast Delivery</p>
            <p className='bg-sky-900 p-3'>Reliable and Secure</p>
        </div>
    </section>
  )
}

export default Hero