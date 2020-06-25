import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeContent from "../components/home-content"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeContent/>
  </Layout>
)

export default IndexPage
