import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';
import Pilotsnav from 'components/Pilotsnav';

const Pilot = ({ data }) => (
  <Layout>
    <Head pageTitle={data.markdownRemark.frontmatter.title} />
    <Pilotsnav />
    <Box>
      <h1>{data.markdownRemark.frontmatter.title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Pilot.propTypes = {
  data: PropTypes.object.isRequired,
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default Pilot;
