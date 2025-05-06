export function useScrollVelocity() {
  const velocity = React.useRef(0)
  const rawVelocity = React.useRef(0)

  React.useEffect(() => {
    let lastScrollY = window.scrollY
    let lastTime = performance.now()
    let animationFrameId

    function updateVelocity() {
      const now = performance.now()
      const currentScrollY = window.scrollY
      const deltaY = currentScrollY - lastScrollY
      const deltaTime = now - lastTime

      const instantVelocity = (deltaY / deltaTime) * 1000
      rawVelocity.current = instantVelocity

      lastScrollY = currentScrollY
      lastTime = now

      animationFrameId = requestAnimationFrame(updateVelocity)
    }

    animationFrameId = requestAnimationFrame(updateVelocity)

    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  React.useEffect(() => {
    let animationFrameId

    function smoothUpdate() {
      const target = rawVelocity.current
      const lerpSpeed = 0.1

      velocity.current += (target - velocity.current) * lerpSpeed

      animationFrameId = requestAnimationFrame(smoothUpdate)
    }

    animationFrameId = requestAnimationFrame(smoothUpdate)

    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return velocity
}
