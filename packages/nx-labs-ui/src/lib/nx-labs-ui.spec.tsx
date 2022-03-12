import { render } from '@testing-library/react';

import NxLabsUi from './nx-labs-ui';

describe('NxLabsUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NxLabsUi />);
    expect(baseElement).toBeTruthy();
  });
});
