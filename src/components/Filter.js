import React from 'react';

const Filter = ({ texto, setTexto}) => {

    const handleInputChange = ({target}) => {
        setTexto(target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(texto);
    }
    return (
        <div className='filtrar'>
            <form onSubmit={handleSubmit}>
                <span>Escuentra tu personaje: </span>
                <input 
                type='text' 
                name='buscar' 
                placeholder='Nombre del personaje'
                value={texto}
                onChange={handleInputChange}
                />
                {/* <button type='submit'>Buscar</button> */}
            </form>
        </div>
    )
    }

export default Filter
