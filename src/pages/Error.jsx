import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom';

const Error = ({errorCode}) => {
  const param = useParams().errorCode
  errorCode = errorCode || param
  console.log(errorCode);
  if (!errorCode) errorCode = 404
  const message = 'Page Not Found'
  return (
    <div>
      <h1>{ `Error ${errorCode}` }</h1>
      <p>{ message }</p>
    </div>
  )
}

Error.propTypes = { errorCode: PropTypes.string || PropTypes.number }

export default Error