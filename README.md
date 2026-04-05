the dbInstance creates a psql database and populates it with some users with generic emails and passwords


webserver/webserverInsecure hosts our important portions

the server (backend code)

server.js initializes a connection with the sql db, and has a query command issued for it anytime we try to login.

On the secure version, we use parameterized queries. On the insecure version we don't.

On the insecure version, one can obtain the entire email database in the frontend with a simple SQL injection, while the other cannot.


I did not have a good amount of time to implement the correct functionality of entering a correct password on the insecure version, but the secure version should work just fine.



The client code is relatively simple