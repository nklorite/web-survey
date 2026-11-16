from fastapi import FastAPI, HTTPException
from modules.base.survey_data import SurveyData

api = FastAPI()

survey_responses = [] 


@api.get("/")
async def root():
    return {"message": "Welcome to the Survey API!"}


@api.post("/submit")
async def submit_survey(survey_data: SurveyData):
    survey_responses.append(survey_data.dict())
    return {"message": "Survey submitted successfully!"}