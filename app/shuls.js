import { useContext } from "react"
import { View, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Card } from "react-native-paper";
import AppContext from "./AppContext"
import { ScrollView } from "react-native-gesture-handler";

function Shuls() {
  const { shuls } = useContext(AppContext)
  const navigation = useNavigation()

  function handleNavigateToShul(id) { navigation(`/shuls/${id}`) }
  const shulList = shuls.map(shul => {
    return <Card key={shul.id}>
      <Card.Title title={shul.name}></Card.Title>
    </Card>
  })
  // const shulList = shuls.map(shul => {
  //   return <div className="col" key={shul.id}>
  //     <div className="card w-50 mx-auto" key={shul.id}>
  //       <img src={shul.img}
  //         className="card-img-top img-fluid"
  //         alt={shul.name}
  //       ></img>
  //       <div className={`card-body ${styles.shulCardBody}`}
  //         onClick={() => { handleNavigateToShul(shul.id) }}>
  //         <h5 className="card-title">{shul.name}</h5>
  //         <p className="text-end">{shul.street_address} {shul.city}, {shul.state} {shul.postal_code}</p>
  //       </div>
  //     </div>
  //   </div >
  // })
  // const shulGrid = <div className="row row-cols-1 g-4">{shulList}</div>
  return (
    <View>
      <Text>SHULS LIST WILL GO HERE</Text>
      <ScrollView>
        {shulList}
      </ScrollView>
    </View>
  )
}

export default Shuls