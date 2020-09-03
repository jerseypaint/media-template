import styled, { css } from "styled-components"
import SearchResult from "./search-result"

const Popover = css`
  max-height: 70vh;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  z-index: 2;
  left: 0;
  top: 34px;
  margin-top: 0.5em;
  width: 100%;
  padding: 1em;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background: ${({ theme }) => theme.background};

`

export default styled(SearchResult)`
  display: block;
  transform: ${props => (props.show ? `translateX(0)` : `translateX(100%)`)};
  transition: transform 500ms ease;
  ${Popover}

  .HitCount {
    display: flex;
    justify-content: flex-end;
  }

  .Hits {
    margin: 0 auto;
    max-width: 50rem;

    ul {
      list-style: none;
      margin-left: 0;
      text-align: left;
      font-size: 1rem;
    }

    li.ais-Hits-item {
      margin-bottom: 1rem;
      padding-bottom: 1rem;
      border-bottom: solid 1px #e7e7e7;

      a {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
            text-decoration-color: #DB162F;
        }

        h4 {
          margin-bottom: 0.2em;
          font-size: 1.666rem;
        }
      }
    }

    mark {
      background-color: #e7e7e7;
    }
  }

  .ais-PoweredBy {
    display: flex;
    justify-content: flex-end;
    font-size: 80%;

    svg {
      width: 70px;
    }
  }
`