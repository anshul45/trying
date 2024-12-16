from fastapi import APIRouter

from controllers.authControllers import log_in,register

authRouter = APIRouter()

authRouter.get("/login")(log_in)
authRouter.post("/register")(register)