# BEFORE YOU PUBLISH
- Read [Libraries van Kaliber](https://docs.google.com/document/d/1FrJi-xWtKkbocyMVK5A5_hupjl5E4gD4rDvATDlxWyc/edit#heading=h.bb3md3gyf493).
- Make sure your example works.
- Make sure your package.json is correct. Have you change the library title?
- Update the bin/postInstall script. It should refer to your library.
- Update the `<title>` tag in `index.html.js`.
- Remove 'BEFORE YOU PUBLISH' and 'PUBLISHING' from this document.

# PUBLISHING
- Make sure you are added to the kaliber organization on NPM
- run `yarn publish`
- Enter a correct version, we adhere to semantic versioning (semver)
- run `git push`
- run `git push --tags`
- Send everybody an email to introduce them to your library!

# Scroll velocity 
A library that returns an immutable value that signifies the users scroll velocity.

It returns a positive integer on down scroll and a negative integer on up scroll behavior.
The returned value is lerped, the lerp speed is currently handled by the libary itself, if you need additional smoothing you should either use your own lerp function or use it in conjunction with ThreeJS Math utils lerp.

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
        meshRef.current.rotation.z += scrollVelocity
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
