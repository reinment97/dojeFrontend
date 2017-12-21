# DOJE BOARD


## API Docs 

### BOARD

#### Shcema
> id: INT <br>
> title: String <br>
> content: String <br>
> writer: INT <br>
> created: TIMESTAMP <br>
> updated: TIMESTAMP


### COMMENT

#### Schema
> id: INT <br>
> content: String <br>
> writer: String <br>
> created: TIMESTAMP <br>
> Board_id: INT <br>

### USER 

#### Schema
> id: INT <br>
> useremail:  String <br>
> userpassword: String <br>
> created: TIMESTAMP <br>
> user_key: String <br>


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