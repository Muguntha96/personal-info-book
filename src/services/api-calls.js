const baseUrl = 'https://sei-dnd-api.herokuapp.com'

export async function getMonsterList(){
  const res=await fetch(`${baseUrl}/api/monsters`)
  return res.json()
}
export async function getMonsterDetail(monsterId){
  const res= await fetch(`${baseUrl}/api/monsters/${monsterId}`)
  return res.json()
}
export async function getSpells(){
  const res=await fetch(`${baseUrl}/api/spells`)
  return res.json()
}
