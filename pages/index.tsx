import Header from '../components/Header'
import Work from '../components/Work'
import Project from '../components/Project'

const works = [
  {
    company: 'Volvo Car Mobility',
    companyUrl: '',
    startTime: '2018-03-08',
    endTime: '',
    content: `
One morning, when Gregor Samsa woke from troubled dreams, he found
himself transformed in his bed into a horrible vermin. 
 
He lay on his
armour-like back, and if he lifted his head a little he could see his
brown belly, slightly domed and divided by arches into stiff sections.
The bedding was hardly able to cover it and seemed ready to slide off
any moment.
`
  },
  {
    company: 'iZettle',
    companyUrl: 'https://izettle.com',
    startTime: '2016-07-04',
    endTime: '2018-03-07',
    content: `
For many years iZettle have been pionering payments for small
buisnesses.

Working as a web developer I get to code on iZettle Portal as well as
our front end for our new Invoice service and of course our main site.`
  },
  {
    company: 'Narrative',
    companyUrl: '',
    startTime: '2014-07-04',
    endTime: '2016-07-03',
    content: `
This Linköping based startup were once the biggest thing on
Kickstarter.

Working as the lead (and in the end only) front-end developer. I was
part of creating all web content. From the Narrative web app, to the
main site, to the blog and support pages and much more.`
  }
]

const projects = [
  {
    name: '🌯 Life Hours',
    url: '#',
    content: `I simple and clean way to keep track of your work hours.`
  },
  {
    name: '🥠 Name filtering',
    url: '#',
    content: `Find the name you want for you kid.`
  },
  {
    name: '🍪 Blog',
    url: '#',
    content: `I like the idea of blogging, I just don't do it very often.`
  },
  {
    name: '🍫 Fluid photogrid',
    url: 'https://stenehall.github.io/photo-grid/',
    content: `Create fluid photo grids like flickr, with less javascript and proper scaling.`
  }
]

const core = [
  'HTML(5)',
  'CSS(3)',
  'Javascript',
  'TypeScript',
  'Node.js',
  'React',
  'Vue',
  'Angular',
  'Wordpress',
  'Drupal',
  'Ruby',
  'RoR',
  'Docker'
]

const good = [
  'Modern ECMAScript',
  'CSS3 without old IE',
  'TypeScript',
  'Functional programming',
  'Reactive programming'
]

const bad = ['.NET', '&lt;IE10', 'SOAP']

const life = ['Father', 'Boyfriend', 'Coder', 'Coffee drinker', 'climber']

export default () => [
  <main>
    <Header author="Johan Stenehall" />
    <div className="main">
      <p>
        A developer building things, <a href="#">currently for Volvo</a>{' '}
        creating new things.
      </p>
      <p>
        These are the latest employees I've had, along with what I like to work
        with. And what I'd prefer not to work with. 🍥
      </p>

      {works.map((work, id) => <Work key={id} {...work} />)}

      <section className="sub-grid">
        <h2>Side projects</h2>

        {projects.map((project, id) => <Project key={id} {...project} />)}
      </section>
    </div>
    <aside>
      <h2>👋 Contact</h2>
      <address>
        <a href="mailto://johan@stenehall.se">johan@stenehall.se</a>
        <br />
        <b>@stenehall</b>
      </address>

      <h2>🙈 Core skills</h2>
      <ul className="inline">{core.map(item => <li>{item}</li>)}</ul>

      <h2>😍 The good</h2>
      <ul className="inline">{good.map(item => <li>{item}</li>)}</ul>

      <h2>💩 The bad</h2>
      <ul className="inline">{bad.map(item => <li>{item}</li>)}</ul>

      <h2>🧗 The life</h2>
      <ul className="inline">{life.map(item => <li>{item}</li>)}</ul>
    </aside>
  </main>,
  <footer>
    <p>
      <a href="mailto://johan@stenehall.se">johan@stenehall.se</a>
      <br />
    </p>
  </footer>
]
