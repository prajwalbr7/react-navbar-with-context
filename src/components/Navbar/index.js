// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const LightDarkImg1 = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const LightDarkImg2 = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const bgColorShift = isDarkTheme ? 'bg-color-true' : ''
      const headingColorShift = isDarkTheme
        ? 'color-shift-false'
        : 'color-shift-true'
      const ChangePattern = () => {
        toggleTheme()
      }
      return (
        <div className={`container-main ${bgColorShift}`}>
          <img src={LightDarkImg1} alt="website logo" className="img-sizing" />
          <ul className="ul-style">
            <Link to="/" className="link-style">
              <li className={`list-heading-style ${headingColorShift}`}>
                Home
              </li>
            </Link>
            <Link to="/about" className="link-style">
              <li className={`list-heading-style ${headingColorShift}`}>
                About
              </li>
            </Link>
          </ul>
          <button
            className="button-style"
            type="button"
            onClick={ChangePattern}
            data-testid="theme"
          >
            <img src={LightDarkImg2} alt="theme" className="img-sizing" />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
