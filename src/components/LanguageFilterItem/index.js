// Write your code here

import './index.css'

const LanguageFilterItem = props => {
  const {language, id, updateTheActiveTab, isActive} = props
  const selectedClassName = isActive ? 'active' : ''

  const onClickTheNewTab = () => {
    updateTheActiveTab(id)
  }

  return (
    <li className="language-button-item">
      <button
        onClick={onClickTheNewTab}
        className={`button ${selectedClassName}`}
        type="button"
        value={language}
      >
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
