# DOJE BOARD


## API Docs 

### BOARD

#### Shcema
> id: INT \n
> title: String
> content: String
> writer: INT
> created: TIMESTAMP
> updated: TIMESTAMP


### COMMENT

#### Schema
> id: INT 
> content: String
> writer: String
> created: TIMESTAMP
> Board_id: INT

### USER 

#### Schema
> id: INT
> useremail:  String
> userpassword: String
> created: TIMESTAMP
> user_key: String


* /user/login : POST

> Requiring

    useremail : String (User's email)
    userpw : String (User's password)
    
> Return

	{
		CODE:MESSAGE,
		SUCCESS: BOOLEAN,
		"KEY": USERKEY
	}

* /user/join : POST

> Requiring

    useremail : String (User's email)
    userpw : String (User's password)
    
> Return

	{
		CODE:MESSAGE,
		SUCCESS: BOOLEAN
	}

* /user/{id} : POST

> Requiring

    key : String (User's key)
    
    
> Return

	{
		CODE:MESSAGE,
		SUCCESS: BOOLEAN,
		"useremail": STRING,
	}