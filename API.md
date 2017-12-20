# DOJE BOARD


## API Docs 



### USER

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