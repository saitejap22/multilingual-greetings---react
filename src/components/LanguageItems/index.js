import './index.css'

const LanguageItems = props => {
  const {languageDetails, isActive, setActiveLanguage} = props
  const {id, buttonText} = languageDetails

  const buttonClass = isActive ? 'lang-button active-btn' : 'lang-button'

  const onClickLangItem = () => {
    setActiveLanguage(id)
  }

  return (
    <>
      <li className="list-items">
        <button type="button" onClick={onClickLangItem} className={buttonClass}>
          {buttonText}
        </button>
      </li>
    </>
  )
}

export default LanguageItems
