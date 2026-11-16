from pydantic import BaseModel, EmailStr


class SurveyData(BaseModel):
    name: str
    email: EmailStr
    age: int
    answer_one: str
    answer_two: str
    answer_three: str