// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const imgShift = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const ContainerBgColor = isDarkTheme ? 'color-bg-black ' : ''
      const headingColorShift = isDarkTheme
        ? 'color-shift-false'
        : 'color-shift-true'

      return (
        <>
          <Navbar />
          <div className={`container-home ${ContainerBgColor}`}>
            <img src={imgShift} alt="home" className="home-img-sizing" />
            <h1 className={`heading-style-home ${headingColorShift}`}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
