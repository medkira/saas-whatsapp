import { Link } from '@nextui-org/link';
import { Snippet } from '@nextui-org/snippet';
import { Code } from '@nextui-org/code';
import { button as buttonStyles } from '@nextui-org/theme';

import { siteConfig } from '@/config/site';
import { title, subtitle } from '@/components/primitives';
import { GithubIcon } from '@/components/icons';
import { lusitana, roboto } from '@/config/fonts';
import Image from 'next/legacy/image';
import Meteors from '@/components/magicui/meteors';
import landing from '../../public/images/landing.jpg';

export default function Home() {
  return (
    // <div className=" flex h-[100%] flex-col content-center justify-end bg-black">
    <section
      className={` gap-4py-8 flex   flex-col items-center justify-center md:py-10   ${roboto.className} `}
    >
      {/* Hero Section */}
      <div className="h-[100vh]">
        <Image
          alt="Background Image"
          className="relative"
          layout="fill"
          objectFit="cover"
          src={landing}
        />
        <div className="relative flex  h-[50hv] w-full flex-col items-center justify-center  overflow-hidden  bg-transparent  ">
          <Meteors number={40} />

          <div className="inline-block justify-center text-center">
            <h1 className={title()}>Level&nbsp;</h1>
            <h1 className={title({})}>Up&nbsp;</h1>
            <h1 className={title()}>Your </h1>
            {/* <h1 className={title()}>Your Website</h1> */}
            <br className="mb-4" />
            <h1 className={title()}>Online</h1>
            <h1 className={title({ color: 'blue' })}>&nbsp;Presence</h1>
          </div>
          <div className=" mt-4 w-full text-center font-medium text-cyan-50 sm:text-2xl">
            <h2>
              Watch Your Business Shine with Fast and Beautiful Websites with
              Total Tech
            </h2>
          </div>
        </div>
      </div>

      {/* <div className="h-[500px] w-full bg-black">a</div> */}

      <div className=" relative flex  h-[100vh] flex-col items-center justify-center overflow-hidden text-center   ">
        <div className=" w-48  sm:w-full">
          <h1 className={title({ size: 'sm' })}>
            Why{' '}
            <span className={title({ color: 'blue', size: 'sm' })}>
              Should You Care?
            </span>
          </h1>
        </div>
        <h2 className={subtitle({ class: 'mt-3 w-80' })}>
          Your competitors are already using SaaSy Land and similar products,
          gaining time and competitive advantage. Don&apos;t get left behind!
        </h2>
        {/* <h1 className={title({ color: 'blue' })}>&nbsp;Should You Care?</h1> */}
      </div>
    </section>
  );
}

{
  /* <div className="inline-block justify-center text-center"> */
}
{
  /* <h1 className={title()}>Level&nbsp;</h1>
        <h1 className={title({ color: 'blue' })}>Up&nbsp;</h1>
        <h1 className={title()}>Your Website</h1>
        <br className="mb-4" />
        <h1 className={title()}>Online</h1>
        <h1 className={title({ color: 'blue' })}>&nbsp;Presence</h1> */
}
{
  /* <br />
        <h1 className={title()}>We Build</h1>ù
        <h1 className={title({ color: 'blue' })}>&nbsp;Websites</h1>
        <h1 className={title()}>&nbsp;that Impress</h1> */
}

{
  /* <h1 className={title({ color: 'blue' })}>&nbsp;Impress</h1> */
}
{
  /* <h2 className={subtitle({ class: 'mt-4' })}>
          Beautiful, fast and modern.
        </h2> */
}
{
  /* </div> */
}
{
  /* Level Up Your Online Presence. We Build Websites that Impress. */
}
{
  /* <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: 'primary',
            radius: 'full',
            variant: 'shadow',
          })}
          href={siteConfig.links.docs}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: 'bordered', radius: 'full' })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div> */
}
{
  /* 
      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="flat">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div> */
}
