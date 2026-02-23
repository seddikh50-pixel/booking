import express from "express";

export const adminAuth = (req: express.Request, res: express.Response) => {
  const { email, password } = req.body;
  console.log("Received login:", email, password);
  res.json({ success: true });
};