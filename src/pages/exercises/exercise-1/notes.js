function Notes() {
  return (
    <div>
      <section>
        <h2>Goals of this Exercise</h2>

        <h4>Goal 1 - Practice building blocks of React</h4>
        <p>
          Learn how to make React components and render some markup from them. Learn how to declare
          and update state in React.
        </p>

        <h4>Goal 1 - Practice working with a React codebase.</h4>
        <p>
          Learn how to import components from different files. Understand what are props and how
          they can be passed from one component to its children components.
        </p>
      </section>

      <section>
        <h2>Problems that you might face</h2>

        <h4>1. useState is not defined</h4>
        <p>
          This happens when you don't import <code>useState</code> from React npm package. Make sure
          that the following code snippet is present in the playground.js file.
        </p>
        <pre>
          <code>{`import { useState } from 'react';`}</code>
        </pre>

        <h4>2. Test failed because data-testid="counter" is not found</h4>
        <p>
          For the tests to work you need to use the helper components present in the components.js
          file. For your ease, they were already imported in the playground.js file.
        </p>
      </section>
    </div>
  );
}

export default Notes;
