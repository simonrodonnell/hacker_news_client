import React from 'react'
import StoryList from '../components/StoryList'
import StorySearch from '../components/StorySearch'

class StoryContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stories: [],
      foundStories: []
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
      <h1>HACKER NEWS</h1>
      <hr />
      <StorySearch />
      <hr />
      <StoryList stories={this.state.stories} foundStories={this.state.foundStories}/>
      </div>
    )
  }

}

export default StoryContainer
