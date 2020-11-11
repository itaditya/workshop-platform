import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Challenge from '../pages/exercises/exercise-1/challenge';
import Playground from '../pages/exercises/exercise-1/playground';

const describeEach = describe.each([
  ['Playground', Playground],
  ['Challenge', Challenge],
]);

describeEach('Exercise 1 -> Evaluate %s', (name, Component) => {
  beforeEach(() => {
    render(<Component />);
  });

  it('counter value is 0 by default', () => {
    expect(screen.getByTestId('counter')).toHaveTextContent(0);
  });

  it('counter can be increased', () => {
    userEvent.click(screen.getByText('Increase'));
    expect(screen.getByTestId('counter')).toHaveTextContent(1);
  });

  it('counter can be decreased', () => {
    userEvent.click(screen.getByText('Increase'));
    userEvent.click(screen.getByText('Increase'));
    userEvent.click(screen.getByText('Increase'));

    userEvent.click(screen.getByText('Decrease'));
    expect(screen.getByTestId('counter')).toHaveTextContent(2);
  });

  it('counter can not go below 0', () => {
    userEvent.click(screen.getByText('Decrease'));

    expect(screen.getByTestId('counter')).toHaveTextContent(0);
  });
});
