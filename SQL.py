import mysql.connector
def UpdateDATABASE(intialcon,timetoButter,finalcon):

	conn = mysql.connector.connect(
  		user='sql3445783', password='1ZPLzAdjxn', host='sql3.freemysqlhosting.net', database='sql3445783')

	cursor = conn.cursor()
	sql = """INSERT INTO Runs(
	Initial_confidence, Final_confidence, Time_to_reach)
	VALUES (%s,%s,%s)"""
	cursor.execute(sql,(intialcon,finalcon,timetoButter))
	conn.commit()
	print("updated DataBase")