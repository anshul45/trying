from fastapi import FastAPI
from routes.authRoutes import authRouter 

app = FastAPI()


app.include_router(authRouter)

@app.get("/health")
def health():
    return{"message":"Server runing properly"}