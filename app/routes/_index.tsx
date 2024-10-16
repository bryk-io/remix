import { MetaFunction, redirect } from '@remix-run/node';
import { getSession } from '~/lib/session.server';
import type { LoaderFunctionArgs } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Zhield' },
    { name: 'description', content: 'Login or create an account' },
  ];
};

// GET: /
// loads the proper layout when the user is already logged in or not
export async function loader({ request }: LoaderFunctionArgs) {
  // ! validate the user is logged in or not.
  const session = await getSession(request.headers.get('Cookie'));
  const email = session.get('email');
  if (!email) {
    return redirect('/login');
  }
  return redirect('/home');
}
