import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const NewsContainer = styled.div`
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid #e7e7e7;
    display: ${props => props.horizontal ? `flex` : `block`};

    &:last-of-type {
      border-bottom: none;
    }

    h3 {
        margin: 0.5rem 0;
    }

    .gatsby-image-wrapper {
        ${props => props.horizontal ? `margin-right: 15px;` : ``};

        div {
            padding-bottom: 60% !important;
            min-width: 200px;
        }
    }
`

const MetaWrapper = styled.div`
    text-align: center;

    span {
        margin-right: 1rem;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;

    &:hover {
        text-decoration: underline;
        text-decoration-color: red;
    }
`

const News = (props) => (
  <NewsContainer horizontal={props.horizontal ? props.horizontal : false}>
    <Link to={props.link}><Img fluid={props.img} /></Link>
    <div>
        <StyledLink to={props.link}>
        <h3>{props.title}</h3>
        </StyledLink>
        {props.description && 
        <p>{props.description}</p>
        }
    
        <MetaWrapper>
        <span>{props.author} | </span><span>{props.date}</span>
        </MetaWrapper>
    </div>

  </NewsContainer>
)

export default News