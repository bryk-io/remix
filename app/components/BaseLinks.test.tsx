import { beforeEach, describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import BaseLinks from '~/components/BaseLinks';

describe('BaseLinks test', () => {
  beforeEach(() => {
    render(<BaseLinks />);
  });

  test('Should show list', () => {
    expect(screen.getByRole('list')).toBeDefined();
  });
});
