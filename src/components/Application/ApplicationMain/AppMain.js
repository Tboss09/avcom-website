import React from 'react'
import ScheduleQuote from '../../Product/Main/ScheduleQuote'
import AppBlog from './AppBlog'
import ApplicationSideBar from './ApplicationSideBar'

const AppMain = () => {
 return (
  <main>
   <div className="flex">
    <ApplicationSideBar />
    <AppBlog />
   </div>
   <ScheduleQuote />
  </main>
 )
}

export default AppMain
