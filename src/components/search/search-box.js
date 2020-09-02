import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import SearchIcon from "../../images/search.svg"

export default connectSearchBox(
  ({ refine, currentRefinement, className, onFocus, handleClick }) => (
    <form className={className} onFocus={onFocus} onClick={handleClick}>
      <input
        className="SearchInput"
        type="text"
        placeholder="Search"
        aria-label="Search"
        onChange={e => refine(e.target.value)}
        value={currentRefinement}
        onFocus={onFocus}
      />
        <SearchIcon className={`SearchIcon`}/>
    </form>
  )
)