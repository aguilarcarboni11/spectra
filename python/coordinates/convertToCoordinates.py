from pyproj import CRS, Transformer
import pandas as pd

def convertToCoordinates(x, y):
    crtn05 = CRS("EPSG:5367")  # CRTN05
    wgs84 = CRS("EPSG:4326")  # WGS84

    transformer = Transformer.from_crs(crtn05, wgs84)

    lon, lat = transformer.transform(x, y)
    return lon, lat

file_path = 'coordinates.csv'

lonList = []
latList = []

df = pd.read_csv(file_path)
for index, row in df.iterrows():
    if (row.iloc[0].split(";")[0] != 'N/D'):
        x = int(row.iloc[0].split(";")[0][2:])
        y = int(row.iloc[0].split(";")[1][2:])
        lon, lat = convertToCoordinates(x, y)
    else:
        lon, lat = 'N/D', 'N/D'
    lonList.append(lon)
    latList.append(lat)

df['lon'] = lonList
df['lat'] = latList
df.to_csv(file_path, index=False)