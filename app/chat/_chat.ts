"use server"

import Groq from "groq-sdk";

export async function SendChat(message: string) {
  const key = "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";

  const groq = new Groq({
    apiKey: key,
  });
  const chatCompletion = await groq.chat.completions.create({
    messages: [{ role: "user", content: message }],
    model: "mixtral-8x7b-32768",
  });

  console.log(chatCompletion.choices[0].message.content);

  return chatCompletion.choices[0].message.content;
}
