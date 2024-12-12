import * as React from 'react';
import { useFetcher } from '@remix-run/react';
import { Accordion, AccordionItem, AccordionContent } from '~/components/ui/accordion';
import { Button } from '~/components/ui/button';
import { Icon } from '~/components/icons';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  PATTERN_ONLY_DIGITS,
} from '~/components/ui/input-otp';

export interface LoginRequestDetails {
  requestMFA: boolean;
}

export const LoginForm: React.FunctionComponent = () => {
  const fetcher = useFetcher();
  const isBusy = fetcher.state !== 'idle';
  const [section, setSection] = React.useState<string[]>(['step-1']);

  const data = fetcher.data as LoginRequestDetails;
  React.useEffect(() => {
    if (data?.requestMFA) {
      setSection(['step-1', 'mfa']);
    }
  }, [data?.requestMFA]);

  return (
    <>
      <h1 className="text-2xl font-semibold">Start a new session</h1>
      <div className="grid gap-6">
        <fetcher.Form action="/login" method="post" id="login">
          <Accordion type="multiple" value={section}>
            {/* mail and pass */}
            <AccordionItem className="border-none" value="step-1">
              <AccordionContent className="grid gap-2 px-1">
                <p className="text-sm text-muted-foreground">
                  Enter your email and credentials below.
                </p>
                <Label className="sr-only" htmlFor="email">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  className="text-center"
                  placeholder="name@example.com"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                />
                <Label className="sr-only" htmlFor="password">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  className="text-center"
                  placeholder="password"
                  autoCapitalize="none"
                  autoCorrect="off"
                />
              </AccordionContent>
            </AccordionItem>

            {/* mfa */}
            <AccordionItem className="border-none" value="mfa">
              <AccordionContent className="grid justify-items-center gap-2 px-1">
                <p className="text-sm text-muted-foreground">
                  Enter the one-time MFA code.
                </p>
                <Label className="sr-only" htmlFor="mfa">
                  MFA code
                </Label>
                <InputOTP id="mfa" name="mfa" maxLength={6} pattern={PATTERN_ONLY_DIGITS}>
                  <InputOTPGroup>
                    <InputOTPSlot className="size-12" index={0} />
                    <InputOTPSlot className="size-12" index={1} />
                    <InputOTPSlot className="size-12" index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot className="size-12" index={3} />
                    <InputOTPSlot className="size-12" index={4} />
                    <InputOTPSlot className="size-12" index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Button type="submit" className="w-full" disabled={isBusy}>
            {isBusy && <Icon brand="spinner" className="mr-2 size-4 animate-spin" />}
            Login
          </Button>
        </fetcher.Form>
      </div>
    </>
  );
};
