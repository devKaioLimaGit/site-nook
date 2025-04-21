import { cookies } from "next/headers";

export async function getCookieServer(): Promise<string | null> {
  try {
    const token = (await cookies()).get("session")?.value;
    return token || null;
  } catch (error) {
    console.error("Error retrieving server cookie:", error);
    return null;
  }

}
