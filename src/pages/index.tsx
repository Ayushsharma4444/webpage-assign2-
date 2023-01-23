import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {Nav} from '../component/nav';
import {Header} from '../component/header'; 
import {Products} from '../component/Products';
import {Allproducts} from '../component/Allproducts'
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
