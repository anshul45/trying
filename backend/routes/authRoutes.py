from fastapi import APIRouter

from controllers.authControllers import log_in

authRouter = APIRouter()

authRouter.get("/login")(log_in)