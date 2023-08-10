import React from 'react'
import classes from './searchInput2.module.css'
import {BsGlobe} from 'react-icons/bs'
import { IconContext } from 'react-icons'

const SearchInput2 = ({placeholder}) => {
	return (
		<div className={classes.SearchInput2}>
			<input type='search' placeholder={placeholder}/>
			<IconContext.Provider value={{ color: "black", size: "25px" }}>
					<BsGlobe/>
			</IconContext.Provider>
		</div>
	)
}

export default SearchInput2