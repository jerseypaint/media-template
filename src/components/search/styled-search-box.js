import styled, { css } from "styled-components"
import SearchBox from "./search-box"

const open = css`
  width: 22.5rem;
  background: ${({ theme }) => theme.background};
  cursor: text;
`

const closed = css`
  min-width: 0;
  width: 0;
  background: transparent;
  cursor: pointer;
  border: none;
`

export default styled(SearchBox)`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin-bottom: 0;
  cursor:${({ hasFocus }) => (hasFocus ? "auto" : "pointer")};

  input {
    outline: none;
    border: none;
    border-bottom: 2px solid #000;
    font-size: 1em;
    transition: 100ms;
    border-radius: 0;
    color: ${({ theme }) => theme.foreground};
    transition: width 400ms ease;

    ::placeholder {
      color: ${({ theme }) => theme.faded};
    }
    ${({ hasFocus }) => (hasFocus ? open : closed)}
  }

  svg {
    width: 1em;
    margin: 0.3em;
    color: ${({ theme }) => theme.foreground};
    pointer-events: none;
    cursor: pointer;
  }
`