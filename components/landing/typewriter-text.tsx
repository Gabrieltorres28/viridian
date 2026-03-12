"use client"

import { useEffect, useState } from "react"

type TypewriterTextProps = {
  words?: string[]
  text?: string
  className?: string
  resetKey?: number
  loop?: boolean
  typingSpeed?: number
  deletingSpeed?: number
  pauseMs?: number
  showCursor?: boolean
}

export function TypewriterText({
  words,
  text,
  className = "",
  resetKey = 0,
  loop = true,
  typingSpeed = 85,
  deletingSpeed = 40,
  pauseMs = 1400,
  showCursor = true,
}: TypewriterTextProps) {
  const sequence = words?.length ? words : [text ?? ""]
  const [wordIndex, setWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    setWordIndex(0)
    setDisplayText("")
    setIsDeleting(false)
  }, [resetKey])

  useEffect(() => {
    const currentWord = sequence[wordIndex] ?? ""
    if (!currentWord) return
    if (!loop && sequence.length === 1 && displayText === currentWord) return

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting) {
          const nextText = currentWord.slice(0, displayText.length + 1)
          setDisplayText(nextText)

          if (nextText === currentWord) {
            if (!loop && sequence.length === 1) return
            setIsDeleting(true)
          }

          return
        }

        const nextText = currentWord.slice(0, Math.max(displayText.length - 1, 0))
        setDisplayText(nextText)

        if (nextText.length === 0) {
          setIsDeleting(false)
          setWordIndex((currentIndex) => (currentIndex + 1) % sequence.length)
        }
      },
      !isDeleting && displayText.length === currentWord.length
        ? pauseMs
        : isDeleting
          ? deletingSpeed
          : typingSpeed,
    )

    return () => window.clearTimeout(timeout)
  }, [deletingSpeed, displayText, isDeleting, loop, pauseMs, sequence, typingSpeed, wordIndex])

  return (
    <span className={className}>
      {displayText}
      {showCursor ? <span className="tw-caret">|</span> : null}
    </span>
  )
}
