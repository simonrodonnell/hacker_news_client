import React from 'react'
import StoryList from '../components/StoryList'

class StoryContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      storyURLs: [],
      stories: []
    }
  }

  componentDidMount() {
    const url = "https://hacker-news.firebaseio.com/v0/topstories.json"
    fetch(url)
    .then(res => res.json())
    .then(idList => idList.map((storyID) => {
      return `https://hacker-news.firebaseio.com/v0/item/${storyID}.json`
    }))
    .then(urlList => Promise.all(
      urlList.map((url) => {
        return fetch(url)
        .then(response => response.json())
      })
    ))
    .then(response => this.setState({stories: response}))
    .catch(err => console.error);
    }

  render() {
    return(
      <div>
      <StoryList stories={this.state.stories} />
      </div>
    )
  }

}

export default StoryContainer
