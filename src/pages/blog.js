import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM DD YYYY")
            }
            html
            excerpt
          }
        }
      }
    }
  `)

  return (
    <Layout>
      {data.allMarkdownRemark.edges.map(({ node }) => {
        return (
          <ol>
            <li>
              <h2>{node.frontmatter.title}</h2>
              <p>{node.frontmatter.date}</p>
            </li>
          </ol>
        )
      })}
    </Layout>
  )
}

export default BlogPage
