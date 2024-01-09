import { useState,useEffect } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { getSpells } from "../../services/api-calls";
const SpellSearch = () => {
  const [searchData,setSearchData]=useState([])
  const [searchResults,setSearchResults]=useState([])

  const handleSpellSearch = (formData) =>{
    const filterSpellSearch = searchData.filter((ele) => (
      ele.name.toLowerCase().includes(formData.query.toLowerCase())
    ))
    setSearchResults(filterSpellSearch)
  }

  useEffect(() =>{
    const searchFormData = async () =>{
      const data=await getSpells()
      setSearchData(data) 
    }
    searchFormData()
  },[ ])
  return ( 
    <>
    <h1>Spell Search</h1>
    <SearchForm handleSpellSearch={handleSpellSearch} />
    { searchResults.length ?
    <h2>{searchResults.length} results found</h2>
    :
    <h2>Please search a spell</h2>
    }
    <ul>
      {searchResults.map((result) =>(
        <li key={result._id}>
          {result.name}
        </li>
      ))}
    </ul>
    </>
  )
}
export default SpellSearch