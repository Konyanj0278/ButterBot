from detect import*
from move import*
CAMERA_WIDTH = 640# x axis of camera
CAMERA_HEIGHT = 480 # y axis of Camera
Results=detection()
detected=False
while(detected==False):
    if Results[0]<= 350.00 and Results[0]>=300.00:
        print("Grab clone")
        detected==True
        break
    elif Results[0]>350.00:
        print("turn right")
        movement_start('no', 'right')
        Results=detection()
        
    elif Results[0] < 300.00:
        print("turn left")
        movement_start('no', 'left')
        Results=detection()
        

print(Results)
distance=checkdist()*100
start_time=time.time()
while(distance>15.00):
    print(distance)
    movement_start('backward', 'no',.1)
    distance=checkdist()*100
