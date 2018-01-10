import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

// import './index.css'
import styles from './loteria.module.scss'

const Header = () => (
  <header>
    <div className={styles.mainNav}>
      <h1>
        <Link to="/">
          Loteria Phuket
        </Link>
      </h1>
      <label htmlFor="search">Search for Loteria cards</label>
      <input id="search" type="text" placeholder="Search for Loteria Cards"/>
    </div>
  </header>
)

const Footer = () => (
  <footer>
    <div className={styles.footerContent}>
      &copy;2018-PineCone Creative<br/>Build Something You Love
    </div>
  </footer>
)

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title="Loteria Phuket"
      meta={[
        { name: 'description', content: 'Loteria-Phuket' },
        { name: 'keywords', content: 'loteria, phuket, jay fallon, pinecone creative, pinecone' },
      ]}
    />
    <Header />
    <main>
      <div>
        {children()}
      </div>
    </main>
    <Footer/>
  </div>
  
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default TemplateWrapper
