import { redirect } from '@remix-run/node';
import { cn } from '~/lib/utils';
import { buttonVariants } from '~/components/ui/button';
import { Link, Outlet, useLocation } from '@remix-run/react';
import { Icon } from '~/components/icons';
import { getSession } from '~/lib/session.server';
import type { LoaderFunctionArgs } from '@remix-run/node';

export async function loader({ request }: LoaderFunctionArgs) {
  // ! validate the user is logged in or not.
  const session = await getSession(request.headers.get('Cookie'));
  if (session.get('email')) {
    return redirect('/');
  }
  return {};
}

export default function AuthLayout() {
  const topNav = topNavDetails(useLocation().pathname);

  return (
    <div className="grid h-full grid-cols-2 gap-0">
      {/* left column */}
      <div className="col-span-1 bg-zinc-900 p-10 text-white">
        <div className="flex items-center text-lg font-medium">
          <Icon brand="zhield" className="mr-2 size-6" />
          Zhield
        </div>
      </div>
      {/* right column */}
      <div className="col-span-1 flex flex-col justify-center p-10">
        {/* navlink */}
        <Link
          to={topNav.location}
          className={cn(
            buttonVariants({ variant: 'secondary' }),
            'absolute right-4 top-4 md:right-8 md:top-8'
          )}>
          {topNav.title}
        </Link>

        {/* content */}
        <div className="mx-auto w-full space-y-6 text-center sm:w-[400px]">
          {/* child route */}
          <Outlet />

          {/* footer */}
          <p className="p-8 text-center text-sm text-muted-foreground">
            By using this site you agree to our{' '}
            <Link to="/terms" className="underline underline-offset-4 hover:text-primary">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              to="/privacy"
              className="underline underline-offset-4 hover:text-primary">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

interface PageDetails {
  location: string;
  title: string;
}

function topNavDetails(path: string): PageDetails {
  const res: PageDetails = {
    location: '/register',
    title: 'Register',
  };
  if (path == res.location) {
    res.location = '/login';
    res.title = 'Login';
  }
  return res;
}
