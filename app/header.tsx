'use client'
import React, { useState } from 'react'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'
import { X } from 'lucide-react'
import { motion } from 'motion/react'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'

export function Header() {
  return (
    <>
      <header className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <MorphingDialog
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.3,
            }}
          >
            <MorphingDialogTrigger>
              <div className="cursor-pointer">
                <Image
                  src="/profile.jpeg"
                  alt="Profile picture"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </div>
            </MorphingDialogTrigger>
            <MorphingDialogContainer>
              <MorphingDialogContent className="relative flex items-center justify-center">
                <Image
                  src="/profile.jpeg"
                  alt="Profile picture"
                  width={400}
                  height={400}
                  className="max-h-[70vh] max-w-full rounded-full object-contain shadow-lg"
                />
              </MorphingDialogContent>
              <MorphingDialogClose
                className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
                variants={{
                  initial: { opacity: 0 },
                  animate: {
                    opacity: 1,
                    transition: { delay: 0.3, duration: 0.1 },
                  },
                  exit: { opacity: 0, transition: { duration: 0 } },
                }}
              >
                <X className="h-5 w-5 text-zinc-500" />
              </MorphingDialogClose>
            </MorphingDialogContainer>
          </MorphingDialog>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Link
                href="/"
                className="text-2xl font-medium text-black transition-colors duration-200 hover:text-zinc-700 dark:text-white dark:hover:text-zinc-300"
              >
                Irfan Hanif Habibi
              </Link>
            </motion.div>
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
    </>
  )
}
