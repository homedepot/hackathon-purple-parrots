import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import './styles.scss'

const WishFilter = ({onChangeSearch}) => (
  <div className="wish-filter">
    <div className="wish-search-container">
      <input className="wish-search" placeholder="Search by Name, Sponsor, Location and/or Date" onChange={onChangeSearch} />
      <FontAwesomeIcon className="calendar-icon" icon={faCalendarAlt} />
    </div>
    <div className="">
      <p>Filter by Wish Type</p>
      <input type="checkbox" id="toGo" name="toGo" />
      <label htmlFor="toGo">To Go</label>
      <input type="checkbox" id="toMeet" name="toMeet" />
      <label htmlFor="toMeet">To Meet</label>
      <input type="checkbox" id="toBe" name="toBe" />
      <label htmlFor="toBe">To Be</label>
      <input type="checkbox" id="toSee" name="toSee" />
      <label htmlFor="toSee">To See</label>
    </div>
  </div>
)

export default WishFilter
