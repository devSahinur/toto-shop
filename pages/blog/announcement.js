import Head from 'next/head'
import React from 'react'
import BlogSideBar from '../../components/BlogPage/BlogSidebar/BlogSideBar'
import MainFooter from '../../components/commonComponents/MainFooter'
import MainHeader from '../../components/commonComponents/MainHeader'

function announcement() {
  return (
    <>
      <Head>
        <title>Blog - ToTo SHOP</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="ToToSHOP - Online Shopping Website"></meta>
        <meta
          name="description"
          content="Bangladesh's best online shopping store with 17+ million products at resounding discounts in dhaka, ctg & All across Bangladesh with cash on delivery (COD)"
        ></meta>
      </Head>
      <MainHeader BreadcrumbTitle="Blog" />

      <main className="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <BlogSideBar />
        <div className="col-span-9 grid md:grid-cols-3 gap-4 mt-6 lg:mt-0">
          <h1>hello i am announcement post</h1>
        </div>
      </main>
      <MainFooter />
    </>
  )
}

export default announcement