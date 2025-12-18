import { redis } from "../_redis.js";

export default async function handler(req, res) {
  const ids = await redis.smembers("persons") || [];
  const list = [];

  for (const id of ids) {
    const person = await redis.get(`person:${id}`);
    if (person) list.push(person);
  }

  res.json(list);
}
