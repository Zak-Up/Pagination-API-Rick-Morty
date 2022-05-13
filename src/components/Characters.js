import React from 'react'

const Characters = ({characters, texto}) => {
    if(characters.length === 0) return <p>No existen personajes con el nombre "{texto}"</p>

    return (
        <div>
            <div className='row g-0'>
                {
                    characters.map((el, index) => (
                        <div key={index} className='col mb-4'>
                            <div className='card text-white bg-dark mb-3 mx-3' style={{minWidth: '200px'}}>
                                <div className='image'><img src={el.image} alt='' style={{width: '100%'}}></img></div>
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
