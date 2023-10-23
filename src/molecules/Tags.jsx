import PropTypes from 'prop-types';

const Tags = ({ tags }) => (
  <div className="tags_container">
    {tags.map((tag, index) => (
      <div key={`tag-${index}`} className="tags_tag_container">
        <h3 className="tags_tag_text">{tag}</h3>
      </div>
    ))}
  </div>
)

Tags.propTypes = { tags: PropTypes.array.isRequired }

export default Tags