import { PhoneData } from "../data/data"
import ContactList from "../components/ContactList/ContactList"
const Phone = () => {
  console.log(PhoneData)
  return ( 
    <main>
      <ContactList phoneData={PhoneData}/>
    </main>
  )
}

export default Phone