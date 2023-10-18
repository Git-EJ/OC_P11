import { useParams } from "react-router-dom";
import Api from "../api/Api";
import Error from "./Error";

const Accommodation = () => {

  const { id } = useParams()
  const apiData = Api()
  const { data } = apiData || {}

  // 404 si saisie user d'un path pour accéder à une page qui n'existe pas
  const realId = data ? data.find(el => el.id === id) : null
  if (!realId) return < Error errorCode = {404} />

  return (<h1>Accommodation</h1>)
}

export default Accommodation