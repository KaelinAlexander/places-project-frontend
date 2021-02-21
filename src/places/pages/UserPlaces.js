import React from 'react'
import PlaceList from '../components/PlaceList'
import { useParams } from 'react-router-dom'

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Pallet Town',
        description: 'Where everything is possible!',
        image: 'https://cdn.bulbagarden.net/upload/7/7b/Pallet_Town_HGSS.png',
        address: '1901 Quince St, Denver, CO 80220',
        location: {
            lat: 39.7457953,
            lng: -104.9047793
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'New Bark Town',
        description: 'Where adventure takes root!',
        image: 'https://cdn.bulbagarden.net/upload/d/dd/New_Bark_Town_HGSS.png',
        address: '118 Sears St, Ithaca, NY 14853',
        location: {
            lat: 42.4435655,
            lng: -76.5004488
        },
        creator: 'u2'
    },
    {
        id: 'p3',
        title: 'Twinleaf Town',
        description: 'Where space and time lay out before you!',
        image: 'https://cdn.bulbagarden.net/upload/4/48/Twinleaf_Town_Pt.png',
        address: '109 Quailview Dr, Chapel Hill, NC 27516',
        location: {
            lat: 35.8868431,
            lng: -79.1376146
        },
        creator: 'u2'
    }
];

const UserPlaces = (props) => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    return ( 
        <PlaceList places={loadedPlaces} />
     );
}
 
export default UserPlaces;