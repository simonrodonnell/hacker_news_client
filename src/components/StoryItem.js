import React from 'react'

const StoryItem = (props) => {

return(

<div>

<h3><a href={props.story.url} target="_blank">{props.story.title}</a></h3>


</div>

)

}

export default StoryItem
