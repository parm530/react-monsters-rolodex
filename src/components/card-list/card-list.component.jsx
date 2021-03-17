// no need to .component to the file extension
// used by author to distinguish what kind of file this is

import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';

export const CardList = (props) => {
    return (
        <div className='card-list'>
            {
                props.monsters.map( monster =>  
                    <Card key={monster.id} monster={monster} />
                )
            }
        </div>
    )
}