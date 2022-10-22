import React from 'react'
import { Link } from 'react-router-dom'

const costomStyle = {
  backgroundColor: "#ff7f50",
  color: "#ffffff",
  padding: "10px"
}

const Header = () => {
  return (
    <div style={costomStyle}>
      <Link component={Link} to="/">Kiddos</Link>
    </div>
  )
}

export default Header