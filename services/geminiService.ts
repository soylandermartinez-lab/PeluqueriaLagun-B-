
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getStyleRecommendation = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Eres un estilista experto de la Peluquería Lagun. 
                 Basándote en la siguiente petición del cliente, sugiere 2 o 3 estilos de corte o barba 
                 que podrían quedarle bien. Sé amable, profesional y breve. 
                 Usa un tono acogedor. Petición del cliente: "${userPrompt}"`,
      config: {
        temperature: 0.7,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Lo siento, ahora mismo no puedo darte una recomendación. ¡Pregúntanos en la peluquería!";
  }
};
