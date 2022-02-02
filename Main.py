import TestVid
import math
import server
import SQL
import functools
import operator
pixel=160
try:
    location_butter=TestVid.capturecood("original1.jpg","image.jpg")
    location_robot=TestVid.capturecood("original1.jpg","robot.jpg")
except:
    print("No object deteted")

right_angle_locaction= []
right_angle_locaction.append(min(location_robot[0],location_butter[0]))
right_angle_locaction.append(max(location_robot[1],location_butter[1]))
distance_to_median= math.hypot(location_robot[0] - right_angle_locaction[0], location_robot[1] - right_angle_locaction[1])
distance_from_median_to_dest=math.hypot(location_butter[0] - right_angle_locaction[0], location_butter[1] - right_angle_locaction[1])
print(distance_to_median)
print(distance_from_median_to_dest)
Data_Path=[]

while distance_to_median > 160:
    Data_Path.append('B')
    distance_to_median =distance_to_median-160
#if distance_to_median < 160:
 #   Data_Path.append('B')
Data_Path.append('R')
while distance_from_median_to_dest > 160:
    Data_Path.append('B')
    distance_from_median_to_dest = distance_from_median_to_dest-160


print(distance_to_median)
print(Data_Path)
distance_TEMP=distance_to_median+distance_from_median_to_dest
SQL.UpdateDATABASE(str(location_butter),str(location_robot),distance_TEMP)
data_send=''.join(Data_Path)
server.send_data(data_send)


# for loop for eah character in datapath
# if B send backward move
# if R send right move