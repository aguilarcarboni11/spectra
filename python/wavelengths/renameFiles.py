import os
import csv

csv_path = 'C:/Users/Usuariopasante1/Desktop/Registros/CSV/'
files_path = 'C:/Users/Usuariopasante1/Desktop/Registros/1. SAPSIGU/FIRMAS/'

# Read csv file
with open(csv_path + 'nombres.csv', newline='') as csv_file:
    rows = csv.reader(csv_file, delimiter=' ', quotechar='|')
    
    # Loop through rows
    for index, row in enumerate(rows):
        # Filter row to rename by folder
        if row[0][0:7] == 'SAPSIGU':
            name = row[0][0:7] + row[0][-5:]
            print(index, name + '.asd' == os.listdir(files_path)[index])
            print("CSV", name + '.asd')
            print("Files:", os.listdir(files_path)[index])
            #print(row[0])