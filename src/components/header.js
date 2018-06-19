import React from 'react';
const Header = (title,content) => {
  return(
    <div className="header">
      <h1>{title}</h1>
      <p>{content}</p>
      <div className="header-skew"></div>
      <div className="header-skew-border"></div>
    </div>
  );
}
export default Header;
