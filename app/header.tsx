'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src="/profile.jpg"
          alt="Irfan Hanif Habibi"
          width={60}
          height={60}
          className="rounded-full"
        />
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
  )
}
