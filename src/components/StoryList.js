import React from 'react'
import StoryItem from './StoryItem'

const StoryList = (props) => {

  const storyNodes = props.stories.map((story, index) => {
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
