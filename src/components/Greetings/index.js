import {Component} from 'react'
import LanguageItems from '../LanguageItems'
import './index.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Greetings extends Component {
  state = {
    LanguageText: languageGreetingsList[0].id,
  }

  setActiveLanguage = id => {
    this.setState({LanguageText: id})
  }

  render() {
    const {LanguageText} = this.state
    const imageList = languageGreetingsList.filter(
      each => each.id === LanguageText,
    )
    const {imageAltText, imageUrl} = imageList[0]
    return (
      <div className="container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="language-list">
          {languageGreetingsList.map(eachLanguage => (
            <LanguageItems
              key={eachLanguage.id}
              languageDetails={eachLanguage}
              isActive={LanguageText === eachLanguage.id}
              setActiveLanguage={this.setActiveLanguage}
            />
          ))}
        </ul>
        <img src={imageUrl} alt={imageAltText} className="image" />
      </div>
    )
  }
}
export default Greetings
