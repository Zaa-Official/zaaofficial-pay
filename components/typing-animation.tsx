"use client"

import { useState, useEffect } from "react"

const tutorialSteps = [
  "Pilih metode pembayaran yang Anda inginkan",
  "Klik tombol 'Bayar Sekarang' di header",
  "Pilih Dana, GoPay, OVO, atau QRIS",
  "Ikuti instruksi pembayaran yang muncul",
  "Selesaikan transaksi dengan mudah dan aman",
]

export function TypingAnimation() {
  const [currentStep, setCurrentStep] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const text = tutorialSteps[currentStep]

    if (isTyping) {
      if (currentText.length < text.length) {
        const timeout = setTimeout(() => {
          setCurrentText(text.slice(0, currentText.length + 1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000)
        return () => clearTimeout(timeout)
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1))
        }, 30)
        return () => clearTimeout(timeout)
      } else {
        setCurrentStep((prev) => (prev + 1) % tutorialSteps.length)
        setIsTyping(true)
      }
    }
  }, [currentText, currentStep, isTyping])

  return (
    <div className="h-16 flex items-center">
      <p className="text-lg text-muted-foreground">
        {currentText}
        <span className="animate-pulse">|</span>
      </p>
    </div>
  )
}
