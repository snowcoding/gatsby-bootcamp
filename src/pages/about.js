import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Head from '../components/head'

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title='About' />
      <h1>About Me</h1>
      <p>My name is {data.site.siteMetadata.author} and I love coding in JS and snowboarding</p>
      <Link to="/contact">Contact Me</Link>
    </Layout>
  )
}

export default AboutPage
