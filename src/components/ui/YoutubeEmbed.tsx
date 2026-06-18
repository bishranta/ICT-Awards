import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'

interface YoutubeEmbedProps {
  videoId: string
  title: string
  className?: string
}

export default function YoutubeEmbed({ videoId, title, className }: YoutubeEmbedProps) {
  return (
    <div className={className}>
      <div className="rounded-xl overflow-hidden">
        <LiteYouTubeEmbed id={videoId} title={title} />
      </div>
    </div>
  )
}
