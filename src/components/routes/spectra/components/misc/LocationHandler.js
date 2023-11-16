import React from 'react'
import { spectraState } from '../../../../types/types.tsx'
import ClearButton from './ClearButton.js'

const LocationHandler = ({state, cache, goBack, setQuery, setCache, setState}) => {
    
    function switchText(state) {
        switch(state) {
            case spectraState.HOME:
                return  <p className='subtitle'>De click en una fila para ver más informacion acerca del formulario</p>
            case spectraState.FORMULARIO:
                    return(<div className='location'>
                                <p className='subtitle'>{`Formulario #${cache.formulario['ID']}`}</p>
                            </div>)
            case spectraState.INFORMACION:
                    return (<div className='location'>
                                <button className='button' onClick={() => handleClick(spectraState.FORMULARIO)}>
                                    <p className='subtitle'>{`Formulario #${cache.formulario['ID']}`}</p>
                                </button>
                                <p className='subtitle'>{`> Informacion #${cache.informacion['ID']}`}</p>
                            </div>)
            case spectraState.REGISTRO:
                    return (<div className='location'>
                                <button className='button' onClick={() => handleClick(spectraState.FORMULARIO)}>
                                    <p className='subtitle'>{`Formulario #${cache.formulario['ID']}`}</p>
                                </button>
                                <p className='subtitle'>{`>`}</p>
                                <button className='button' onClick={() => handleClick(spectraState.INFORMACION)}>
                                    <p className='subtitle'>{`Informacion #${cache.informacion['ID']}`}</p>
                                </button>
                                <p className='subtitle'>{`> Registro #${cache.registro['ID']}`}</p>
                            </div>)
        }
    }

    function handleClick(type) {
        switch(type) {
            case spectraState.FORMULARIO:
                setQuery(`SELECT "ID", "NumeroPlanta", "EstadoFenologico" from "Informacion" WHERE "IDFormulario" : ${cache.formulario['ID']}`);
                setCache({...cache,registro: null, informacion: null})
                break;
            case spectraState.INFORMACION:
                setQuery(`SELECT * from "Registro" WHERE "IDInformacion" : ${cache.informacion['ID']}`);
                setCache({...cache,registro: null})
                break;
            default:
                break;
        }
        setState(type)
    }

    return (
        <div className='locationHandler'>
            <ClearButton state={state} goBack = {goBack} />
            {switchText(state)}
        </div>
    )
} 

export default LocationHandler