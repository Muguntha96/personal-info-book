/* eslint-disable react-hooks/exhaustive-deps */
import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMonsterDetail } from '../../services/api-calls';


const MonsterDetails = () => {
  const [monsterDetails,setMonsterDetails]=useState({})
  const {monsterId} = useParams()
  useEffect ( () =>{
    const fetchMonsterDetail = async () =>{
      const monsterDetail= await getMonsterDetail(monsterId)
      setMonsterDetails(monsterDetail)
    }
    fetchMonsterDetail()
  },[monsterId])
  return ( 
    <main>
      <h1>Monster Detail</h1>
      {monsterDetails.image 
        ? <img
            style={{ width: '320px' }}
            src={`https://www.dnd5eapi.co${monsterDetails.image}`}
            alt="A (scary) {monsterDetails.name}!"
          />
        : <img src="https://picsum.photos/320/240/" alt="A random lorem picsum photo" />
      }
      <h2>Name:{monsterDetails.name}</h2>
      <h2>Hit Points:{monsterDetails.hitPoints}</h2>
      <h2>Charisma:{monsterDetails.charisma}</h2>
    </main>
  )
}

export default MonsterDetails;