import { createCookieSessionStorage } from '@remix-run/node';

type SessionDetails = {
  email: string;
};

export const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<SessionDetails>({
    cookie: {
      name: '__session',
      httpOnly: true,
      maxAge: 60 * 60 * 24, // one day
      path: '/',
      secrets: ['my-secret-encryption-key'],
    },
  });

export function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
