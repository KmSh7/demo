'use client'
import React, { useState } from 'react'
import Button from '../../../../_clientComponents/button/Button'
import {
  navbarWrapperStyle,
  liveDotStyle,
  liveLabelStyle,
  liveIndicatorStyle,
  categoryBtnStyle,
  searchBoxStyle,
  searchPlaceholderStyle,
  searchWrapStyle,
} from '../style/style'
import { categories, defaultActiveCategory, navbarCss } from '../utils/constants'
import { getSetActiveHandler } from '../utils/helperFunctions'
import { twSearchBoxStyle } from '../style/twStyle'

export default function NavbarClient() {
  const [active, setActive] = useState(defaultActiveCategory)

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: navbarCss }} />

      <div style={{ ...navbarWrapperStyle }}>
        <div className="navbar-scroll">

          {categories.map((cat) => (
            <Button
              key={cat}
              onClickFunction={getSetActiveHandler(setActive, cat)}
              style={{ ...categoryBtnStyle(active === cat) }}
            >
              {cat}
            </Button>
          ))}

          <div className="nb-search" style={{ ...searchWrapStyle }}>
            <div style={{ ...searchBoxStyle }} className='bg-blue-400'>
              <svg width="15" height="15" viewBox="0 0 12 12" fill="none">
                <circle cx="5" cy="5" r="4" stroke="rgba(201,168,76,0.5)" strokeWidth="1.2" />
                <path d="M8 8 L11 11" stroke="rgba(201,168,76,0.5)" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <div style={{ ...searchPlaceholderStyle }} > <input className={twSearchBoxStyle} type="text" placeholder='Search...'/> </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
