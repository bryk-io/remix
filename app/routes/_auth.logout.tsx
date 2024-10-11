import { redirect } from '@remix-run/node';
import { getSession, destroySession } from '~/lib/session.server';
import type { ActionFunctionArgs } from '@remix-run/node';

export async function loader() {
  return redirect('/');
}

// POST: /logout
export async function action({ request }: ActionFunctionArgs) {
  // ! delete active session
  const session = await getSession(request.headers.get('Cookie'));
  return redirect('/', {
    headers: {
      'Set-Cookie': await destroySession(session),
    },
  });
}
