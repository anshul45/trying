from fastapi import Request
from fastapi.responses import JSONResponse
from lib.auth.hash_password import hash_password,check_password
from lib.prisma_client import prisma
from lib.auth.jwt_token import generate_token,verify_token


async def log_in(request:Request):
    try:
        body = await request.json()
        username = body.get("name")
        email = body.get("email")

        if not username or not email:
            return JSONResponse(
            status_code=400,
            content={"error": "Username, email are required"}
            )
        user_exist = await prisma.user.find_unique(where={"email":email})
        if(user_exist):
            token = generate_token(user_exist.id)
            response_data = {key: value for key, value in user_exist.dict().items() if key != "password"}

            return JSONResponse(
            status_code=200,
            content={"user": response_data,"token":token}
            )
        else :
          response = await prisma.user.create(
            data={ 
            "username": username,
            "email": email,
            "provider":"oath"
            })
        
          token = generate_token(response.id)
          response_data = {key: value for key, value in response.dict().items() if key != "password"}

          return JSONResponse(
            status_code=200,
            content={"user": response_data,"token":token}
                )
        
    except Exception as e:
        return JSONResponse(
            status_code=500,
            content={"error": "An error occurred during signup", "details": str(e)}
        )
    

    
async def signup_with_credential(request:Request):
    try:
        body = await request.json()
        provider = body.get("provider")
        username = body.get("username")
        password = body.get("password") 
        email = body.get("email")
        if not username or not email or not provider or not password:
            return JSONResponse(
            status_code=400,
            content={"error": "Username, email, and password (for credential provider) are required"}
            )
    
        user_exist = await prisma.user.find_unique(where={"email":email})

        if(user_exist):
            return JSONResponse(
            status_code=400,
            content={"error": "User  already created"}
            )
            
        hashed_password = hash_password(password)

        response = await prisma.user.create(
            data={ 
            "username": username,
            "email": email,
            "password": hashed_password,
            "provider": provider})
    
        response_data = {key:value for key, value in response.dict().items() if key != 'password'}

        return JSONResponse(
            status_code=201,  
            content={
            "message": "User registered successfully",
            "user": response_data
            }
            )
    except Exception as e:
        return JSONResponse(
            status_code=500,
            content={"error": "An error occurred during signup", "details": str(e)}
        )



async def login_with_credential(request: Request):
    try: 
        body = await request.json()
        username = body.get("username")
        password = body.get("password")
        email = body.get("email")

    
        if not (username or email):
            return JSONResponse(
            status_code=400,
            content={"error": "Either username or email is required"}
            )

        if not password:
            return JSONResponse(
            status_code=400,
            content={"error": "Password is required"}
            )

        user_exist = await prisma.user.find_first(
            where={
                "OR": [
                {"username": username} if username else {},
                {"email": email} if email else {}
                ]
            }
            )

        if not user_exist:
            return JSONResponse(
                status_code=404,
                content={"error": "User not found"}
            )

        if not check_password(password, user_exist.password):
            return JSONResponse(
                status_code=401,
                content={"error": "Invalid password"}
            )

        user_id = user_exist.id

        token = generate_token(user_id)

        response_data = {key: value for key, value in user_exist.dict().items() if key != "password"}

        return JSONResponse(
            status_code=200,
            content={
            "message": "Login successful",
            "user": response_data,
            "token":token
            }
            )
    except Exception as e:
        return JSONResponse(
            status_code=500,
            content={"error": "An error occurred during login", "details": str(e)}
        )