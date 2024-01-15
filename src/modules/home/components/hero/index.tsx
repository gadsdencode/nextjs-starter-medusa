import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import UnderlineLink from "@modules/common/components/interactive-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-slate-900/75">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6 front-page-bg">
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span className="bg-slate-900/60 w-screen rounded-lg p-3">
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base text-white font-normal"
          >
            Heaters & Controls Hydraulics
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle text-slate-400 font-normal"
          >
            Family Owned Since 1984
          </Heading>
          <div className="flex flex-col justify-center items-center p-5">
        <a
          href="/store"
          target="_blank"
        >
          <UnderlineLink href="/store">
            Products & Services
          </UnderlineLink>
        </a>
        </div>
        </span>
        </div>
      </div>
    </div>
  )
}

export default Hero
