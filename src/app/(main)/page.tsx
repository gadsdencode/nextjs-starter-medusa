import { Product } from "@medusajs/medusa"
import { Metadata } from "next"

import { getCollectionsList, getProductsList } from "@lib/data"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

const getCollectionsWithProducts = async () => {
  const { collections } = await getCollectionsList(0, 3).then(
    (collections) => collections
  )

  if (!collections) {
    return null
  }

  const collectionIds = collections.map((collection) => collection.id)

  await Promise.all(
    collectionIds.map((id) =>
      getProductsList({ queryParams: { collection_id: [id] } })
    )
  ).then((responses) =>
    responses.forEach(({ response, queryParams }) => {
      let collection

      if (collections) {
        collection = collections.find(
          (collection) => collection.id === queryParams?.collection_id?.[0]
        )
      }

      if (!collection) {
        return
      }

      collection.products = response.products as unknown as Product[]
    })
  )

  return collections
}

export default async function Home() {
  const collections = await getCollectionsWithProducts()

  if (!collections) {
    return null
  }

  return (
    <>
      <Hero />
      <script dangerouslySetInnerHTML={{
    __html: `
    window.difyChatbotConfig = {
      token: 'db4qUU4YuNIh3uDv'
    };
  `
}}
/>
<script
 src="https://udify.app/embed.min.js"
 id="db4qUU4YuNIh3uDv"
 defer>
</script>
      <div className="py-12 bg-slate-900">
        <ul className="flex flex-col gap-x-6 bg-slate-900">
          <FeaturedProducts collections={collections} />
        </ul>
      </div>
    </>
  )
}
