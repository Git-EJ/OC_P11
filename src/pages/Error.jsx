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
    <div className='HEADER-ERROR'> {/*TODO . REMOVE*/}
      <Header />
    </div>
    <main className="error_wrapper">
      <h1>{errorCode}</h1>
      <p>{ errorMessage }</p>
      <NavLink to='/'>{homeMessage}</NavLink>
    </main>
    <div className='FOOTER-ERROR'> {/*TODO . REMOVE*/}
      <Footer />
    </div>
    </> 
  )
}

Error.propTypes = { errorCode: PropTypes.string || PropTypes.number }

export default Error