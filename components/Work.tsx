const ReactMarkdown = require('react-markdown')

export default ({ company, companyUrl, startTime, endTime, content }) => (
  <section>
    <h2>
      <a href={companyUrl}>{company}</a>
    </h2>
    <time>
      {startTime} — {endTime}
    </time>
    <ReactMarkdown source={content} />
  </section>
)
