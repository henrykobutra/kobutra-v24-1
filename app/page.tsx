'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/moving-border';
import { FlipWords } from '@/components/ui/flip-words';
import Image from 'next/image';
import AnimatedGradientText from '@/components/ui/animated-gradient-text';
import { BorderBeam } from '@/components/ui/border-beam';
import IconCloud from '@/components/ui/icon-cloud';
import Globe from '@/components/ui/globe';

export default function Home() {
  const yearsSince2009 = new Date().getFullYear() - 2009;
  const capacities = [
    'building',
    'designing',
    'coding',
    'marketing',
    'growing',
    'launching',
    'scaling',
    'fixing',
  ];
  const iconSlugs = [
    'typescript',
    'javascript',
    'figma',
    'tailwindcss',
    'svelte',
    'vercel',
    'stripe',
    'openai',
    'nextdotjs',
    'react',
    'nodedotjs',
    'firebase',
    'mysql',
    'postgresql',
    'mongodb',
    'cloudflare',
    'raycast',
    'notion',
    'slack',
    'discord',
    'github',
    'gitlab',
    'trello',
    'jira',
    'asana',
    'airtable',
    'googleanalytics',
    'googlecloud',
    'aws',
    'mixpanel',
    'html5',
    'css3',
    'flutter',
    'vite',
    'googletagmanager',
    'posthog',
    'anthropic',
    'perplexity',
    'googlegemini',
    'snowflake',
    'excalidraw',
    'microsoftexcel',
    'powerbi',
    'windows11',
    'tableau',
    'macos',
    'iterm2',
    'visualstudiocode',
    'wordpress',
    'playwright',
    'homebrew',
  ];
  const navigation = {
    social: [
      {
        name: 'X',
        href: 'https://x.com/henrykobutra',
        icon: (
          props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
        ) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
          </svg>
        ),
      },
      {
        name: 'GitHub',
        href: 'github.com/henrykobutra',
        icon: (
          props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
        ) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'YouTube',
        href: 'https://youtube.com/@henryinusa',
        icon: (
          props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
        ) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  };
  return (
    <>
      <div className="flex w-full flex-col items-center bg-white text-black dark:bg-slate-900  dark:text-white">
        <main className="max-w-7xl p-10">
          {/* Mini Nav Bar */}
          <nav>
            <ul className="flex justify-end gap-4 px-4">
              <li>
                <a href="https://linkedin.com/in/henrykobutra" target="_blank">
                  <Button
                    borderRadius="1.75rem"
                    className="border-neutral-200 bg-white text-black dark:border-slate-800 dark:bg-slate-900 dark:text-white"
                  >
                    <span className="px-4 py-2 text-lg font-semibold">
                      LinkedIn
                    </span>
                  </Button>
                </a>
              </li>
            </ul>
          </nav>
          <section id="intro" className="flex w-full flex-col items-center">
            <div className="max-w-2xl">
              <h1 className="text-7xl font-semibold">
                Hello,
                <br />
                I&apos;m Henry
              </h1>
              <h2 className="pl-24 pt-4 text-4xl font-light">
                —a product management leader, launching teams, features, and
                products to stardom ⭐️
              </h2>
            </div>
            <Image
              src="/images/henry_sticky_notes.jpg"
              width={1000}
              height={1000}
              alt="Henry pointing at sticky notes on a whiteboard"
              className="my-14 rounded-lg border border-slate-400"
            />
          </section>
          <section id="about" className="flex w-full flex-col items-center">
            <div className="max-w-2xl text-2xl">
              I&apos;ve spent the last <strong>{yearsSince2009} years</strong>
              <FlipWords words={capacities} />
              <br />
              websites, features, and mobile apps for startups and enterprises
              in various sectors including AI, SaaS, finance, e-commerce, and
              more.
            </div>
          </section>
          <section
            id="experiments"
            className="flex w-full items-center justify-center py-24 text-2xl"
          >
            <div className="max-w-2xl">
              Incredible advancements in AI are happening every day. That&apos;s
              why I dedicated eight weekends in December 2023 to create{' '}
              <a href="https://resumo.cc" target="_blank">
                <span className="inline-block">
                  <AnimatedGradientText>
                    <span
                      className={cn(
                        `animate-gradient bg-gradient-to-r from-[#FF9F37] via-[#0BA5EC] to-[#FF9F37] bg-[length:var(--bg-size)_100%] bg-clip-text text-2xl text-transparent`,
                      )}
                    >
                      ✨ Resumo
                    </span>
                  </AnimatedGradientText>
                </span>
              </a>
              — an AI-powered resume generator with a spark.
              <a href="https://youtu.be/wuLxnK1S5_g" target="_blank">
                <div className="relative my-12 rounded-xl">
                  <Image
                    src="/images/resumo.jpg"
                    width={1280}
                    height={720}
                    alt="Resumo YouTube video"
                    className="rounded-[inherit] border object-contain shadow-xl"
                  />
                  <BorderBeam size={250} duration={12} delay={9} />
                </div>
              </a>
              <p>
                This is a solo project where I got to experiment with
                OpenAI&apos;s API, SvelteKit, Tailwind CSS, TypeScript, Stripe
                API, Vercel and a few other things. I had a lot of fun talking
                to beta users and iterating on the product.
              </p>
            </div>
          </section>
          <section
            id="tools"
            className="flex w-full flex-col items-center justify-center py-24 text-2xl"
          >
            {/* Icon Cloud */}
            <div className="flex max-w-2xl items-center justify-center overflow-hidden">
              <IconCloud iconSlugs={iconSlugs} />
            </div>
            <p className="font-serif text-sm font-light italic text-slate-400">
              Fig 1: Some of the tools and frameworks that I&apos;m comfortable.
              with
            </p>
          </section>
          <section
            id="content"
            className="flex w-full flex-col items-center justify-center py-24 text-2xl"
          >
            <div className="max-w-2xl">
              I also enjoy creating content and have a little over 10,000
              subscribers on{' '}
              <a href="https://youtube.com/@henryinusa" target="_blank">
                <span className="inline-block">
                  <AnimatedGradientText>
                    <span
                      className={cn(
                        `animate-gradient bg-gradient-to-r from-[#000] via-[#FF0000] to-[#000] bg-[length:var(--bg-size)_100%] bg-clip-text text-2xl text-transparent`,
                      )}
                    >
                      YouTube
                    </span>
                  </AnimatedGradientText>
                </span>
              </a>
              .
              <Image
                src="/images/henry_making_youtube.jpg"
                width={1000}
                height={1000}
                alt="Henry making YouTube videos"
                className="my-14 rounded-lg border border-slate-400"
              />
            </div>
          </section>
          <section
            id="globe"
            className="flex w-full flex-col items-center justify-center  pb-12 text-2xl"
          >
            <div className="max-w-2xl">
              <p>
                Born in Thailand, raised in Germany, and now in Texas as an
                EB-1A immigrant, I&apos;ve developed deep empathy for diverse
                cultures. Fluent in three languages and quick to pick up new
                ones, I&apos;m always eager to learn and grow.
              </p>
              <div className="flex flex-col items-center">
                <div className="relative h-96 w-96">
                  <Globe className="" />
                </div>
                <p className="font-serif text-sm italic text-slate-400">
                  Fig 2: Dots indicate places traveled and lived.
                </p>
              </div>
            </div>
          </section>
          <section
            id="ending"
            className="flex w-full flex-col items-center text-2xl"
          >
            <div className="flex max-w-2xl flex-col gap-4">
              <h3 className="font-bold">Ready to Connect and Collaborate?</h3>
              <p>
                I&apos;ve built this website to share a little beyond my{' '}
                <a
                  href="https://www.linkedin.com/in/henrykobutra/"
                  target="_blank"
                  className="text-blue-500 underline transition-colors hover:text-blue-700"
                >
                  LinkedIn
                </a>{' '}
                page, where most people look me up professionally or otherwise.
                Whether you&apos;re looking to enhance your product management
                team, explore the potential of AI in your projects, or simply
                want to connect and share ideas, I&apos;d love to hear from you.
              </p>
              <p className="text-sm italic text-slate-400">
                I respond to most LinkedIn messages within 24 hours. (Unless
                it&apos;s spam, of course.)
              </p>
              <p className="font-serif italic">
                Let&apos;s build something amazing together.
              </p>
            </div>
          </section>
        </main>
        <footer className="bg-white">
          <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
            <nav
              className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
              aria-label="Footer"
            ></nav>
            <div className="mt-10 flex justify-center space-x-10">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="text-gray-400 transition-all hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="mt-10 text-center text-xs leading-5 text-gray-500">
              &copy; {new Date().getFullYear()} Henry Kobutra. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
