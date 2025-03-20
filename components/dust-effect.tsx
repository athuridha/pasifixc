"use client"

import { useEffect, useRef } from "react"

export function DustEffect() {
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

    // Dust particles
    const particles: Particle[] = []
    const maxParticles = 30

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
        this.size = Math.random() * 3 + 1 // Smaller particles for dust
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
        // Dust-like colors (greyish)
        const dustColor = 180 + Math.random() * 40
        this.color = `rgba(${dustColor}, ${dustColor}, ${dustColor}, ${Math.random() * 0.5 + 0.3})`
        this.alpha = 1
        this.decay = 0.02 + Math.random() * 0.02 // Faster decay for dust
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.alpha -= this.decay
        
        // Add some random movement for dust-like behavior
        this.speedX += (Math.random() - 0.5) * 0.1
        this.speedY += (Math.random() - 0.5) * 0.1

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
      if (Math.abs(mouseX - lastMouseX) > 2 || Math.abs(mouseY - lastMouseY) > 2) {
        for (let i = 0; i < 2; i++) {
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
      ctx.clearRect(0, 0, canvas.width, canvas.height)

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

      // Create scattered dust effect
      if (isMouseMoving && Math.random() > 0.8) {
        const dust = new Particle(
          mouseX + (Math.random() * 10 - 5),
          mouseY + (Math.random() * 10 - 5)
        )
        if (particles.length < maxParticles) {
          particles.push(dust)
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
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-10" 
      style={{ mixBlendMode: "soft-light" }} 
    />
  )
}
