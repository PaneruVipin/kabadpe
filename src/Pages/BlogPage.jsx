import React from 'react'
import BlogFront from '../Components/BlogFront'
import Header from '../Components/Header'
import AboutBanner from '../AboutComp/AboutBanner'
import InstaFeed from '../HomeComponent/InstaFeed'
import InstaSlides from '../InstaSlide'
import MainFooter from '../HomeComponent/MainFooter'

const BlogPage = () => {
    const data = {
        title : 'Our Blogs',
        text : 'Blogs',
      }

  return (
    <>
    <Header />
    <AboutBanner  data={data} />
      <BlogFront />
      <InstaFeed/>
      <MainFooter />
    </>
  )
}

export default BlogPage
