const ReactMarkdown = require('react-markdown')

export default ({ name, url, content }) => (
  <div>
    <h3>
      <a href={url}>{name}</a>
    </h3>
    <ReactMarkdown source={content} />
  </div>
)
