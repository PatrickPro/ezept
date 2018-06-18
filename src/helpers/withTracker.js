import createBrowserHistory from 'history/createBrowserHistory'

function initialize () {
  const pageChange = (location, action) => {
    if ((location && location.keepPosition === true) || (location && location.state && location.state.keepPosition === true)) {
      // stay
    } else if (location.hash !== '') {
      if (location.hash !== '' && document.querySelector(location.hash)) {
        let scroll = () => document.querySelector(location.hash).scrollIntoView({behavior: 'smooth'})
        setTimeout(scroll, 60)
      }
    } else {
      try {
        window.scroll({top: 0, left: 0})
      } catch (err) {}
    }

  }

  const history = createBrowserHistory()
  history.listen(pageChange)

  return history
}

export default initialize()
