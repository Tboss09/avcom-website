import React from 'react'
import AppBlog from './AppBlog'
import ApplicationSideBar from './ApplicationSideBar'

const AppMain = () => {
 return (
  <main className="flex">
   <ApplicationSideBar />
   <AppBlog />
  </main>
 )
}

export default AppMain
