import React from "react"
import styled from "styled-components"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import News from "../components/news"
import { graphql } from "gatsby"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
}

const ArticleGrid = styled.div`
    border-top: 1px solid #e7e7e7;

    @media (min-width: 1000px) {
        display: grid;
        grid-template-areas:
            "hero hero"
            "main sidebarR"
            "break break"
            "minor empty";
        grid-template-columns: 1fr 22.5rem;
        grid-gap: 0;
    }
`

const Hero = styled.div`
    grid-area: hero;
    padding: 15px;
`

const Main = styled.div`
  grid-area: main;
  padding: 15px;
`

const RightSidebar = styled.div`
    display: none;

    @media (min-width: 1000px) {
        display: block;
        grid-area: sidebarR;
        padding: 15px;
        border-left: 1px solid #e7e7e7;
    }
`

const LeftSidebar = styled.div`
  padding: 15px;
  width: 22.5reml
`

const Break = styled.div`
  grid-area: break;
  height: 300px;
  paddinh: 15px;
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
`


const Minor = styled.div`
  grid-area: minor;
  padding: 15px;
`

const FlexContainer = styled.div`

    @media (min-width: 1000px) { 
        display: flex;
    }
`

const NewsClipContainer = styled.div`

  h3 {
    font-size: 1.2rem;
  }
`
const ArticleBody = styled.article`
    max-width: 36rem;
    margin: 0 auto;
`

const NewsClip = (props) => (
  <NewsClipContainer>
    <News img={props.img} link={props.link} title={props.title} author={props.author} date={props.date} />
  </NewsClipContainer>
)

const Article = ({data: {article, allArticles}}) => {
  

    const sidebarFeed = []

    const minorFeed = []

    for (let i = 0; i < 3; i++) {
        sidebarFeed.push(allArticles.edges[i].node);
    }

    let x = 4

    while (x < (allArticles.edges.length -1)) {
        minorFeed.push(allArticles.edges[x].node);
        x++;
    }

  return (
    <Layout>
      <SEO title="Page two" />
      <ArticleGrid>
          <Hero>
            <Img fluid={article.featuredImage.fluid} />
            <h1>{article.title}</h1>
          </Hero>
        <Main>
            <FlexContainer>
                <LeftSidebar>
                    <p>Newsletter?</p>
                </LeftSidebar>
                <ArticleBody>
                    {documentToReactComponents(article.body.json, options)}
                </ArticleBody>
            </FlexContainer>
        </Main>
        <RightSidebar>
          {sidebarFeed.map((clip, index) => (
            <NewsClip
              img={clip.featuredImage.fluid}
              link={`/${clip.slug}`}
              title={clip.title}
              author={clip.author}
              date={clip.date}
              key={index}
            />
          ))}
        </RightSidebar>
        <Break></Break>
        <Minor>
          {minorFeed.map((clip, index) => (
            <News  
              img={clip.featuredImage.fluid}
              link={`/${clip.slug}`}
              title={clip.title}
              description={clip.description.description}
              author={clip.author}
              date={clip.date}
              horizontal={true}
              key={index}
            />
          ))}
        </Minor>
      </ArticleGrid>
    </Layout>
  )
}
export default Article

export const query = graphql`
  query($slug: String!) {
    article: contentfulArticle( slug: { eq: $slug }) {
        author
        description {
            description
        }
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
            fluid {
            ...GatsbyContentfulFluid_withWebp
            }
        }
        title
        body {
            json
        }
        slug
    }
    allArticles: allContentfulArticle(sort: {fields: date, order: DESC}, limit: 7) {
        edges {
            node {
            author
            description {
                description
            }
            date
            featuredImage {
                fluid {
                ...GatsbyContentfulFluid_withWebp
                }
            }
            title
            slug
            }
        }
    }
  }
`