// import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
// import { type NextRequest } from 'next/server'
// import { updateSession } from '@/utils/supabase/middleware'

// export default withAuth(
//   function middleware(req: NextRequestWithAuth) {
//     const res = NextResponse.next()

//     res.headers.append('Access-Control-Allow-Credentials', "true")
//     res.headers.append('Access-Control-Allow-Origin', '*') // replace this your actual origin
//     res.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
//     res.headers.append(
//       'Access-Control-Allow-Headers',
//       'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
//     )
//     return res;
//     // if (
//     //   req.nextUrl.pathname.startsWith("/admin") &&
//     //   req.nextauth.token?.isAdmin !== true
//     // ) {
//     //   return NextResponse.rewrite(new URL("/denied", req.url));
//     // }
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => !!token,
//     },
//   }
// );

// export const config = { matcher: ["/admin"] };

export const config = {
  matcher: [
    '/api/:path*',
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}

export function middleware() {
  // retrieve the current response
  const res = NextResponse.next()

  // add the CORS headers to the response
  res.headers.append('Access-Control-Allow-Credentials', "true")
  res.headers.append('Access-Control-Allow-Origin', '*') // replace this your actual origin
  res.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
  res.headers.append(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  return res
}
