import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.div`
  text-align: center;
  max-width: 1440px;
  margin: 0 auto 5px;
`

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
`

const SiteTitle = styled(Link)`
  text-decoration: none;
  color: #000;
  opacity: 1;
  transition: opacity 400ms ease;

  &:hover {
    opacity: 0.7;
  }

  @media (min-width: 1000px) {
    font-size: 56px;
  }
`

const Header = ({ siteTitle }) => (
  <header>
    <HeaderContainer>
      <div>
        <h1>
          <SiteTitle to="/" className={`site-title`}>
            {siteTitle}
          </SiteTitle>
        </h1>
      </div>
      <NavContainer>
        <div>
          Search
        </div>
        <div>
          Nav
        </div>
      </NavContainer>
    </HeaderContainer>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
