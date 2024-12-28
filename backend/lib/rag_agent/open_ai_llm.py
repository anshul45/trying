import os
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate

def OpenAILLMAgent(userInput :str,system_text = "You are a helpful AI assistant."):
        llm = ChatOpenAI(model="gpt-4o-mini", api_key=os.getenv('OPEN_AI_KEY'))
        system_text = "You are a helpful AI assistant."

        prompt_template = ChatPromptTemplate.from_messages([
                ("system","{system_message}"),
                ("user","{user_message}")
        ])

        prompt = prompt_template.invoke({"system_message":system_text,"user_message":userInput})
        response = llm.invoke(prompt)
        return response.content
