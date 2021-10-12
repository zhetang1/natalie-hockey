import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Natalie's Hockey Highlight Reel" />
    <Header/>
    <Work/>
    <About/>
    <Footer/>
  </Layout>
)

export default IndexPage
