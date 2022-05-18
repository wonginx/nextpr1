import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function index() {
    return (
        <div>
            <Header />
            <p>Hello Next.js</p>
        </div>
    )
}
//
// const Index = () => (
//     <div>
//       <Link href="/about">
//         <a title={"About Page"}>About Page</a>
//       </Link>
//       <p>Hello Next.js</p>
//     </div>
// )

// export default Index