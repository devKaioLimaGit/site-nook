// lib/cookieClient.ts
import { getCookie } from "cookies-next";

export async function getCookieClient(): Promise<string | null> {
  try {
    const token = await getCookie("session");
    return typeof token === "string" ? token : null;
  } catch (error) {
    console.error("Error retrieving client cookie:", error);
    return null;
  }
}