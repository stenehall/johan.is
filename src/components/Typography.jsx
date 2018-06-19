import React from 'react'

import typography from './Typography.block.css'

export const H1 = ({ children }) => (
  <h1 className={typography.h1}>{children}</h1>
)

export const H2 = ({ children }) => (
  <h2 className={typography.h2}>{children}</h2>
)

export const H3 = ({ children }) => (
  <h3 className={typography.h3}>{children}</h3>
)

export const H2Aside = ({ children }) => (
  <h2 className={typography.H2Aside}>{children}</h2>
)

export const UlInline = ({ children }) => (
  <ul className={typography.UlInline}>{children}</ul>
)

export const LiInline = ({ children }) => (
  <li className={typography.LiInline}>{children}</li>
)

export const Link = ({ href, children }) => (
  <a className={typography.A} href={href}>
    {children}
  </a>
)
