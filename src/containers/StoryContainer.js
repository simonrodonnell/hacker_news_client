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
    this.findStories = this.findStories.bind(this)
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

    findStories(event){
      let storySearch = event.target.value;
      const matchingStories = [];
      for(let story of this.state.stories){
        if(story.title.includes(storySearch)){
          matchingStories.push(story);
        }
      }
      this.setState({foundStories: matchingStories})
    }

  render() {
    return(
      <div>
      <h1>HACKER NEWS</h1>
      <hr />
      <StorySearch handleInput={this.findStories}/>
      <hr />
      <StoryList stories={this.state.stories} foundStories={this.state.foundStories}/>
      </div>
    )
  }

}

export default StoryContainer
