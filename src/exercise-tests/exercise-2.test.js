import { render, screen } from '@testing-library/react';
import Challenge from '../pages/exercises/exercise-2/challenge';
import Playground from '../pages/exercises/exercise-2/playground';

const describeEach = describe.each([
  ['Playground', Playground],
  ['Challenge', Challenge],
]);

describeEach('Exercise 1 -> Evaluate %s', (name, Component) => {
  beforeEach(() => {
    render(<Component />);
  });

  it('fetch and display 20 images', async () => {
    const images = await screen.findAllByRole('img');

    expect(images).toHaveLength(20);
    images.forEach((image) => {
      expect(image).toHaveAttribute('src');
    });
  });
});
