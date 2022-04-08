import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const path = req.query["path"] as string;
  await res.unstable_revalidate(path);
  res.status(200).json({ revalidate: path });
};
