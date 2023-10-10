import React from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts'

const SpectraGraph = ({height, width, wavelength}) => {

    var data = []

        if (wavelength) {
            wavelength.forEach((wl, entry) => {
                var plant = {}
                plant['wavelength'] = wl
                plant['id'] = entry
                data.push(plant)
            }, []);
        }

  return (
    <ResponsiveContainer width={width} height={height}>
        <LineChart width={width} height={height} data={data}>
            <Line type="monotone" dataKey="wavelength" stroke='#FF914D' />
            <XAxis dataKey='id' style={{fontFamily:'Lato', fontSize: '.65vmax'}}/>
            <YAxis dataKey='wavelength'style={{fontFamily:'Lato',fontSize: '.65vmax'}}/>
            <CartesianGrid stroke="#58595B" strokeDasharray="12 12" />
            <Tooltip style={{fontFamily:'Lato',fontSize: '.65vmax'}}/>
        </LineChart>
    </ResponsiveContainer>
  )
}

export default SpectraGraph