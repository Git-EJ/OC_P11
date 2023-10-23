import { useEffect, useState } from 'react';
import ChevronUp from '../atoms/ChevronUp';
import ChevronDown from '../atoms/ChevronDown';
import PropTypes from 'prop-types';

const Dropdown = ({title, children, className}) => {

  const [animating, setAnimating] = useState(false)


  const [isOpen, setIsOpen] = useState(false)
  const click = () => setAnimating(true)

  const classNames = ['dropdown_wrapper']
  className && classNames.push(className) 

  const [animClass, setAnimClass] = useState('')

  useEffect(() => {
    if (animating) {
      if (!isOpen) {
        setAnimClass(' dropdown_open')
        setIsOpen(true)
      } else {
        setAnimClass('')
        setTimeout(() => {
          setIsOpen(false)
        }, 500)
      }
    }
    setAnimating(false)
  }, [animating, setIsOpen, setAnimClass, isOpen])

  return (
    <div className={classNames.join(' ')}>
      {/* TODO : cursor pointer sur le container */}
      <div className="dropdown_container" onClick={() => click()}>
        <h4 className="dropdown_title">{title}</h4>
        <div className="dropdown_button">
          { isOpen ? <ChevronUp /> : <ChevronDown /> }
        </div>
      </div>
      
      {isOpen && (
        <div className={'dropdown_contents_container' + animClass}>
          <div className='dropdown_contents_text'>
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

//TODO : add isRequired if needed on each prop???
Dropdown.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Dropdown;