// VideoPage.tsx (updated)
import { useLocation, useParams, Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { 
  ArrowLeft, 
  ThumbsUp, 
  ThumbsDown, 
  Share, 
  Download, 
  MoreHorizontal, 
} from "lucide-react"
import { useState } from "react"

export default function VideoPage() {
  const { id } = useParams()
  const location = useLocation()
  const video = location.state as {
    id: number
    title: string
    channel: string
    views: string
    src: string
    duration: string
    uploadedAt: string
    likes: string
  }

  const [liked, setLiked] = useState(false)
  const [disliked, setDisliked] = useState(false)

  // Related videos data
  const relatedVideos = [
    {
      id: 13,
      title: "Advanced React Patterns",
      channel: "React Masters",
      views: "189K views",
      thumbnail: "https://picsum.photos/seed/13/160/90",
      duration: "18:22",
      uploadedAt: "1 week ago"
    },
    {
      id: 14,
      title: "State Management in React",
      channel: "CodeWithMe",
      views: "223K views",
      thumbnail: "https://picsum.photos/seed/14/160/90",
      duration: "22:15",
      uploadedAt: "2 weeks ago"
    },
    {
      id: 15,
      title: "Building Responsive UIs",
      channel: "UI/UX Pro",
      views: "156K views",
      thumbnail: "https://picsum.photos/seed/15/160/90",
      duration: "14:40",
      uploadedAt: "5 days ago"
    }
  ]

  const handleLike = () => {
    setLiked(!liked)
    if (disliked) setDisliked(false)
  }

  const handleDislike = () => {
    setDisliked(!disliked)
    if (liked) setLiked(false)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="flex items-center justify-between border-b bg-white px-4 py-2 sticky top-0 z-10">
        <Link to="/" className="flex items-center gap-2">
          <ArrowLeft className="h-5 w-5" />
          <h1 className="text-xl font-bold">SCOOB</h1>
        </Link>
        <div className="flex-1 max-w-xl px-4">
          <input 
            type="text" 
            placeholder="Search" 
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <Button variant="outline">Sign In</Button>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row p-4 gap-6">
        {/* Video Player and Info */}
        <div className="lg:w-2/3">
          <div className="bg-black rounded-lg overflow-hidden">
            <video
              controls
              className="w-full aspect-video"
              src={video.src}
              poster={video.thumbnail}
            />
          </div>
          
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">{video.title}</h2>
            <div className="flex justify-between items-center mt-2">
              <div>
                <p className="text-gray-600 font-medium">{video.channel}</p>
                <p className="text-gray-500 text-sm">
                  {video.views} • {video.uploadedAt}
                </p>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant={liked ? "default" : "outline"} 
                  onClick={handleLike}
                  className="flex items-center gap-2"
                >
                  <ThumbsUp className="h-4 w-4" />
                  <span>{video.likes}</span>
                </Button>
                <Button 
                  variant={disliked ? "default" : "outline"} 
                  onClick={handleDislike}
                >
                  <ThumbsDown className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Share className="h-4 w-4" />
                  <span>Share</span>
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  <span>Download</span>
                </Button>
                <Button variant="outline">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Video Description */}
          <div className="mt-6 p-4 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-gray-700">
              This is a detailed description of the video content. It provides 
              more information about what viewers can expect to learn or see 
              in this video. You might include timestamps, resources mentioned, 
              or other relevant details here.
            </p>
          </div>

          {/* Comments Section */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Comments</h3>
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0"></div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">User {i}</span>
                      <span className="text-gray-500 text-sm">2 days ago</span>
                    </div>
                    <p className="mt-1">This is a great video! Very informative and well explained.</p>
                    <div className="flex items-center gap-3 mt-1">
                      <ThumbsUp className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-500">24</span>
                      <ThumbsDown className="h-4 w-4 text-gray-500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Videos Sidebar */}
        <div className="lg:w-1/3 mt-6 lg:mt-0">
          <h3 className="font-semibold mb-4">Related Videos</h3>
          <div className="space-y-3">
            {relatedVideos.map(relatedVideo => (
              <Link 
                key={relatedVideo.id} 
                to={`/video/${relatedVideo.id}`}
                className="flex gap-2"
              >
                <div className="relative w-40 h-24 flex-shrink-0">
                  <img 
                    src={relatedVideo.thumbnail} 
                    alt={relatedVideo.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                    {relatedVideo.duration}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm line-clamp-2">{relatedVideo.title}</h4>
                  <p className="text-xs text-gray-600 mt-1">{relatedVideo.channel}</p>
                  <p className="text-xs text-gray-500">
                    {relatedVideo.views} • {relatedVideo.uploadedAt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}