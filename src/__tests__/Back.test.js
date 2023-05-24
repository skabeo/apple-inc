import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Back from '../components/Back';

describe('Back', () => {
  it('should render the Back component with icons and link', () => {
    const { container } = render(
      <BrowserRouter>
        <Back />
      </BrowserRouter>
    );

    const linkElement = container.querySelector('a');
    const backIconElement = container.querySelector('svg[aria-label="back"]');
    const userIconElement = container.querySelector('svg[aria-label="user"]');

    expect(linkElement).toBeInTheDocument();
  });
});
