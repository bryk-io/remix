import { redirect } from '@remix-run/node';
import { Form, Outlet, useLoaderData } from '@remix-run/react';
import { getSession } from '~/lib/session.server';
import { Button } from '~/components/ui/button';
import { Separator } from '~/components/ui/separator';
import type { LoaderFunctionArgs } from '@remix-run/node';

export async function loader({ request }: LoaderFunctionArgs) {
  // ! validate the user is logged in or not.
  const session = await getSession(request.headers.get('Cookie'));
  const email = session.get('email');
  if (!email) {
    // not logged in, redirect to login form
    return redirect('/login');
  }
  return { email: email };
}

// Defines the main app/dashboard layout.
export default function AppLayout() {
  const { email } = useLoaderData<typeof loader>();

  return (
    <div className="mx-auto grid w-1/2 justify-center gap-6 pt-10 text-center">
      <pre>
        Hello <strong>{email}</strong>, your main dashboard layout starts here...
      </pre>
      <Form action="/logout" method="POST">
        <Button type="submit">Logout</Button>
      </Form>
      <Separator />

      {/* child route */}
      <Outlet />
    </div>
  );
}
