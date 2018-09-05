/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it


 const path = require(`path`)

 exports.createPages = ({ graphql, actions }) => {
   const { createPage } = actions
 
   return new Promise((resolve, reject) => {
     graphql(`
     {
      allDatoCmsAbout {
        edges {
          node {
            slug
          }
        }
      }
      allDatoCmsHostel {
        edges {
          node {
            slug
          }
        }
      }
      allDatoCmsGroup {
          edges {
            node {
              slug
            }
          }
        }
      allDatoCmsBlog {
        edges {
          node {
            slug
            destination {
              slug
            }
          }
        }
      }
    }
    
    
     `).then(result => {
      result.data.allDatoCmsAbout.edges.map(({ node }) => {
        createPage({
          path: `about/${node.slug}`,
          component: path.resolve(`./src/templates/aboutpages.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      result.data.allDatoCmsGroup.edges.map(({ node }) => {
        createPage({
          path: `groups/${node.slug}`,
          component: path.resolve(`./src/templates/groupspages.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      result.data.allDatoCmsHostel.edges.map(({ node }) => {
        createPage({
          path: `hostels/${node.slug}`,
          component: path.resolve(`./src/templates/hostelpages.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      result.data.allDatoCmsBlog.edges.map(({ node }) => {
        createPage({
          path: `${node.destination.slug}/${node.slug}`,
          component: path.resolve(`./src/templates/blog.js`),
          context: {
            slug: node.slug,
          },
        })
      })

      
       resolve()
     })
   })
 }