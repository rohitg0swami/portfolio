---
title: "Mastering React Hooks: A Complete Guide"
excerpt: "Dive deep into React Hooks and learn how to build modern, functional React components with useState, useEffect, and custom hooks."
category: "react"
date: "2024-01-20"
tags: ["react", "hooks", "javascript", "frontend"]
---

# Mastering React Hooks: A Complete Guide

React Hooks revolutionized how we write React components. They allow you to use state and other React features without writing class components.

## Why React Hooks?

Before Hooks, React developers faced several challenges:

- Complex class components with lifecycle methods
- Reusing stateful logic was difficult
- Understanding `this` keyword confusion
- Hard to test and optimize

Hooks solve these problems elegantly!

## useState: Managing State

The most fundamental hook for adding state to functional components:

```jsx
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}
```

### Multiple State Variables

```jsx
function UserProfile() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);

    return (
        <form>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
            />
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
        </form>
    );
}
```

## useEffect: Side Effects

Handle side effects like data fetching, subscriptions, and DOM manipulation:

```jsx
import { useState, useEffect } from 'react';

function UserData({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUser() {
            setLoading(true);
            const response = await fetch(`/api/users/${userId}`);
            const data = await response.json();
            setUser(data);
            setLoading(false);
        }

        fetchUser();
    }, [userId]); // Re-run when userId changes

    if (loading) return <div>Loading...</div>;
    return <div>Hello, {user.name}!</div>;
}
```

### Cleanup Functions

```jsx
useEffect(() => {
    const timer = setInterval(() => {
        console.log('Tick');
    }, 1000);

    // Cleanup function
    return () => clearInterval(timer);
}, []);
```

## useContext: Sharing Data

Avoid prop drilling with Context API:

```jsx
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

function ThemedButton() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            className={theme}
        >
            Toggle Theme
        </button>
    );
}
```

## Custom Hooks: Reusable Logic

Create your own hooks to share logic:

```jsx
// useLocalStorage hook
function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

// Usage
function App() {
    const [name, setName] = useLocalStorage('name', '');

    return (
        <input
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
    );
}
```

### useFetch Custom Hook

```jsx
function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return { data, loading, error };
}
```

## Advanced Hooks

### useReducer: Complex State Logic

```jsx
import { useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </div>
    );
}
```

### useMemo: Performance Optimization

```jsx
import { useMemo } from 'react';

function ExpensiveComponent({ items }) {
    const total = useMemo(() => {
        return items.reduce((sum, item) => sum + item.price, 0);
    }, [items]);

    return <div>Total: ${total}</div>;
}
```

## Best Practices

1. **Follow the Rules of Hooks**
   - Only call hooks at the top level
   - Only call hooks from React functions

2. **Name custom hooks with "use" prefix**
   ```jsx
   useAuth(), useFetch(), useLocalStorage()
   ```

3. **Keep effects focused**
   - One effect per concern
   - Add cleanup when needed

4. **Optimize with dependencies**
   - Be specific with dependency arrays
   - Use ESLint plugin for hooks

5. **Don't overuse useState**
   - Consider useReducer for complex state
   - Group related state together

## Common Pitfalls

❌ **Incorrect dependency array**
```jsx
useEffect(() => {
    doSomething(value);
}, []); // Missing 'value' dependency
```

✅ **Correct**
```jsx
useEffect(() => {
    doSomething(value);
}, [value]);
```

## Conclusion

React Hooks provide a cleaner, more intuitive way to write React components. They make your code more reusable, testable, and easier to understand.

Start with useState and useEffect, then gradually explore other hooks as you become comfortable. Happy hooking! 🎣
