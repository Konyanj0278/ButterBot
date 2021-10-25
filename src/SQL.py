import mysql.connector
from datetime import datetime

def UpdateDATABASE(intialcon,timetoButter,finalcon):
	now = datetime.now()
	id = 1
	formatted_date = now.strftime('%Y-%m-%d %H:%M:%S')
	conn = mysql.connector.connect(
  		user='sql3445783', password='1ZPLzAdjxn', host='sql3.freemysqlhosting.net', database='sql3445783')

	cursor = conn.cursor()
	sql = """INSERT INTO Runs(Date_ran,Initial_confidence, Final_confidence, Time_to_reach)
	VALUES (%s,%s,%s,%s)"""
	cursor.execute(sql,(formatted_date,intialcon,finalcon,timetoButter))
	conn.commit()
	print("updated DataBase")

