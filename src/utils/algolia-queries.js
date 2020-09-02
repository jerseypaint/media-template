const indexName = `dev_ALT`

const articleQuery = `
    query ArticleQuery {
        allArticles: allContentfulArticle {
            edges {
                node {
                    id
                    description {
                        description
                    }
                    title
                    slug
                }
            }
        }
    }
`

function articleToAlgoliaRecord({ node: { id, title, slug, description, ...rest } }) {
  return {
    objectID: id,
    title,
    slug,
    ...description,
    ...rest,
  }
}

const queries = [
  {
    query: articleQuery,
    transformer: ({ data }) => data.allArticles.edges.map(articleToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries