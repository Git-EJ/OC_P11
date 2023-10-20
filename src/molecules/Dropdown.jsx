import { useState } from 'react';
import ChevronUp from '../atoms/ChevronUp';
import ChevronDown from '../atoms/ChevronDown';
import PropTypes from 'prop-types';

const Dropdown = ({title, content, id}) => {

  const [isOpen, setIsOpen] = useState(false)
  const click = () => isOpen ? setIsOpen(false) : setIsOpen(true)

  return (
    <div className='dropdown_wrapper'>

      <div className="dropdown_container">
        <div className="dropdown_title">{title}</div>
        <div className="dropdown_button" onClick={() => click()}>
          { isOpen ? <ChevronUp /> : <ChevronDown /> }
        </div>
      </div>

      {!isOpen ? null :
        <div className="dropdown_contents_container">
          <div className='dropdown_contents_text'>
            {typeof content === 'string' ? content : content.map((el, i) => (<p key={i + id}>{el}</p>))}
          </div>
        </div>
      }

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