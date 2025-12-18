import { redis } from "./_redis.js";

export default async function handler(req, res) {
  // السماح فقط GET
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  // تحقق كلمة السر
  const adminPassword = req.headers["x-admin-password"];
  if (adminPassword !== process.env.ADMIN_PASSWORD) {
    return res.status(403).json([]);
  }

  try {
    const rawLogs = await redis.lrange("logs", 0, 200);
    const logs = (rawLogs || []).map(log => JSON.parse(log));

    return res.status(200).json(logs);
  } catch (err) {
    return res.status(500).json({ error: "LOG_ERROR", details: err.message });
  }
}
