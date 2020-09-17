import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/svelte';

import { List } from './index';

describe('Component List', () => {
  test('Renders', () => {
    const { getByText } = render(List, { title: 'my title' });
    expect(getByText('my title')).toBeInTheDocument();
  });
});
