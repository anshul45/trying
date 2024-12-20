from fastapi import FastAPI
from routes.authRoutes import authRouter
from routes.edgesRoutes import edgeRouter
from routes.nodesRoutes import nodeRouter
from dotenv import load_dotenv
from lib.prisma_client import connect_prisma,disconnect_prisma

app = FastAPI()

load_dotenv()


# Connect to Prisma during app startup
@app.on_event("startup")
async def startup():
    await connect_prisma()

@app.on_event("shutdown")
async def shutdown():
    await disconnect_prisma()

app.include_router(authRouter)
app.include_router(edgeRouter)
app.include_router(nodeRouter)


@app.get("/health")
def health():
    return{"message":"Server runing properly"}