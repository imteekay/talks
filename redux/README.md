# Redux

- How does the redux lifecycle works
- Counter component
  - paragraph
  - button increment
- counter reducer

```jsx
const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default counterReducer;
```

- Adicionar novo reducer no reducers
- Mostrar que o reducer e o estado já aparece no redux devtools
- conectando componente com redux
  - connect: `import { connect } from 'react-redux';`
  - `mapStateToProps`
  - `mapDispatchToProps`

  ```jsx
  const mapStateToProps = (state) => ({
    counter: state.counter.counter,
  });
  ```

  - Agora está aparecendo o `counter` no componente
- Update do counter
  - não dá pra mudar o counter dentro do componente, porque a store é immutable, precisa ser feito a mudança por dentro do redux.
  - dispatch → action → reducer → update state

  ```jsx
  // index.js
  const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(incrementAction),
  });

  // increment onClick
  <button onClick={increment}>
    increment
  </button>

  // actions.js
  export const incrementAction = {
    type: INCREMENT,
  };

  // reducer.js
  case INCREMENT:
    return {
      ...state,
      counter: state.counter + 1,
    };
  ```

  - refactoring
    - reducer
    - actions
    - constants
- Refactoring for hooks

```jsx
const [counter, setCounter] = useState(0);

onClick={() => setCounter((state) => state + 1)}
```
