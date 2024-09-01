import OpenAI from "openai";
import { OPEN_AI_KEY } from "../utils/constant";

const openai = new OpenAI({
  apiKey: OPEN_AI_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;