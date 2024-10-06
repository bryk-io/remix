import { MetaFunction, redirect } from '@remix-run/node';
import { Form } from '@remix-run/react';
import { Button } from '~/components/ui/button';
import { getSession } from '~/lib/session.server';
import type { ActionFunctionArgs, LoaderFunctionArgs } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Zhield' },
    { name: 'description', content: 'Login or create an account' },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  // ! validate the user is logged in or not.
  const session = await getSession(request.headers.get('Cookie'));
  if (!session.get('email')) {
    return redirect('/login');
  }
  return {};
}

export async function action({ request }: ActionFunctionArgs) {
  console.log('_index action: ' + request);
  return null;
}

export default function Index() {
  return (
    <>
      <pre>main dashboard layout starts here...</pre>
      <Form action="/logout" method="POST">
        <Button type="submit">Logout</Button>
      </Form>
    </>
  );
}
