import { type RequestHandler, Router } from "express";

const router = Router();

/* ************************************************************************ */

const sayHello: RequestHandler = (_req, res) => {
  res.json({ message: "hello, world!" });
};

/* ************************************************************************ */

router.get("/api/hello", sayHello);

/* ************************************************************************ */

export default router;
