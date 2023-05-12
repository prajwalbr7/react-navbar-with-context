// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const ContainerBgColor = isDarkTheme ? 'color-bg-black ' : ''
      const headingColorShift = isDarkTheme
        ? 'color-shift-false'
        : 'color-shift-true'

      return (
        <>
          <Navbar />
          <div className={`container-home ${ContainerBgColor}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="notFound-img-sizing"
            />
            <h1 className={`heading-style-home ${headingColorShift}`}>
              Lost Your Way?
            </h1>
            <p className={`${headingColorShift}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
