import React from 'react'
import Link from 'next/link'

import { config } from '../config/config'

const AppIcon = () => <Link href='/'>
  <a className='app-icon' title={config.appName}>
    <img src='/icon.png' alt={config.appName} />
    <style jsx>{`
      img {
        position: absolute;
        left: 10px;
        top: 10px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
    `}</style>
  </a>
</Link>

export default ({ title = config.appName, children }) => <nav
  className='header color-header-bg color-background-fg'
>
  <AppIcon />
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
