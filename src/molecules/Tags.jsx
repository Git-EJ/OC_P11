import PropTypes from 'prop-types';

const Tags = ({ tags, id }) => (
  <div className="tags_container">
    {tags.map((tag, index) => (
      <div key={id + index} className="tags_tag_container">
        <div className="tags_tag_text">{tag}</div>
      </div>
    ))}
  </div>
)

Tags.propTypes = { tags: PropTypes.array, id: PropTypes.string}

export default Tags