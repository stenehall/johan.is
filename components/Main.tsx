import ReactMarkdown from 'react-markdown'
import Header from '../components/Header'
import Work from './Work'
import Project from './Project'
import data from '../data'

const { intro, subHeading, works, projects, asides, skills, cloud } = data

export default () => [
  <main>
    <Header author="Johan Stenehall" />
    <article>
      <ReactMarkdown source={intro} />

      {works.map((work, id) => <Work id={id} {...work} />)}

      <section className="sub-grid">
        <h2>{subHeading}</h2>

        {projects.map((project, id) => <Project id={id} {...project} />)}
      </section>

      <h2>Skill cloud</h2>
      <ul className="inline cloud">
        {cloud.map((term, id) => <li key={id}>{term}</li>)}
      </ul>
    </article>
    <aside>
      <h2>👋 Contact</h2>
      <address>
        <a href="mailto://johan@stenehall.se">johan@stenehall.se</a>
        <br />
        Stockholm, Sweden<br />
        <b>@stenehall</b>
      </address>

      {Object.keys(asides).map(title => [
        <h2>{title}</h2>,
        <ul className="inline">
          {asides[title].map((item, id) => <li key={id}>{item}</li>)}
        </ul>
      ])}

      {Object.keys(skills).map(title => [
        <h2>{title}</h2>,
        <ul className="skills">
          {skills[title].map((item, id) => (
            <li key={id}>
              <span style={{ width: `${item[1]}%` }}>{item[0]}</span>
            </li>
          ))}
        </ul>
      ])}
    </aside>
  </main>
]
