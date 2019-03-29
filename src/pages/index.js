import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Pilotsnav from 'components/Pilotsnav';
import { graphql } from 'gatsby';

const Index = ({ data }) => (
  <Layout addClass="reverse">
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.homeJson.content.childMarkdownRemark.html,
        }}
      />
      <Pilotsnav maxLength={3} />
      <div
        dangerouslySetInnerHTML={{
          __html: data.homeJson.body.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      body {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
    }
  }
`;
