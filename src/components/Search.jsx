import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {getSearchSource} from '../Actions'
import '../assets/styles/components/Search.css'
const Search = (props) =>{
    const [searchinput, setSearchinput] = useState("")
    useEffect(() => {
        handleSearchSubmit()
        
    }, [searchinput])
    const handleSearchSubmit = () =>{
      props.getSearchSource(searchinput)
      document.getElementById("inputsearch").focus();
    }
    const handleSearchChange = event =>{
      setSearchinput(event.target.value)
    }
    const handleKeyDown =event => {
      if (event.key === 'Enter') {
        handleSearchSubmit()
      }
    }
    return(
      <section className="main">
      <div className="main_search-div">
        <input 
          id="inputsearch"
          type="text"
          className="input"
          placeholder="Buscar..."
          name="searchValue"
          value={searchinput}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}/>
      </div>
    </section>
    )
  };
  const mapDispatchToProps = {
    getSearchSource
  }

export default connect(null,mapDispatchToProps)(Search)
