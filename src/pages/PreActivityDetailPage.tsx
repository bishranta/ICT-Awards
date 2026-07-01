import { Navigate, useParams, Link } from 'react-router-dom'
import { CaretLeft } from '@phosphor-icons/react'
import { PRE_ACTIVITIES } from '@/data/preActivities'
import { PRE_ACTIVITY_GALLERIES } from '@/data/preActivityGalleries'
import { RenderIcon } from '@/lib/renderIcon'
import SectionHeading from '@/components/ui/SectionHeading'
import PhotoGallery from '@/components/ui/PhotoGallery'

export default function PreActivityDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const event = PRE_ACTIVITIES.find(a => a.id === slug)

  if (!event) return <Navigate to="/pre-activities" replace />

  const photos = PRE_ACTIVITY_GALLERIES[event.id] ?? []

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-surface section-padding text-center">
        <div className="container-max">
          <div className="w-12 h-1 bg-gold rounded-full mx-auto mb-4" />
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
              <RenderIcon name={event.icon} size={22} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-ink">
            <span className="text-spectrum-a">{event.title}</span>
          </h1>
          <p className="mt-4 text-ink/80 max-w-2xl mx-auto leading-relaxed">
            {event.description}
          </p>
          <div className="mt-6">
            <Link
              to="/pre-activities"
              className="inline-flex items-center gap-1.5 text-sm text-ink/60 hover:text-ink transition-colors"
            >
              <CaretLeft size={14} />
              Back to Pre-Activities
            </Link>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="bg-surface-alt section-padding">
        <div className="container-max">
          <SectionHeading
            title="Photo Gallery"
            subtitle={`Moments from ${event.title}.`}
            className="mb-8"
          />
          <PhotoGallery photos={photos} year={2026} />
        </div>
      </section>
    </div>
  )
}
