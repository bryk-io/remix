import { redirect } from '@remix-run/node';
import { timeout } from '~/lib/session.server';
import { RegisterForm } from '~/components/auth/register';
import type { ActionFunctionArgs } from '@remix-run/node';

// ! POST: /register
// ! handle account registration
export async function action({ request }: ActionFunctionArgs) {
  console.debug(request);
  await timeout(2000);
  return redirect('/');
}

export default function Index() {
  return <RegisterForm />;
}
