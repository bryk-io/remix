import { MetaFunction, redirect } from '@remix-run/node';
import { Form, useLoaderData } from '@remix-run/react';
import { Button } from '~/components/ui/button';
import { getSession } from '~/lib/session.server';
import type { LoaderFunctionArgs } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Zhield' },
    { name: 'description', content: 'Login or create an account' },
  ];
};

// GET: /
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

export default function Index() {
  const { email } = useLoaderData<typeof loader>();

  return (
    <div className="container justify-center pt-10 text-center">
      <pre className="mb-4">
        Hello <strong>{email}</strong>, main dashboard layout starts here...
      </pre>
      <Form action="/logout" method="POST">
        <Button type="submit">Logout</Button>
      </Form>
    </div>
  );
}
