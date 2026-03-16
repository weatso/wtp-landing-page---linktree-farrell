import { Metadata } from 'next'
import LinktreeView from '@/components/Linktree/LinktreeView'
import { client } from '@/sanity/lib/client'

export const revalidate = 0 // Disable cache for now to ensure fresh data during development

export async function generateMetadata(): Promise<Metadata> {
  const query = `*[_type == "linktreeSettings"][0]`
  const settings = await client.fetch(query)
  return {
    title: settings?.seoTitle || 'Links | WTP Organizer',
    description: settings?.seoDescription || 'Connect with WTP Event Organizer.',
  }
}

export default async function LinksPage() {
  const query = `*[_type == "linktreeSettings"][0]`
  const settings = await client.fetch(query)

  if (!settings) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 text-gray-500">
        <p>No Linktree settings found. Please configure them in Sanity Studio.</p>
      </div>
    )
  }

  return <LinktreeView data={settings} />
}
