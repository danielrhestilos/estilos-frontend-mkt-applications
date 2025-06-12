import React from 'react'

interface VideoPlayerProps {
  url: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  const isYouTubeOrVimeo =
    url.includes('youtube.com') || url.includes('vimeo.com')

  if (isYouTubeOrVimeo) {
    return (
      <div>
        <iframe
          src={url}
          title="Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <video
        autoPlay
        loop
        className="w-full rounded-xl shadow-md"
        style={{ margin: 'auto', height: 'auto' }}
      >
        <source src={url} type="video/mp4" />
        Tu navegador no soporta la reproducción de video.
      </video>
    </div>
  )
}

export default VideoPlayer
