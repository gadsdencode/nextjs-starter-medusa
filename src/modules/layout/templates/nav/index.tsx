import { cookies } from "next/headers"
import Link from "next/link"
import { Suspense } from "react"

import { listRegions } from "@lib/data"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const regions = await listRegions().then((regions) => regions)
  const regionCookie = cookies().get("_medusa_region")?.value
  const currentRegion = regionCookie && JSON.parse(regionCookie)

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-16 mx-auto border-b duration-200 header-bg border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full">
              <SideMenu regions={regions} currentRegion={currentRegion} />
            </div>
          </div>

          <div className="flex items-center h-full">
            <Link
              href="/"
              className="txt-compact-xlarge-plus text-slate-100 hover:text-slate-500 uppercase"
            >
              Heaters & Controls Hydraulics
            </Link>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && (
                <Link
                  className="hover:text-ui-fg-base"
                  href="/search"
                  scroll={false}
                >
                  Search
                </Link>
              )}
              <Link className="text-slate-100 hover:text-slate-500" href="/account">
                Account
              </Link>
            </div>
            <Suspense
              fallback={
                <Link className="text-slate-100 hover:text-slate-500 flex gap-2" href="/cart">
                  Cart (0)
                </Link>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
