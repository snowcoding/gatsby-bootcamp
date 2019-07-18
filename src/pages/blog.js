import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    # query {
    #   allMarkdownRemark {
    #     edges {
    #       node {
    #         frontmatter {
    #           title
    #           date(formatString: "MMMM DD YYYY")
    #         }
    #         html
    #         excerpt
    #         fields {
    #           slug
    #         }
    #       }
    #     }
    #   }
    # }

    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(({ node }) => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${node.slug}`}>
                <h2>{node.title}</h2>
                <p>{node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
        {/* {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${node.fields.slug}`}>
                <h2>{node.frontmatter.title}</h2>
                <p>{node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })} */}
      </ol>
    </Layout>
  )
}

export default BlogPage
