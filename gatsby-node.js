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