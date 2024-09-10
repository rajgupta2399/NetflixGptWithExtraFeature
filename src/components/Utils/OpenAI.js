import OpenAI from "openai";
import { OPENAI_KEY } from "./Constant";

const openai = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;
