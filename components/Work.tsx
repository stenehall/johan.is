import ReactMarkdown from 'react-markdown'

export default ({ id, company, companyUrl, startTime, endTime, content }) => (
  <section key={id}>
    <h2>
      <a href={companyUrl}>{company}</a>
    </h2>
    <time>
      {startTime} — {endTime}
    </time>
    <ReactMarkdown source={content} />
  </section>
)
