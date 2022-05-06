import React from 'react'

const Characters = ({characters}) => {
    return (
        <div>
            <div className='row'>
                {
                    characters.map((el, index) => (
                        <div key={index} className='col mb-4'>
                            <div className='card text-white bg-dark mb-3' style={{minWidth: '200px'}}>
                                <img src={el.image} alt=''></img>
                                <div className='card-body'>
                                    <h3 className='card-title'>{el.name}</h3>
                                    <hr/>
                                    <h6>Localización: {el.location.name}</h6>
                                    <h6>Especie: {el.species}</h6>
                                    <h6>Género: {el.gender}</h6>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
    }

export default Characters
