import React from 'react'

export default ({ title, children }) => <nav
  className='color-action-secondary-bg color-background-fg'
>
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
      line-height: 50px;
      font-weight: normal;
      text-align: center;
    }
  `}</style>
</nav>
