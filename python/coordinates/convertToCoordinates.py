from pyproj import CRS, Transformer
import pandas as pd

def convertToCoordinates(x, y):
    crtn05 = CRS("EPSG:5367")
    wgs84 = CRS("EPSG:4326")

    # Use pyproj to transform coordinates from WGS84 to CRTN05
    transformer = Transformer.from_crs(crtn05, wgs84)

    # Transform CRTN05 to latitude and longitude
    lon, lat = transformer.transform(x, y)
    return lon, lat

file_path = 'coordinates.csv'

# Initialize data collectors
lonList = []
latList = []

# Read csv into dataframe
df = pd.read_csv(file_path)

# Go through all rows in dataframe
for index, row in df.iterrows():
    
    # ???
    if (row.iloc[0].split(";")[0] != 'N/D'):
        x = int(row.iloc[0].split(";")[0][2:])
        y = int(row.iloc[0].split(";")[1][2:])
        lon, lat = convertToCoordinates(x, y)
    else:
        lon, lat = 'N/D', 'N/D'

    # Add processed data to array
    lonList.append(lon)
    latList.append(lat)

# Create dataframe columns
df['lon'] = lonList
df['lat'] = latList

# Export dataframe to csv file
df.to_csv(file_path, index=False)