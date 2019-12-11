import React from 'react'

const StoryItem = (props) => {

return(

<div>

<h3><a href={props.story.url} rel="noopener noreferrer" target="_blank">{props.story.title}</a></h3>
<hr />

</div>

)

}

export default StoryItem
