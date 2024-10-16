import * as React from 'react';
import { useFetcher } from '@remix-run/react';
import { Button } from '~/components/ui/button';
import { Label } from '~/components/ui/label';
import { Input } from '~/components/ui/input';
import { Icon } from '~/components/icons';

export const RegisterForm: React.FunctionComponent = () => {
  const fetcher = useFetcher();
  const isBusy = fetcher.state !== 'idle';

  return (
    <>
      <h1 className="text-2xl font-semibold">Create an account</h1>
      <div className="grid gap-6">
        {/* form */}
        <fetcher.Form action="/register" method="post" id="register">
          <div className="grid gap-2 px-1">
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account.
            </p>
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              className="text-center"
              placeholder="name@example.com"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isBusy}
            />
            <Button type="submit" disabled={isBusy}>
              {isBusy && <Icon brand="spinner" className="mr-2 size-4 animate-spin" />}
              Sign In with Email
            </Button>
          </div>
        </fetcher.Form>
        {/* separator */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        {/* external IdP's */}
        <div className="grid gap-2 px-1">
          <Button variant="outline" type="button" disabled={isBusy}>
            <Icon brand="github" className="mr-2 size-4" />
            GitHub
          </Button>
          <Button variant="outline" type="button" disabled={isBusy}>
            <Icon brand="google" className="mr-2 size-4" />
            Google
          </Button>
        </div>
      </div>
    </>
  );
};
