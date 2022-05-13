import React from 'react'

const Characters = ({characters, texto}) => {
    if(characters.length === 0) return <p className='p-error'>No existen personajes con el nombre "{texto}" aqui, salta de página o escribe el nombre correcto</p>

    return (
        <div>
            <div className='row g-0'>
                {
                    characters.map((el, index) => (
                        <div key={index} className='col mb-4'>
                            <div className='card text-white  mb-3 mx-3' style={{maxWidth: '500px'}}>
                                <div className='image'><img src={el.image} alt='' style={{width: '100%'}}></img></div>
                                <div className='card-body'>
                                    <h3 className='card-title'>{el.name} 🧬</h3>
                                    <hr/>
                                    <h6>Localización:<p>{el.location.name}</p></h6>
                                    <h6>Especie: <h7 className='h7'>{el.species}</h7></h6>
                                    <h6>Género: <h7 className='h7'>{el.gender}</h7></h6>
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
