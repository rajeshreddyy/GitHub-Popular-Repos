// Write your code here

import './index.css'

const starsImg = 'https://assets.ccbp.in/frontend/react-js/stars-count-img.png'
const forksImg = 'https://assets.ccbp.in/frontend/react-js/forks-count-img.png'
const issuesImg =
  'https://assets.ccbp.in/frontend/react-js/issues-count-img.png'

const RepositoryItem = props => {
  const {repository} = props
  const {name, avatarUrl, forksCount, issuesCount, starsCount} = repository
  console.log(props)

  return (
    <li className="repository-item-container">
      <img alt="avatar" src={avatarUrl} className="avatar-img" />
      <h1 className="repo-name"> {`${name}`}</h1>
      <div className="stars-forks-issues-container">
        <div className="stars-container">
          <img src={starsImg} alt="stars" className="stars-img" />
          <p className="stars-count">{`${starsCount} stars`}</p>
        </div>
        <div className="forks-container">
          <img src={forksImg} alt="forks" className="forks-img" />
          <p className="forks-count">{`${forksCount} forks`}</p>
        </div>
        <div className="issues-container">
          <img src={issuesImg} alt="open issues" className="issues-img" />
          <p className="issues-count">{`${issuesCount} open issues`}</p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
