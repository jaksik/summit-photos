import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./style.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: ``,
      marginBottom: `1.45rem`,
      zIndex: `1`,
      position: `fixed`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          {/* {siteTitle} */}
        </Link>
      </h1>
      {/* <Link to="/contact" className="nav-item">Contact</Link>
        <Link to="/about" className="nav-item">About</Link> */}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
