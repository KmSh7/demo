'use client'
import React, { useState } from 'react'
import Button from '../_clientComponents/button/Button'
import {
  heroSectionStyle, curtainLeftStyle, curtainRightStyle, curtainFoldStyle,
  heroGlowOverlayStyle, heroBottomFadeStyle, heroBgEmojiStyle,
  heroEyebrowStyle, eyebrowLineStyle, heroTitleStyle, heroSubtitleStyle,
  heroMetaItemStyle, metaDividerStyle, heroViewerCountStyle,
  heroBtnPrimaryStyle, heroBtnSecondaryStyle,
  marqueeWrapStyle, marqueeInnerStyle, marqueeTitleStyle, marqueeDotStyle,
  statCellStyle, statValueStyle, statLabelStyle,
  roomsHeaderRowStyle, roomsEyebrowStyle, roomsLiveDotStyle, roomsHeadingStyle, viewAllLinkStyle,
  roomCardStyle, cardThumbStyle, cardThumbVignetteStyle, cardTagStyle,
  cardViewerBadgeStyle, cardViewerDotStyle, cardViewerCountStyle,
  cardBodyStyle, cardTitleStyle, cardGenreStyle, cardFooterRowStyle,
  cardHostAvatarStyle, cardHostNameStyle, cardRuntimeStyle, joinBtnStyle,
  ctaBannerStyle, ctaAccentLeftStyle, ctaAccentRightStyle, ctaBgEmojiStyle,
  ctaEyebrowStyle, ctaHeadingStyle, ctaBodyStyle,
} from './style/style'
import { featured, marqueeItems, pageCss, rooms, stats } from './utils/constants'
import { getHoverHandlers, useIsMobile } from './utils/helperFunctions'

function RoomCard({ room }: { room: typeof rooms[0] }) {
  const [hovered, setHovered] = useState(false)
  const [btnHovered, setBtnHovered] = useState(false)

  return (
    <div
      {...getHoverHandlers(setHovered)}
      style={{ ...roomCardStyle(hovered) }}
    >
      <div style={{ ...cardThumbStyle }}>
        {room.thumb}
        <div style={{ ...cardThumbVignetteStyle }} />
        <div style={{ ...cardTagStyle(room.tagColor) }}>{room.tag}</div>
        <div style={{ ...cardViewerBadgeStyle }}>
          <div style={{ ...cardViewerDotStyle }} />
          <span style={{ ...cardViewerCountStyle }}>{room.viewers.toLocaleString()}</span>
        </div>
      </div>

      <div style={{ ...cardBodyStyle }}>
        <div style={{ ...cardTitleStyle }}>{room.title}</div>
        <div style={{ ...cardGenreStyle }}>{room.genre} - {room.year}</div>

        <div style={{ ...cardFooterRowStyle }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <div style={{ ...cardHostAvatarStyle }}>{room.host[0].toUpperCase()}</div>
            <span style={{ ...cardHostNameStyle }}>{room.host}</span>
          </div>
          <span style={{ ...cardRuntimeStyle }}>{room.runtime}</span>
        </div>

        <Button
          {...getHoverHandlers(setBtnHovered)}
          style={{ ...joinBtnStyle(btnHovered) }}
        >
          Join Room -&gt;
        </Button>
      </div>
    </div>
  )
}

function HeroButton({
  children,
  primary,
  fullMobile,
}: {
  children: React.ReactNode
  primary: boolean
  fullMobile?: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <Button
      {...getHoverHandlers(setHovered)}
      className={fullMobile ? 'btn-full-mobile' : ''}
      style={{ ...(primary ? heroBtnPrimaryStyle(hovered) : heroBtnSecondaryStyle(hovered)) }}
    >
      {children}
    </Button>
  )
}

export default function PageClient() {
  const isMobile = useIsMobile()

  return (
    <>
      {/* <style dangerouslySetInnerHTML={{ __html: pageCss }} />

      <section style={{ ...heroSectionStyle(isMobile) }}>
        <div className="curtain-left" style={{ ...curtainLeftStyle }} />
        <div className="curtain-right" style={{ ...curtainRightStyle }} />

        {[20, 45, 70].map((x) => (
          <React.Fragment key={x}>
            <div className="curtain-fold" style={{ ...curtainFoldStyle('left', x) }} />
            <div className="curtain-fold" style={{ ...curtainFoldStyle('right', x) }} />
          </React.Fragment>
        ))}

        <div style={{ ...heroGlowOverlayStyle }} />
        <div style={{ ...heroBottomFadeStyle }} />
        <div style={{ ...heroBgEmojiStyle(isMobile) }}>🏜️</div>

        <div className="rr-wrap">
          <div className="hero-inner">
            <div className="fade-up" style={{ ...heroEyebrowStyle }}>
              <div style={{ ...eyebrowLineStyle }} />
              {isMobile ? 'Featured' : `Featured Tonight - ${featured.genre}`}
            </div>

            <h1 className="fade-up-1" style={{ ...heroTitleStyle(isMobile) }}>
              {featured.title}
            </h1>

            {!isMobile && (
              <p className="fade-up-2" style={{ ...heroSubtitleStyle }}>
                {featured.subtitle}
              </p>
            )}

            <div className="hero-meta fade-up-3">
              {[featured.year, featured.rating, featured.runtime].map((m) => (
                <span key={m} style={{ ...heroMetaItemStyle }}>{m}</span>
              ))}
              {!isMobile && (
                <>
                  <div style={{ ...metaDividerStyle }} />
                  <span style={{ ...heroViewerCountStyle }}>{featured.viewers} watching</span>
                </>
              )}
            </div>

            <div className="hero-buttons fade-up-4">
              <HeroButton primary fullMobile>
                Play {isMobile ? 'Join Room' : 'Join Featured Room'}
              </HeroButton>
              <HeroButton primary={false} fullMobile>
                {isMobile ? 'New Room' : 'Create New Room'}
              </HeroButton>
            </div>
          </div>
        </div>
      </section>

      <div style={{ ...marqueeWrapStyle }}>
        <div style={{ ...marqueeInnerStyle }}>
          {[...marqueeItems].map((item, i) => (
            <span key={i} style={{ ...marqueeTitleStyle }}>
              {item}
              <span style={{ ...marqueeDotStyle }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="rr-wrap" style={{ marginTop: '2rem' }}>
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} style={{ ...statCellStyle }}>
              <div style={{ ...statValueStyle(isMobile) }}>{stat.value}</div>
              <div style={{ ...statLabelStyle }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="rr-wrap" style={{ paddingTop: '2.5rem', paddingBottom: '1rem' }}>
        <div style={{ ...roomsHeaderRowStyle }}>
          <div>
            <div style={{ ...roomsEyebrowStyle }}>
              <div style={{ ...roomsLiveDotStyle }} />
              Live Now
            </div>
            <h2 style={{ ...roomsHeadingStyle(isMobile) }}>
              {isMobile ? 'Watch Rooms' : 'Active Watch Rooms'}
            </h2>
          </div>
          <a href="#" style={{ ...viewAllLinkStyle }}>
            {isMobile ? 'All ->' : 'View All Rooms ->'}
          </a>
        </div>

        <div className="rooms-grid">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </section>

      <section className="rr-wrap" style={{ paddingTop: '1rem', paddingBottom: '3rem' }}>
        <div style={{ ...ctaBannerStyle }}>
          <div style={{ ...ctaAccentLeftStyle }} />
          <div style={{ ...ctaAccentRightStyle }} />

          {!isMobile && <div style={{ ...ctaBgEmojiStyle }}>🎬</div>}

          <div className="cta-inner">
            <div style={{ position: 'relative' }}>
              <div style={{ ...ctaEyebrowStyle }}>Host Your Own</div>
              <h3 style={{ ...ctaHeadingStyle(isMobile) }}>
                {isMobile ? 'OPEN YOUR ROOM' : 'OPEN YOUR PRIVATE SCREENING ROOM'}
              </h3>
              <p style={{ ...ctaBodyStyle(isMobile) }}>
                {isMobile
                  ? 'Invite friends. Watch in sync.'
                  : 'Invite up to 50 friends. Sync playback perfectly. Chat in real time.'}
              </p>
            </div>

            <div className="cta-buttons">
              <HeroButton primary>Create Free Room</HeroButton>
              <HeroButton primary={false}>Learn More</HeroButton>
            </div>
          </div>
        </div>
      </section> */}
    </>
  )
}
