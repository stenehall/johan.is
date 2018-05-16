import ReactMarkdown from 'react-markdown'

export default ({ id, name, url, content }) => (
  <div key={id}>
    <h3>
      <a href={url}>{name}</a>
    </h3>
    <ReactMarkdown source={content} />
  </div>
)
