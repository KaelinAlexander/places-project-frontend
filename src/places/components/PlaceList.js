import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../shared/components/UIElements/Card'
import PlaceItem from './PlaceItem'

import './PlaceList.css'

const PlaceList = (props) => {
    
    if (props.places.length === 0) {
        return (
            <div className="place-list center">
                <Card>
                    <h2>No Places Found. Maybe create one?</h2>
                    <button>Share Place</button>
                </Card>     
            </div>    
        )
    } else {
        return (
            <ul className="place-list">
                {props.places.map(place => (
                    <PlaceItem 
                    key={place.id}
                    id={place.id}
                    image={place.image}
                    title={place.title}
                    description={place.description}
                    address={place.address}
                    creatorId={place.creator}
                    coordinates={place.location}
                    />
                ))}
            </ul>
        )
    } 
     );
}
 
export default PlaceList;