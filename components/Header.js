import React from 'react'

export default ({ title, children }) => <nav>
  {title}
  {children}
  <style jsx>{`
    nav {
      position: fixed;
      z-index: 1000;
      width: 100%;
      left: 0;
      top: 0;
      height: 50px;
      line-height: 48px;
      background-color: #663399;
      color: #FFFFFF;
      font-weight: normal;
      text-align: center;
    }
  `}</style>
</nav>
