"use client"

import { useEffect, useRef } from "react"

export function BloodEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Blood particles
    const particles: Particle[] = []
    const maxParticles = 50

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      alpha: number
      decay: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.size = Math.random() * 20 + 5
        this.speedX = Math.random() * 3 - 1.5
        this.speedY = Math.random() * 3 - 1.5
        // Darker, more intense blood colors
        this.color = `rgba(${140 + Math.random() * 40}, ${Math.random() * 20}, ${Math.random() * 20}, ${Math.random() * 0.6 + 0.4})`
        this.alpha = 1
        this.decay = 0.005 + Math.random() * 0.015 // Slower decay for longer-lasting effect
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.alpha -= this.decay

        if (this.alpha <= 0) {
          this.alpha = 0
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color.replace(/[\d.]+\)$/g, `${this.alpha})`)
        ctx.fill()
      }
    }

    // Mouse position
    let mouseX = 0
    let mouseY = 0
    let isMouseMoving = false
    let lastMouseX = 0
    let lastMouseY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      isMouseMoving = true

      // Create particles when mouse moves
      if (Math.abs(mouseX - lastMouseX) > 5 || Math.abs(mouseY - lastMouseY) > 5) {
        for (let i = 0; i < 3; i++) {
          if (particles.length < maxParticles) {
            particles.push(new Particle(mouseX, mouseY))
          }
        }
      }

      lastMouseX = mouseX
      lastMouseY = mouseY
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    const animate = () => {
      // Apply a semi-transparent black fill to create trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw(ctx)

        // Remove particles with no opacity
        if (particles[i].alpha <= 0) {
          particles.splice(i, 1)
          i--
        }
      }

      // Create blood drip effect
      if (isMouseMoving && Math.random() > 0.7) {
        const drip = new Particle(mouseX + (Math.random() * 20 - 10), mouseY + (Math.random() * 20 - 10))
        drip.speedY = Math.random() * 2 + 1 // Drip downward
        drip.speedX = Math.random() * 0.4 - 0.2 // Slight horizontal movement
        drip.size = Math.random() * 8 + 2
        drip.decay = 0.005 + Math.random() * 0.01 // Slower decay for drips

        if (particles.length < maxParticles) {
          particles.push(drip)
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10" style={{ mixBlendMode: "multiply" }} />
  )
}

