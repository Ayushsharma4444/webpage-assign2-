import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {Nav} from './nav';
import {Header} from './header'; 
import {Products} from './Products';
import {Allproducts} from './Allproducts'
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='container' >
      <Nav/>
      <Header/>
      <Products/>
      <Allproducts/>
    </div>
  )
}
