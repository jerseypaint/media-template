exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
    query IndexQuery {
        allContentfulArticle {
          edges {
            node {
               slug
            }
          }
        }
      }
    `)
    data.allContentfulArticle.edges.forEach(edge => {
      const slug = edge.node.slug
      actions.createPage({
        path: slug,
        component: require.resolve(`./src/templates/article.js`),
        context: { slug: slug },
      })
    })
  }