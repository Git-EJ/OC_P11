import PropTypes from 'prop-types'
import { NavLink, useParams } from 'react-router-dom';
import Header from '../molecules/HeaderNav';
import Footer from '../organisms/Footer';

const Error = ({errorCode}) => {
  const param = useParams().errorCode
  errorCode = errorCode || param
  console.log(errorCode);
  if (!errorCode) errorCode = 404
  const errorMessage = 'Oups! La page que vous demandez n\'existe pas.'
  const homeMessage = 'Retourner sur la page d\'accueil'
  
  return (
    <>
      <Header />
    <main className="error_wrapper">
      <div className='error_code'>{errorCode}</div>
      <div className='error_message'>{ errorMessage }</div>
      <NavLink to='/' className="error_navlink">{homeMessage} </NavLink>
    </main>
      <Footer />
    </> 
  )
}

Error.propTypes = { errorCode: PropTypes.string || PropTypes.number }

export default Error