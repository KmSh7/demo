'use client'
import React, { useState } from 'react'
import Button from '../../../../_clientComponents/button/Button'
import {
  headerWrapperStyle,
  filmStripStyle,
  logoWrapStyle,
  logoTextStyle,
  logoAccentStyle,
  actionsRowStyle,
  signInBtnStyle,
  hostBtnStyle,
  avatarStyle,
  mobileDrawerStyle,
  mobileNavLinkStyle,
  navLinkStyle,
} from '../style/style'
import {
  headerAvatarLabel,
  headerCss,
  headerMenuAriaLabel,
  headerNavItems,
} from '../utils/constants'
import { getToggledMenuState } from '../utils/helperFunctions'

function NavLink({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href="#"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ ...navLinkStyle(hovered) }}
    >
      {label}
    </a>
  )
}

export default function HeaderClient() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: headerCss }} />

      <header style={{ ...headerWrapperStyle }}>
        <div style={{ ...filmStripStyle }} />

        <div className="hdr-inner">
          <div style={{ ...logoWrapStyle }}>
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
              <circle cx="14" cy="14" r="13" stroke="#c9a84c" strokeWidth="1.2" opacity="0.7" />
              <path d="M10 10 L10 18 L20 14 Z" fill="#c9a84c" opacity="0.9" />
            </svg>
            <span style={{ ...logoTextStyle }}>
              REEL<span style={{ ...logoAccentStyle }}>ROOM</span>
            </span>
          </div>

          <nav className="hdr-nav">
            {headerNavItems.map((item) => (
              <NavLink key={item} label={item} />
            ))}
          </nav>

          <div style={{ ...actionsRowStyle }}>
            <Button className="hdr-signin" style={{ ...signInBtnStyle }}>
              Sign In
            </Button>
          </div>
        </div>

        {menuOpen && (
          <div style={{ ...mobileDrawerStyle }}>
            {headerNavItems.map((item) => (
              <a key={item} href="#" style={{ ...mobileNavLinkStyle }}>
                {item}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  )
}
