import type { NextFetchEvent, NextRequest } from 'next/server';

export default function middleware(
  request: NextRequest,
  _event: NextFetchEvent,
) {
  // Run Clerk middleware only when it's necessary

  // eslint-disable-next-line no-console
  console.log({ request });

  return request;
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|monitoring|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
