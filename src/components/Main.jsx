import React from 'react'
import ReactMarkdown from 'react-markdown'
import { H1, H2, H2Aside, H3, UlInline, LiInline, Link } from './Typography'
import data from '../data'

import objstr from 'obj-str'

const { intro, subHeading, works, projects, asides, skills, cloud } = data

import styles from './Main.block.css'
import typography from 'typography.block.css'

let subheading = objstr({
  [styles.subGridHeading]: true,
  [typography.h2]: true
})

export default () => [
  <main className={styles.main}>
    <header className={styles.header}>
      <H1>Johan Stenehall</H1>
      <p className={styles.subtitle}>
        A developer building things,{' '}
        <a href="http://google.com">currently for Volvo</a> creating new things.
      </p>
    </header>
    <article className={styles.article}>
      <ReactMarkdown source={intro} />

      {works.map((work, id) => (
        <section key={id}>
          <H2>
            <a className={typography.headerLink} href={work.companyUrl}>
              {work.company}
            </a>
          </H2>
          <time className={styles.time}>
            {work.startTime} — {work.endTime}
          </time>
          <ReactMarkdown source={work.content} />
        </section>
      ))}

      <section className={styles.subGrid}>
        <h2 className={subheading}>{subHeading}</h2>

        {projects.map((project, id) => (
          <div key={id}>
            <H3>
              <a className={typography.HeaderLink} href={project.url}>
                {project.name}
              </a>
            </H3>
            <ReactMarkdown source={project.content} />
          </div>
        ))}
      </section>

      <H2>Skill cloud</H2>
      <UlInline>
        {cloud.map((term, id) => <LiInline key={id}>{term}</LiInline>)}
      </UlInline>
    </article>
    <aside className={styles.aside}>
      <H2Aside>👋 Contact</H2Aside>
      <address className={styles.address}>
        <Link href="mailto://johan@stenehall.se">johan@stenehall.se</Link>
        <br />
        Stockholm, Sweden<br />
        <b>@stenehall</b>
      </address>

      {Object.keys(asides).map(title => [
        <H2Aside>{title}</H2Aside>,
        <UlInline>
          {asides[title].map((term, id) => (
            <LiInline key={id}>{term}</LiInline>
          ))}
        </UlInline>
      ])}

      {Object.keys(skills).map(title => [
        <H2Aside>{title}</H2Aside>,
        <ul className={styles.skills}>
          <li className={styles.skillsLi}>
            <span className={styles.skillsSpan100}>HTML(5)</span>
          </li>
          <li className={styles.skillsLi}>
            <span className={styles.skillsSpan95}>(S)CSS(3)</span>
          </li>
          <li className={styles.skillsLi}>
            <span className={styles.skillsSpan95}>Javascript</span>
          </li>
          <li className={styles.skillsLi}>
            <span className={styles.skillsSpan85}>TypeScript</span>
          </li>
          <li className={styles.skillsLi}>
            <span className={styles.skillsSpan95}>Node.js</span>
          </li>
          <li className={styles.skillsLi}>
            <span className={styles.skillsSpan90}>React</span>
          </li>
          <li className={styles.skillsLi}>
            <span className={styles.skillsSpan75}>VUE</span>
          </li>
          <li className={styles.skillsLi}>
            <span className={styles.skillsSpan75}>Angular</span>
          </li>
          <li className={styles.skillsLi}>
            <span className={styles.skillsSpan75}>Docker</span>
          </li>
          <li className={styles.skillsLi}>
            <span className={styles.skillsSpan95}>Wordpress</span>
          </li>
        </ul>
      ])}
    </aside>
  </main>,
  <footer className={styles.footer}>
    <p>
      <a href="https://github.com/stenehall/johan.is">
        Want a similare CV? Just fork it.
      </a>
    </p>
  </footer>
]
