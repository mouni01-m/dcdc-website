// app/api/contact/route.ts
import { google } from "googleapis";

function getSheetsClient() {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  let privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;

  if (!clientEmail || !privateKey) {
    console.error(
      "❌ Missing GOOGLE_SHEETS_CLIENT_EMAIL or GOOGLE_SHEETS_PRIVATE_KEY"
    );
    throw new Error("Google Sheets credentials are not set in env.");
  }

  // Convert literal '\n' sequences into real newlines
  privateKey = privateKey.replace(/\\n/g, "\n");

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    console.log("➡️ Incoming contact data:", { name, email, message });

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Please fill in all fields." }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;
    if (!spreadsheetId) {
      console.error("❌ Missing GOOGLE_SHEETS_ID");
      throw new Error("GOOGLE_SHEETS_ID is not set.");
    }

    const sheets = getSheetsClient();

    // Your tab name is "Sheet1" (from your screenshot)
    const range = "Sheet1!A:D";

    const values = [[new Date().toISOString(), name, email, message]];

    console.log("📝 Appending to sheet:", { spreadsheetId, range, values });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    console.log(
      "✅ Google Sheets API response:",
      
      response.statusText || "OK"
    );

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("❌ Error in contact API:", err);
    return new Response(
      JSON.stringify({
        error: "Something went wrong while sending your message.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
