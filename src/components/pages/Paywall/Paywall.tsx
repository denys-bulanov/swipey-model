'use client'

import React, { useState } from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import Plan from '../../Plan/Plan'
import PreviewClub from '../../PreviewClub/PreviewClub'
import ContentInside from '../../ContentInside/ContentInside'
import Faq from '../../Faq/Faq'

const sections = [Plan, PreviewClub, ContentInside, Faq]

const Paywall = () => {
  return (
    <ReactFullpage
      scrollingSpeed={800}
      credits={{ enabled: false }}
      render={({ fullpageApi }) => (
        <ReactFullpage.Wrapper>
          {sections.map((SectionComponent, i) => {
            const isPreviewClub = SectionComponent === PreviewClub
            return (
              <div key={i} className='section relative w-screen h-screen'>
                {isPreviewClub ? (
                  <video
                    src={'https://d12kahz818c96x.cloudfront.net/paywall/paywall-model-sfw.mp4'}
                    className='brightness-50 absolute  w-full h-full object-cover filter blur-xl scale-110 -z-20'
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <div className='absolute inset-0 -z-10 bg-[#271A2B]'>
                    <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(39,26,43,0)_0%,rgba(0,0,0,0.7)_100%)]' />
                  </div>
                )}
                <SectionComponent fullpageApi={fullpageApi} />
              </div>
            )
          })}
        </ReactFullpage.Wrapper>
      )}
    />
  )
}

export default Paywall
