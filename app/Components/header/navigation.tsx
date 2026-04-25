import clsx from 'clsx'
import Image from 'next/image'
import styles from './nav.module.css'
function Navigation() {
  return (
  
      <nav className={clsx('flex justify-between items-center p-5 md:mr-5' , styles.navbar)}>
          <Image  src="/assets/nova.png" alt="logo" width={150} height={100}/>
        <ul className=' gap-10 font-bold hidden sm:flex '>
          <li><a href="/">Work</a></li>
          <li><a href="/about">Services</a></li>
          <li><a href="/contact">FAQ</a></li>
        </ul>
        <button className='bg-gray-800 p-2 w-50 rounded-3xl text-white text-md  hover:bg-sky-400 transition-colors duration-500 cursor-pointer'>Start project</button>
        </nav>
        
  )
}

export default Navigation