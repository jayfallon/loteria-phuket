import React from "react";

import styles from './loteria-card.module.scss';
console.log(styles);

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className={styles.wrapper}>
      <h1>{post.frontmatter.title}</h1>
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
