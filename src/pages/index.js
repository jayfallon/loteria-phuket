import React from "react"
import g from "glamorous"
import Link from "gatsby-link"
import { withPrefix } from 'gatsby-link'
import objectFitImages from 'object-fit-images'


import styles from "./index.module.scss";

export default ({ data }) => {
  return (
    <div className={styles.mainGrid}>
      {data.allMarkdownRemark.edges.map(({ node }) =>
        <div key={node.id} className={styles.dataCell}>
        	<div className={styles.dataContent} style={{backgroundColor:`${node.frontmatter.color}` }}>
        		<div className={styles.cellTitle}>
							<span className={styles.cellNumber}>{node.frontmatter.index}</span>
							<span className={styles.cellName}>Phuket</span>
        		</div>
        		<div className={styles.cellImage} style={{backgroundImage: `url(img/${node.frontmatter.image})`}}>
              &nbsp;
        		</div>
		        <Link to={node.fields.slug}>
		        	<h3>{node.frontmatter.title}</h3>
		        </Link>
		        <div className={styles.cellExcerpt}>
		          {node.frontmatter.subtitle}
		        </div>
        	</div>
        </div>
      )}
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___index]}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            subtitle
            index
            color
            image
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
