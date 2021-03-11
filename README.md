# react-with-redux


```
git clone 
cd <chosen dir>
npm start
```

### Component Lifecycle Methods
* `componentDidMount()`
  - initial data loading for your component (official documentation don't recommend it to be done on the `constructor()`)
  - run outside process (once)

* `componentDidUpdate()`
  - called everytime a component is updated: change state, get new props
  - data loading everytime component is updated

* `componentWillUnmount`
  - when will remove component from the screen: wil need a cleanup method
