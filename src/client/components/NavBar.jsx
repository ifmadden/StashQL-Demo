import React from 'react';

const navLinksArr = ['Logo', 'Documentation', 'Examples', 'GitHub Links'];

function NavBar() {
  const navlinks = navLinksArr.map((link, index) => {
    const newLink = (
      <div className="navLink" id={index}>
        {' '}
        {link}
        {' '}
      </div>
    );
    return newLink;
  });
  return (
    <div className="navContainer">
      {navlinks}
    </div>
  );
}

export default NavBar;
