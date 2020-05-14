// This is a very hack-y way of using the template not as a blog and using the index route as an about page, though the stuff needed to make it a blog is left in

// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
// import Feed from '../components/Feed';
import Page from '../components/Page';
// import Pagination from '../components/Pagination';
import { useSiteMetadata } from '../hooks';
// import type { PageContext, AllMarkdownRemark } from '../types';

// type Props = {
//   data: AllMarkdownRemark,
//   pageContext: PageContext
// };

const IndexTemplate = ({ data, pageContext }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();

  const {
    currentPage,
    hasNextPage,
    hasPrevPage,
    prevPagePath,
    nextPagePath
  } = pageContext;


  // const { edges } = data.allMarkdownRemark;
  // const pageTitle = currentPage > 0 ? `Posts - Page ${currentPage} - ${siteTitle}` : siteTitle;

  return (
    // <Layout title={pageTitle} description={siteSubtitle}>
    <Layout title="About">
      <Sidebar />
      <Page>
      <div>
        <p>Andrew Hibbard is a software engineer.</p>

        <p>Email: andrew.o.hibbard@gmail.com</p>

        <p><a href="https://github.com/aohibbard">Github</a> | <a href="https://www.linkedin.com/in/andrew-hibbard/">LinkedIn</a></p>
      </div>
      </Page>
      {/* <Sidebar isIndex />
      <Page>
        <Feed edges={edges} />
        <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      </Page> */}
    </Layout>
  );
};

// export const query = graphql`
//   query IndexTemplate($postsLimit: Int!, $postsOffset: Int!) {
//     allMarkdownRemark(
//         limit: $postsLimit,
//         skip: $postsOffset,
//         filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } },
//         sort: { order: DESC, fields: [frontmatter___date] }
//       ){
//       edges {
//         node {
//           fields {
//             slug
//             categorySlug
//           }
//           frontmatter {
//             title
//             date
//             category
//             description
//           }
//         }
//       }
//     }
//   }
// `;

export default IndexTemplate;
