import Chevron from '../atoms/ChevronUp';
import PropTypes from 'prop-types';

const Dropdown = ({title, content, id}) => {

  return (
    <div className='dropdown_wrapper'>
      <div className="dropdown_container">
        <div className="dropdown_title">{title}</div>
        <div className="dropdown_button"><Chevron /></div>
      </div>
      <div className="dropdown_contents_container">
        <div className='dropdown_contents_text'>
          {typeof content === 'string' ? content : content.map((el, i) => (<p key={i + id}>{el}</p>))}
        </div>
      </div>
    </div>
  )
}


Dropdown.propTypes = {
  title: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  id: PropTypes.string
}
export default Dropdown;