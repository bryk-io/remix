import BaseLinks from '~/components/BaseLinks';
import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Index() {
  return (
    <div className="container p-6">
      <h1 className="text-lg">Welcome to Remix</h1>
      <BaseLinks />
    </div>
  );
}
