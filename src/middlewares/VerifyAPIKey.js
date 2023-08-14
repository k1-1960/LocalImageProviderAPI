import keys from "../keys.js";

export default function (req, res, next) {
  const apiKey = req.header("X-API-Key");

  if (apiKey && MediaKeySession.includes(apiKey)) {
    next();
  } else {
    res.status(401).json({ message: "Credencial de API inválida." });
  }
}
