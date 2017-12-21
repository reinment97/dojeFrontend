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

##### 댓글 리스트
* /comment/{BOARD_ID} : GET

> Requiring
	
> Return

	{
		CODE:MESSAGE
		SUCCESS:BOOLEAN
		"id": INT
		"content": String (Comment's content)
		"writer_name": String (User's name)
		"date": TIMESTAMP(Board's created or updated)
	}

##### 댓글 작성
* /comment/{BOARD_ID} : POST


> Requiring

	content: String (Comment's content)
	writer: INT (User's id)
	level: INT (Comment's level)
	group: INT (Comment's group)

> Return

	{
		CODE:MESSAGE
		SUCCESS:BOOLEAN
	}

##### 댓글 삭제
* /comment/{COMMNET_ID} : DELETE

> Requiring
	
> Return

	{
		CODE:MESSAGE
		SUCCESS:BOOLEAN
	}

### USER 

#### Schema
> id: INT <br>
> useremail:  String <br>
> userpassword: String <br>
> username: String <br>
> created: TIMESTAMP <br>
> user_key: String <br>

##### 유저 확인
* /user : GET

> Requiring

	useremail: String (User's email)
	userpassword: String (User's password)

> Return

	{
		CODE:MESSAGE
		SUCCESS:BOOLEAN
		"user_key": STRING (User's key)
		"id": INT (User's id)
	}

##### 유저 가입
* /user : POST

> Requiring

	useremail: String (User's email)
	username: String (User's name)
	userpassword: String (User's password)

> Return

	{
		CODE:MESSAGE
		SUCCESS:BOOLEAN
	}


##### 유저 정보
* /user/{USER_ID} : POST

> Requiring

	user_key: String (User's KEY)
	

> Return

	{
		CODE:MESSAGE
		SUCCESS:BOOLEAN
		"useremail": String (User's email)
		"username": String (User's name)
	}
