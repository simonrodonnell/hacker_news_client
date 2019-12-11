import React from 'react'
import StoryItem from './StoryItem'

const StoryList = (props) => {

  if (props.stories == null || props.stories.length === 0){
    return <p>Loading ...</p>;
  }

  let activeStories = [];
  if (props.foundStories.length > 0) {
    activeStories = props.foundStories
  } else {
    activeStories = props.stories
  }
  
  const storyNodes = activeStories.map((story, index) => {
    return(
      <StoryItem
      story={story}
      key={index} />
    )
  })

  return(
    <ul>
    {storyNodes}
    </ul>
  )

}

export default StoryList
