import { json, redirect } from '@remix-run/node';
import { timeout, getSession, commitSession } from '~/lib/session.server';
import { LoginForm } from '~/views/auth/login';
import type { ActionFunctionArgs } from '@remix-run/node';

// POST: /login
export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  // ! validate credentials
  await timeout(2000);

  // request an MFA code if not provides
  if (!formData.has('mfa') || formData.get('mfa') === '') {
    return json({ requestMFA: true });
  }

  // start session
  const email = formData.get('email')?.toString();
  const session = await getSession(request.headers.get('Cookie'));
  session.set('email', email ?? '...');
  return redirect('/', {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  });
}

export default function Index() {
  return <LoginForm />;
}
