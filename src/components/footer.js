import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import footerStyles from './footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          company
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <p>Created by {data.site.siteMetadata.company}, 2019</p>
    </footer>
  )
}

export default Footer
