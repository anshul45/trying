from fastapi import APIRouter

from controllers.authControllers import log_in,signup_with_credential,login_with_credential

authRouter = APIRouter()

authRouter.get("/login")(log_in)
authRouter.post("/signupwithcredential")(signup_with_credential)
authRouter.post("/loginwithcredential")(login_with_credential)
