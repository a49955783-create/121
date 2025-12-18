export function isAdmin(req) {
  return req.headers["x-role"] === "admin";
}
