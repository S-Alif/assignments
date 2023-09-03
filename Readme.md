### How to run the program
- Clone or download the repository
- Navigate to the folder
- In the terminal run "npm install", then run "npm start"

### Other instruction
- Port is 8080 by default
- use a ".env" file and add the following fileds
    -- db : your mongodb database connection link with database name
    -- port: your desired port
- use "/product" for the routes

### endpoints
- /register : for registration
- /login : for registration
- /create-product : create a product for demo (no need for auth)
- /create-cart : create a cart (auth required)
- /get-cart/:id : get a cart by id (auth required)
- /post-order: post a order (auth required)
- /get-order/:id: get the order (auth required)