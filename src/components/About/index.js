// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const imgShift = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const ContainerBgColor = isDarkTheme ? 'color-bg-black ' : ''
      const headingColorShift = isDarkTheme
        ? 'color-shift-false'
        : 'color-shift-true'

      return (
        <>
          <Navbar />
          <div className={`container-home ${ContainerBgColor}`}>
            <img src={imgShift} alt="about" className="home-img-sizing" />
            <h1 className={`heading-style-home ${headingColorShift}`}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
