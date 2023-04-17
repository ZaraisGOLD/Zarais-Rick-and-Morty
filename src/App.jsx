import { useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomLocation from './utils/getRandomLocation'
import MainContent from './components/MainContent'

function App() {

  const [inputValue, setInputValue] = useState(getRandomLocation())

  const msgError = 'Hey! You must provide an id from 1 to 126'

  const url = `https://rickandmortyapi.com/api/location/${inputValue || msgError}`
  const [location, hasError] = useFetch(url)

  const inputLocation = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    // e.target.firstChild.value
    setInputValue(inputLocation.current.value)
  }

  return (
    <div className="app">
      <header className='app__header'>
        <div className='app__header--background'>
          <div className='app__header--img'></div>
          <div className='app__header--title'></div>
        </div>
      </header>
      <form className='app__form' onSubmit={handleSubmit}>
        <input className='app__input' ref={inputLocation} type="text" placeholder='Enter a number from 1 to 126' />
        <button className='app__btn' >Search</button>
      </form>
      {
        hasError
          ? <h2>{msgError}</h2>
          : <MainContent location={location} />
      }
    </div>

  )
}

export default App
