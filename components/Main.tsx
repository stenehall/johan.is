import Header from '../components/Header'
import Work from './Work'
import Project from './Project'
import { works, projects, core, good, bad, life, skills } from '../data'

export default () => [
  <main>
    <Header author="Johan Stenehall" />
    <article>
      <p>
        These are the latest employees I've had, along with what I like to work
        with. And what I'd prefer not to work with. 🍥
      </p>

      {works.map((work, id) => <Work id={id} {...work} />)}

      <section className="sub-grid">
        <h2>Side projects</h2>

        {projects.map((project, id) => <Project id={id} {...project} />)}
      </section>
    </article>
    <aside>
      <h2>👋 Contact</h2>
      <address>
        <a href="mailto://johan@stenehall.se">johan@stenehall.se</a>
        <br />
        <b>@stenehall</b>
      </address>

      <h2>🙈 Core skills</h2>
      <ul className="inline">
        {core.map((item, id) => <li key={id}>{item}</li>)}
      </ul>

      <h2>😍 The good</h2>
      <ul className="inline">
        {good.map((item, id) => <li key={id}>{item}</li>)}
      </ul>

      <h2>💩 The bad</h2>
      <ul className="inline">
        {bad.map((item, id) => <li key={id}>{item}</li>)}
      </ul>

      <h2>🧗 The life</h2>
      <ul className="inline">
        {life.map((item, id) => <li key={id}>{item}</li>)}
      </ul>

      <h2>Skills</h2>
      <ul className="skills">
        {skills.map((item, id) => (
          <li key={id}>
            {item[0]}
            <span style={{ width: `${item[1]}px` }} />
          </li>
        ))}
      </ul>
    </aside>
  </main>
]
