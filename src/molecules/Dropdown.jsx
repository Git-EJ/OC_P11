import { useState } from 'react';
import ChevronUp from '../atoms/ChevronUp';
import ChevronDown from '../atoms/ChevronDown';
import PropTypes from 'prop-types';

const Dropdown = ({title, content, id, className}) => {

  const [isOpen, setIsOpen] = useState(false)
  const click = () => isOpen ? setIsOpen(false) : setIsOpen(true)

  return (
    <div className={className ? className : 'dropdown_wrapper'}>

      <div className="dropdown_container">
        <h4 className="dropdown_title">{title}</h4>
        <div className="dropdown_button" onClick={() => click()}>
          { isOpen ? <ChevronUp /> : <ChevronDown /> }
        </div>
      </div>
      
      {/* TODO : suppression des accents premiere lettre pour le content équipement*/}
      {!isOpen ? null :
        <div className='dropdown_contents_container'>
          <div className='dropdown_contents_text'>
            {typeof content === 'string' ? content : content.sort().map((el, i) => (<p key={i + id}>{el}</p>))}
          </div>
        </div>
      }
    </div>
  )
}

//TODO : add isRequired if needed on each prop???
Dropdown.propTypes = {
  title: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  id: PropTypes.string,
  className: PropTypes.string
}

export default Dropdown;