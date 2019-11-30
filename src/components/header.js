import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import cartImg from "../images/cart.png"
import "./style.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: ``,
      marginBottom: `1.45rem`,
      zIndex: `1`,
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
          Summit
        </Link>
      </h1>
      <Link to="/contact" className="nav-item">Contact</Link>
        <Link to="/cart" className="nav-item"><img src={cartImg} width={35} /></Link>
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
