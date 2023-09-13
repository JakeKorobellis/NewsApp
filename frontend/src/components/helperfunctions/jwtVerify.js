export default function verifyToekn(req, res, next) {
  const header = req.headers["authorization"];

  //Ensure it is in LS
  if (typeof header !== "undefined") {
    const bearer = header.split(" ");
    const token = bearer[1];
    req.token = token;
    next();
  } else {
    res.sendStatus(403);
  }
}
