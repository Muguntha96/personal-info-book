// npm modules
import { useState } from 'react'
import './SearchForm.css'

const SearchForm = (props) => {
  const [formData, setFormData] = useState({query: ''})

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }
  const handleSubmit = (evt) =>{
    evt.preventDefault()
    props.handleSpellSearch(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        name="query"
        type="text"
        autoComplete="off"
        value={formData.query}
        onChange={handleChange}
      />
      <button  type="submit">Search</button>
    </form>
  )
}

export default SearchForm