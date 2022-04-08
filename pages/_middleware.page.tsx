import { NextMiddleware, NextResponse } from "next/server";

const middleware: NextMiddleware = (req) => {
  console.info(req.nextUrl.pathname);

  if (req.headers.get("x-prerender-revalidate") != undefined) return NextResponse.next();

  if (req.nextUrl.pathname.startsWith(`/api`)) return NextResponse.next();
  if (req.nextUrl.pathname.startsWith("/site")) return NextResponse.next();
  
  const hostname = req.headers.get("host");
  if (hostname == undefined) {
    return new Response(null, {
      status: 400,
      statusText: "No hostname found in request headers",
    });
  }

  const url = req.nextUrl.clone();
  url.pathname = `/ja/site/${hostname}${url.pathname}`;
  
  return NextResponse.rewrite(url);
};

export default middleware;
