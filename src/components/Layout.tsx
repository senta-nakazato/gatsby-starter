import React from "react"
import { Global } from "@emotion/core";
import { useStaticQuery, graphql } from "gatsby"

import Header from "@components/Header"

import { globalStyles } from "@styles";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Global styles={globalStyles} />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        
        <main>{children}</main>
        <footer style={{
          marginTop: `2rem`
        }}>
          © {new Date().getFullYear()}, Built with
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
