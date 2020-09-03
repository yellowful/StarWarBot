import React from 'react'

//把searchChange function傳下來了，onChange代表search box如有改變，就會render()。
const SearchBox = ({searchChange}) => {
    return(
        <div>
            <input
            className = 'pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='search robots' 
            onChange= { searchChange }
            />
        </div>
        
    )
}

export default SearchBox;