import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import News from "../components/news"
import { graphql } from "gatsby"

const HomeGrid = styled.div`
border-top: 1px solid #e7e7e7;

@media (min-width: 1000px) {
  display: grid;
  grid-template-areas:
    "main sidebar"
    "break break"
    "minor sidebarB";
  grid-template-columns: 1fr 22.5rem;
  grid-gap: 0;
}

`

const Main = styled.div`
  grid-area: main;
  padding: 15px;
`

const Sidebar = styled.div`
  display: none;
  @media (min-width: 1000px) {
    display: block;
    grid-area: sidebar;
    padding: 15px;
    border-left: 1px solid #e7e7e7;
  }
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

const SidebarB = styled.div`
  display: none;
  @media (min-width: 1000px) {
    display: block;
    grid-area: sidebarB;
    padding: 15px;
    border-left: 1px solid #e7e7e7;
  }

`

const NewsClipContainer = styled.div`

  h3 {
    font-size: 1.2rem;
  }
`

const BigNewsContainer = styled.div`

`

const NewsClip = (props) => (
  <NewsClipContainer>
    <News img={props.img} link={props.link} title={props.title} author={props.author} date={props.date} />
  </NewsClipContainer>
)

const BigNews = (props) => (
  <BigNewsContainer>
    <News img={props.img} link={props.link} title={props.title} description={props.description} author={props.author} date={props.date} />
  </BigNewsContainer>
)

const IndexPage = ({data}) => {
  const headline = data.allContentfulArticle.edges[0].node

  const sidebarFeed = []

  const minorFeed = []

  for (let i = 1; i < 4; i++) {
    sidebarFeed.push(data.allContentfulArticle.edges[i].node);
  }

  let x = 4

  while (x < (data.allContentfulArticle.edges.length -1)) {
    minorFeed.push(data.allContentfulArticle.edges[x].node);
    x++;
  }

  return (
    <Layout>
      <SEO title="Page two" />
      <HomeGrid>
        <Main>
          <BigNews
            img={headline.featuredImage.fluid}
            link={`/${headline.slug}`}
            title={headline.title}
            description={headline.description.description}
            author={headline.author}
            date={headline.date}
          />
        </Main>
        <Sidebar>
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
        </Sidebar>
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
        <SidebarB>
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
        </SidebarB>
      </HomeGrid>
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
    allContentfulArticle(sort: {fields: date, order: DESC}) {
      edges {
        node {
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
          slug
        }
      }
    }
  }
`

export default IndexPage
