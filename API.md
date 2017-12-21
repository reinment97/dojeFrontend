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


##### 게시글 리스트
* /board : GET

> Requiring
   

> Return

	{
		CODE:MESSAGE,
		"id": INT
		"title": (Board's title)
		"content": (Board's content)
		"writer_name": (User's name)
		"date": (Board's created or updated)
	}




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