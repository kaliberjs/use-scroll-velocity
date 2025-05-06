# PUBLISHING
- Make sure you are added to the kaliber organization on NPM
- run `yarn publish`
- Enter a correct version, we adhere to semantic versioning (semver)
- run `git push`
- run `git push --tags`
- Send everybody an email to introduce them to your library!

# useScrollVelocity
A library that returns an immutable value that signifies the users scroll velocity.

It returns a positive float on down scroll and a negative float on up scroll behavior.
The returned value is lerped, the lerp speed is `0.1` by default but can be overwritten by passing the `lerpSpeed` prop, if you need additional smoothing functionality you should either use your own function or use it in conjunction with ThreeJS Math utils like lerp.

Example with built in lerp:
```js
const scrollVelocity = useScrollVelocity({ lerpSpeed: 0.3 })
```

Example with ThreeJS Math util:
```js
const meshRef = React.useRef()
const lerpSpeed = 0.3
const scrollVelocity = useScrollVelocity()

const THREELerp = THREE.MathUtils.lerp(
    meshRef.current.material.uniforms.uScrollVelocity.value,
    scrollVelocity, 
    lerpSpeed
)
```

## Motivation
Creating animations that react to the speed of which the user scrolls can be a bit tricky. Most libraries that give this kind of functionality require you to install their entire package. This package tries to solve this by returning an immutable value that serves a singular purpose. 

## Installation

```
yarn add @kaliber/use-scroll-velocity
```

## Usage

```jsx
import { useScrollVelocity } from '@kaliber/use-scroll-velocity'

function R3FComponent() {
    const scrollVelocity = useScrollVelocity()
    const meshRef = React.useRef()

    useFrame(() => {
        const normalizedVelocity = scrollVelocity * 0.01
        meshRef.current.rotation.z += normalizedVelocity
    })

    return <mesh ref={meshRef}><boxMesh /></mesh>
}
```

# Reference
This library is mainly used as an immutable state reference for ThreeJS / R3F. 

![](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHhxNjBhaGo5bDJ0bmJoMGVsdmk1MzhvcDBoOHh3M2NxeHhhZzIwNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pjOTiMEkFKlN8lQXOT/giphy.gif)

## Disclaimer
This library is intended for internal use, we provide __no__ support, use at your own risk. It does not import React, but expects it to be provided, which [@kaliber/build](https://kaliberjs.github.io/build/) can handle for you.

This library is not transpiled.
