import React from "react";

import styles from './loteria-card.module.scss';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className={styles.wrapper}>
      <div style={{backgroundColor: `${post.frontmatter.color}`}}>
        <div className={styles.hero}>
          <h1>{post.frontmatter.title}</h1>
        </div>
      </div>
      <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        color
      }
    }
  }
`;
