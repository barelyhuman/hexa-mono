import type { NextApiRequest, NextApiResponse } from "next";
import { App } from "@tillwhen/adaptor";

async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const result = await App.models.User.getUserById(2);

  res.status(200).json({
    userId: result,
  });
}

export default handler;
