dice_tracker = {2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0, 10:0, 11:0,12:0}:
from random import randint
for i in range (500):
  rol_x = randint (1,6)
  rol y = randint (1,6)
  total = rol_x + rol_y
  dice_tracker[total] = dice_tracker[total] + 1

