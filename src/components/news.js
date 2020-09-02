import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const NewsContainer = styled.div`
    padding-bottom: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid #e7e7e7;
   

    &:last-of-type {
      border-bottom: none;
    }

    h3 {
        margin: 0.5rem 0;
    }

    .gatsby-image-wrapper {

        div {
            padding-bottom: 60% !important;
            min-width: 200px;
        }

        img {
            transition: transform 1s ease 0s, opacity 500ms cubic-bezier(.65,.05,.36,1) 0s !important;
        }

        &:hover {
            img {
                transform: scale(1.2);
            }
        }
    }

    @media (min-width: 640px) {
        display: ${props => props.horizontal ? `flex` : `block`};

        .gatsby-image-wrapper {
            ${props => props.horizontal ? `margin-right: 15px;` : ``};
        }
    }
`

const MetaWrapper = styled.div`
    text-align: center;
    font-size: 0.9rem;
    color: #5F758E;

    span {
        margin-right: 3px;
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;

    &:hover {
        text-decoration: underline;
        text-decoration-color: #DB162F;
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