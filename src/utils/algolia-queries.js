const indexName = `dev_Alt`

const pageQuery = `{
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

function pageToAlgoliaRecord({ node: { id, title, slug, description, ...rest } }) {
  return {
    objectID: id,
    title,
    slug,
    ...rest,
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries