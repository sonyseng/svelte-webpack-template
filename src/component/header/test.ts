import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';

import { Header } from './index';

describe('Component Header', () => {
  test('Renders', () => {
    const { getByText } = render(Header, { title: 'my title' });
    expect(getByText('my title')).toBeInTheDocument();
  });
});
