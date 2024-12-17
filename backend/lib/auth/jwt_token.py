import os
import jwt
import datetime

secret = os.getenv("JWT_SECRET")
algorithm = os.getenv("ALGORITHM")

def generate_token(id:str) -> str:
    payload = {
        "sub":id,
        "exp": datetime.datetime.now() + datetime.timedelta(days=7)
    }
    token = jwt.encode(payload,secret,algorithm)
    return token

def verify_token(token:str) -> str:
    try:
        payload = jwt.decode(token,secret,algorithm)
        print(payload)
        userId = payload['sub']
        return userId
    except jwt.ExpiredSignatureError:
        print("Token has expired.")
    except jwt.InvalidTokenError:
        print("Invalid token.")
    except Exception as e:
        print(f"Token verification failed: {e}")
    return None