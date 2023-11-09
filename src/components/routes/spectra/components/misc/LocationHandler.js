import React from 'react'
import { spectraState } from '../../../../types/types.tsx'
import ClearButton from './ClearButton.js'

const LocationHandler = ({state, cache}) => {
    function switchText(state) {
        switch(state) {
            case spectraState.HOME:
                return  <p className='subtitle'>De click en una fila para ver más informacion acerca del formulario</p>
            case spectraState.FORMULARIO:
                    return `Formulario #${cache.formulario['ID']}`
            case spectraState.INFORMACION:
                    return `Formulario #${cache.formulario['ID']} > Informacion #${cache.informacion['ID']}`
            case spectraState.REGISTRO:
                    return `Formulario #${cache.formulario['ID']} > Informacion #${cache.informacion['ID']} > Registro #${cache.registro[0]['ID']}`
        }
    }
    
    return (
        <div>
            <ClearButton />
            <p className='subtitle'>
                {switchText(state)}
            </p>
        </div>
    )
} 

export default LocationHandler