import { useEffect, useState } from "react"
import { getMonsterList } from "../../services/api-calls"
import { Link } from "react-router-dom"
const MonsterList = () => {
  const [monster,setMonster]=useState([])

  useEffect(() =>{
    const fetchMonsterList = async () =>{
      const monsterData= await getMonsterList()
      setMonster(monsterData)
    }
    fetchMonsterList()
  },[])
  if(!monster.length) return <h1>Loading Monsters...</h1>

  return ( 
    <main className="nonster-list">
      <h1>Monster List</h1>
      <ul>
        {monster.map((element) =>(
              <li key={element._id}>
                <Link to={`/monsters/${element._id}`}>{element.name}</Link>
            </li>
        ))}
      </ul>
    </main>
  );
}

export default MonsterList;