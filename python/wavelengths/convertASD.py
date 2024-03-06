import specdal
import numpy as np
import pandas as pd

file_path = 'C:/Users/Usuariopasante1/Desktop/DEPURACION/1. SAPSIGU/FIRMAS/SAPSIGU00001.asd'

# Load the .asd file
spectrum = specdal.Spectrum(filepath=file_path).measurement

# Initialize data collectors
wavelengths = []
reflections = []

# Loop through all wavelengths
for i in range(325,1075):
    # Add data to arrays
    wavelengths.append(float(i))
    reflections.append(spectrum.iloc[i-325])

# Create dataframe from data
df = pd.DataFrame(wavelengths, columns=['Wavelength'])
df['Reflection'] = reflections

print(df)