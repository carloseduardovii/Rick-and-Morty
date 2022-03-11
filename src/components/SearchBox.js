import React from 'react'

const SearchBox = () => {
  return (
    <div>
      <form action="">
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
        </div>
      </form>
    </div>
  )
}

export default SearchBox;