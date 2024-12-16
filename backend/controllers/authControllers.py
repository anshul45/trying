from lib.prisma_client import prisma
async def log_in():
    data = await prisma.user.find_first()
    print(data)
    return{"message","user authenticated"}

def register():
    return{"message","register sucess"}