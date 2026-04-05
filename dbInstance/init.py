# Helper script

import bcrypt


for i in range(10):
    password = bcrypt.hashpw((str(i) + "2345678").encode(), bcrypt.gensalt())
    print("INSERT INTO Users (id, email, password) VALUES (" + str(i) + ", 'user" + str(i) + "@gmail.com', '" + str(password)[2:] + ");")
    
    
    
