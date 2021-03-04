import React from 'react';
import { useParams } from 'react-router-dom'

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

import './PlaceForm.css'

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

const UpdatePlace = (props) => {

    const placeId = useParams().placeId;

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

    const [formState, inputHandler] = useForm({
        title: {
            value: identifiedPlace.title,
            isValid: true
        },
        description: {
            value: identifiedPlace.description,
            isValid: true
        }
    }, true);

    const placeUpdateSubmitHandler = (event) => {
        event.preventDefault();
        console.log(formState.inputs);
    }

    if (!identifiedPlace) {
        return <div className="center"><h2>Couldn't find place!</h2></div>
    }

    return ( 
        <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
            <Input id="title" 
            element="input" 
            type="text" 
            label="Title" 
            validators={[VALIDATOR_REQUIRE()]} 
            errorText="Please enter a title."
            onInput={inputHandler}
            initialValue={formState.inputs.title.value}
            initialValid={formState.inputs.title.isValid}
            />
            <Input id="description" 
            element="textarea" 
            label="Description" 
            validators={[VALIDATOR_MINLENGTH(5)]} 
            errorText="Please enter a description."
            onInput={inputHandler}
            initialValue={formState.inputs.description.value}
            initialValid={formState.inputs.description.isValid}
            />
            <Button type="submit" disabled={!formState.isValid}>UPDATE PLACE</Button>
        </form>
     );
}
 
export default UpdatePlace;