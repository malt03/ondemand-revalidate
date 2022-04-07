import type { NextApiRequest, NextApiResponse } from "next";

export default async (_: NextApiRequest, res: NextApiResponse) => {
  await res.unstable_revalidate("/time/a");
  res.status(200).json({ revalidate: true });
};
