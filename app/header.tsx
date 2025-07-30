'use client'
import React, { useState } from 'react'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'
import { X } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
            <Image
              src="/profile.jpeg"
              alt="Profile picture"
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>
          <div>
            <Link
              href="/"
              className="text-2xl font-medium text-black dark:text-white"
            >
              Irfan Hanif Habibi
            </Link>
            <TextEffect
              as="p"
              preset="fade"
              per="char"
              className="text-xl text-zinc-600 dark:text-zinc-500"
              delay={0.5}
            >
              Software Engineer
            </TextEffect>
          </div>
        </div>
      </header>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="fixed top-4 right-4 z-60 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
          >
            <X size={24} />
          </button>

          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src="/profile.jpeg"
              alt="Profile picture"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          </div>
        </div>
      )}
    </>
  )
}
