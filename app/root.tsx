import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { DrawerWrapper } from '~/components/ui/drawer';
import { Toaster } from '~/components/ui/sonner';
import type { LinksFunction } from '@remix-run/node';

// Core application styles
import appStyles from '~/root.css?url';
export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: appStyles },
];

export function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <DrawerWrapper className="h-full">{children}</DrawerWrapper>
        <Toaster visibleToasts={4} duration={5000} pauseWhenPageIsHidden />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function AppRoot() {
  return <Outlet />;
}
