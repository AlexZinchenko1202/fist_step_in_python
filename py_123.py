import os 

print(os.listdir("."))

import sqlite3

conn = sqlite3.connect('my_database.db')
curs = conn.cursor()

try:
	curs.execute("CREATE TABLE names (firstname text, lastname text)")
except:
	print("this table is done already")

## imput in names something

rows  = [('ALex','Programmist')]
LIST = curs.execute("SELECT * FROM names ").fetchall()

[curs.execute("INSERT INTO names VALUES i")\
 for i in rows if i not in LIST]



conn.commit()

curs.execute("SELECT * FROM names ")

print(curs.fetchall())