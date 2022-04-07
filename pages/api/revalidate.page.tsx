import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const id = req.query["id"];
  await res.unstable_revalidate(`/_time/${id}`);
  res.status(200).json({ revalidate: id });
};
