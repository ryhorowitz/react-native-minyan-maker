import { useContext } from "react"
import { useNavigation } from '@react-navigation/native';
import AppContext from "./AppContext"

function Shuls() {
  const { shuls } = useContext(AppContext)
  const navigation = useNavigation()

  function handleNavigateToShul(id) { navigation(`/shuls/${id}`) }

  const shulList = shuls.map(shul => {
    return <div className="col" key={shul.id}>
      <div className="card w-50 mx-auto" key={shul.id}>
        <img src={shul.img}
          className="card-img-top img-fluid"
          alt={shul.name}
        ></img>
        <div className={`card-body ${styles.shulCardBody}`}
          onClick={() => { handleNavigateToShul(shul.id) }}>
          <h5 className="card-title">{shul.name}</h5>
          <p className="text-end">{shul.street_address} {shul.city}, {shul.state} {shul.postal_code}</p>
        </div>
      </div>
    </div >
  })
  const shulGrid = <div className="row row-cols-1 g-4">{shulList}</div>
  return (
    <>
      <ul>{shulGrid}</ul>
    </>
  )
}

export default Shuls