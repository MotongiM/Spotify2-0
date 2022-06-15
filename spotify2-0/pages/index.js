import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/Sidebar'
import Center from '../components/Center'


export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className=''>
        <Sidebar />
        {/* <Center /> */}
      </main>
      <div>{/* Player */}</div>
    </div>
  )
}
