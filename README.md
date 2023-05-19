# random_number_generator

This is a simple API for generating random numbers

## How it works

1. Send a `GET` request to `/generate`

```js
const response = await fetch("http://localhost:5000/generate");
```

2. You get a random number between 0 and 100

3. If the random number is less than 50, you lose

4. If the random number is 50 or more, you win
