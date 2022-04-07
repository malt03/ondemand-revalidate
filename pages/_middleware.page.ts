import { NextMiddleware, NextResponse } from "next/server";

const middleware: NextMiddleware = (req) => {
  if (req.nextUrl.pathname.startsWith("/t")) {
    const split = req.nextUrl.pathname.split("/");
    const url = req.nextUrl.clone();
    url.pathname = `/time/${split[split.length - 1]}`;

    return NextResponse.rewrite(url);
  }
};

export default middleware;
