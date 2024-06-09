import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    activeTab: languageFiltersData[0].id,
    repositories: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTheReposOfActiveTab()
  }

  updateTheActiveTab = id => {
    this.setState({activeTab: id, isLoading: true}, this.getTheReposOfActiveTab)
  }

  updateTheRepositories = repositories => {
    const updatedRepos = repositories.map(eachRepo => ({
      name: eachRepo.name,
      id: eachRepo.id,
      issuesCount: eachRepo.issues_count,
      forksCount: eachRepo.forks_count,
      starsCount: eachRepo.stars_count,
      avatarUrl: eachRepo.avatar_url,
    }))
    this.setState({repositories: updatedRepos, isLoading: false})
  }

  getTheReposOfActiveTab = async () => {
    const {activeTab} = this.state
    const apiRequestUrl = `https://apis.ccbp.in/popular-repos?language=${activeTab}`
    const response = await fetch(apiRequestUrl)
    const data = await response.json()
    this.updateTheRepositories(data.popular_repos)
  }

  renderLoader = () => (
    <div className="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderRepositoryItem = () => {
    const {repositories} = this.state
    return (
      <ul className="repositories-container">
        {repositories.map(eachRepo => (
          <RepositoryItem key={eachRepo.id} repository={eachRepo} />
        ))}
      </ul>
    )
  }

  render() {
    const {activeTab, isLoading} = this.state
    console.log(this.state)

    return (
      <div>
        <h1 className="popular-heading">Popular</h1>
        <ul className="language-btn-container">
          {languageFiltersData.map(eachLanguage => {
            const {id, language} = eachLanguage

            return (
              <LanguageFilterItem
                key={language}
                id={id}
                language={language}
                getTheReposOfActiveTab={this.getTheReposOfActiveTab}
                updateTheActiveTab={this.updateTheActiveTab}
                isActive={activeTab === id}
              />
            )
          })}
        </ul>

        {isLoading ? this.renderLoader() : this.renderRepositoryItem()}
      </div>
    )
  }
}

export default GithubPopularRepos
