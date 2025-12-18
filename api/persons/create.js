import { redis } from "../_redis.js";
import { v4 as uuid } from "uuid";
import { calculateScores } from "../scores.js";

export default async function handler(req, res) {
  const id = uuid();
  const total = calculateScores(req.body.grades || []);

  const data = {
    ...req.body,
    id,
    total,
    createdAt: new Date().toISOString()
  };

  await redis.set(`person:${id}`, data);
  await redis.sadd("persons", id);

  // LOG
  await redis.lpush(
    "logs",
    JSON.stringify({
      action: "CREATE",
      name: data.name || "",
      by: req.headers["x-user"] || "unknown",
      at: new Date().toISOString()
    })
  );

  res.json(data);
}
