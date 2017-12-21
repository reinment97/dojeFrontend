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
		SUCCESS:BOOLEAN
		"id": INT
		"title": Sring (Board's title)
		"content": String (Board's content)
		"writer_name": String (User's name)
		"date": TIMESTAMP(Board's created or updated)
	}

##### 게시글 작성
* /board : POST

> Requiring
   
	title: String (Board's title)
	content: String (Board's content)
	writer: INT (User's id)

> Return

	{
		CODE:MESSAGE,
		SUCCESS:BOOLEAN
	}


##### 게시글 수정
* /board : PUT

> Requiring
   
	id: INT (Board's id)
	title: String (Board's title)
	content: String (Board's content)

> Return

	{
		CODE:MESSAGE,
		SUCCESS:BOOLEAN
	}


##### 게시글 삭제
* /board/{BOARD_ID} : DELETE

> Requiring

> Return
	{
		CODE:MESSAGE,
		SUCCESS:BOOLEAN
	}


##### 게시글 가져오기
* /board/{BOARD_ID} : GET

> Requiring
	
> Return
	{
		CODE:MESSAGE
		SUCCESS:BOOLEAN
		"id": INT
		"title": Sring (Board's title)
		"content": String (Board's content)
		"writer_name": String (User's name)
		"date": TIMESTAMP(Board's created or updated)
	}


### COMMENT

#### Schema
> id: INT <br>
> content: String <br>
> writer: String <br>
> created: TIMESTAMP <br>
> level: INT <br>
> group: INT <br>
> seq: INT <br>
> Board_id: INT <br>

##### 게시글 가져오기
* /board/{BOARD_ID} : GET

> Requiring
	
> Return
	{
		CODE:MESSAGE
		SUCCESS:BOOLEAN
		"id": INT
		"title": Sring (Board's title)
		"content": String (Board's content)
		"writer_name": String (User's name)
		"date": TIMESTAMP(Board's created or updated)
	}


### USER 

#### Schema
> id: INT <br>
> useremail:  String <br>
> userpassword: String <br>
> username: String <br>
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