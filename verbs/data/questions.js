import { Question } from "../modelsverbs/Question.js";
import { data } from "./data.js";

export const questions = data.map(question => new Question(question.question, question.choise, question.answer))



