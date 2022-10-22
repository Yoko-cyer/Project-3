import React from 'react'

const costomStyle = {
  backgroundColor: "#ff7f50",
  color: "#ffffff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}
const contributer1 = "Alice";
const contributer2= "Yoko";
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    // fix to make the items vertical
    <div style={costomStyle}>
      <p>Created by {`${contributer1} and ${contributer2}`}.</p>
      <p>
        Copyright &copy; {currentYear} 
      </p>
    </div>
  )
}

export default Footer