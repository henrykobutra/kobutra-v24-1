'use client';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { LampContainer } from '@/components/ui/lamp';
import { Button } from '@/components/ui/moving-border';

export default function NotFound() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 0 }}
        whileInView={{ opacity: 1, y: -200 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        404 <br />
        Nothing to see here
      </motion.h1>
      <Link href="/">
        <Button
          borderRadius="1.75rem"
          className="border-neutral-200 bg-white text-black dark:border-slate-800 dark:bg-slate-900 dark:text-white"
        >
          <span className="px-4 py-2 text-lg font-semibold">
            Go To Homepage
          </span>
        </Button>
      </Link>
    </LampContainer>
  );
}
