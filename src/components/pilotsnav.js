import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

const Pilotsnav = ({ maxLength }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fields: { slug: { regex: "/pilots-individual/" } } }
        sort: { fields: [frontmatter___sort], order: ASC }
      ) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              blurb
              image {
                childImageSharp {
                  fluid(maxHeight: 500, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              sort
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <nav>
      <h3>Pilots</h3>
      <ul>
        {data.allMarkdownRemark.edges.slice(0, maxLength).map(({ node }) => (
          <li key={node.id}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>{' '}
            {node.frontmatter.blurb}
          </li>
        ))}
      </ul>
    </nav>
  );
};

/*
const Pilotsnav = (maxLength) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { fields: { slug: { regex: "/pilots-individual/" } } }
          sort: { fields: [frontmatter___sort], order: ASC }
        ) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                blurb
                image {
                  childImageSharp {
                    fluid(maxHeight: 500, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
                sort
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={ (data, maxLength) => (
      <nav>
        <h3>Pilots {maxLength}</h3>
        <ul>
          {data.allMarkdownRemark.edges
            .slice(0,maxLength)
            .map(({ node }) => (
              <li key={node.id}>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>{' '}
                {node.frontmatter.blurb}
              </li>
            ))}
        </ul>
      </nav>
    )}
  />
);
*/
export default Pilotsnav;
