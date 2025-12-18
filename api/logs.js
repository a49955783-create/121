import { redis } from "./_redis.js";
import { isAdmin } from "./auth.js";

export default async function handler(req, res) {
  if (!isAdmin(req)) {
    res.status(403).json([]);
    return;
  }

  const raw = await redis.lrange("logs", 0, 200) || [];
  const logs = raw.map(l => JSON.parse(l));

  res.json(logs);
}
