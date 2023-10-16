import { useParams } from "react-router-dom"

const Error = () => {
  const code = useParams().errorCode || 404
  const message = 'Page Not Found'
  return (
    <div>
      <h1>{ `Error ${code}` }</h1>
      <p>{ message }</p>
    </div>
  )
}

export default Error