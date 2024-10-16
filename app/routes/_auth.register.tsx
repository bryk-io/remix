import { redirect } from '@remix-run/node';
import { timeout } from '~/lib/session.server';
import { RegisterForm } from '~/views/auth/register';
import type { ActionFunctionArgs } from '@remix-run/node';

// POST: /register
export async function action({ request }: ActionFunctionArgs) {
  // ! handle account registration
  console.debug(request);
  await timeout(2000);
  return redirect('/');
}

export default function Index() {
  return <RegisterForm />;
}
