# react-fundamentals-crash-course

## Props vs State
### Props
1. Props get passed to the component
2. Function parameter
3. Props are immutable
4. Props

### State
1. State is managed within the component
2. Variables declared in the function body
3. State can be changed.
4. useState Hook

## Hooks
Function starting with *use* are called hooks. Hooks were added to React in version 16.8.
1. useState
2. UseEffect
3. useReducer
4. useContext
5. useMemo
6. useRef
7. useCallback
8. useTransition
9. useDeferredValue

## List Rendering
### map() method
It's commonly used to render lists of components in React.

```javascript
const newArray = array.map((element, index) => {
  // Return transformed element
});
```

### Key
**Purpose:** Helps React to identify which items in a list have changed, been added, or removed.

**Uniqueness:** Each key should be unique among sibling elements to avoid rendering issues.

#### Best Practices
**1. Use Unique Identifiers:** Preferably use a unique property from your data (like id) as the key.

**2. Avoid Index as Key:** Using array indices as keys can lead to problems when items are reordered or removed.

## Styling React Using CSS
1. Inline styling
2. CSS stylesheets
3. CSS Modules
