import Image from 'next/image'
import Header from './component/header'
import Sidebar from './component/sidebar/Sidebar'
import EmailList from './email/EmailList'

export default function Home() {
  return (
    <main className=" min-h-screen ">
      <div className='page-layout'>
        <Header />
        <div className='layout-wrapper'>
          <Sidebar />
          <EmailList/>
        </div>

      </div>
    </main>
  )
}
