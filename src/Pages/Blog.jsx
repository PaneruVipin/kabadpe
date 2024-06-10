import React from 'react'
import BlogCompOne from '../ServComps/BlogCompOne'
import ServBanner from '../ServComps/ServBanner'
import Discover from '../HomeComponent/Discover'
import MainFooter from '../HomeComponent/MainFooter'
import BlogTwo from '../ServComps/BlogTwo'
import BlogThre from '../ServComps/BlogThre'
import BlogFour from '../ServComps/BlogFour'

const Blog = () => {
  return (
    <>
    {/* <ServBanner /> */}
      <BlogCompOne />
      <BlogTwo />
      <BlogThre />
      <BlogFour />

      <Discover />
      <MainFooter />
    </>
  )
}

export default Blog
