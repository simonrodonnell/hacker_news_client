import React from 'react'

const StorySearch = (props) => {


  return(

    <form>
    <input
    type="text"
    placeholder="Search for story"
    onKeyUp={props.handleInput}/>
    </form>

  )
}


export default StorySearch
