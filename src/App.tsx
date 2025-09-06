import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Home,
  Flame,
  PlaySquare,
  Library,
  Search,
  User,
  Menu,
  Clock,
  ThumbsUp,
  History,
} from "lucide-react"

// Define video type
interface Video {
  id: number
  title: string
  channel: string
  views: string
  thumbnail: string
  src: string
  duration: string
  uploadedAt: string
  likes: string
}

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredVideos, setFilteredVideos] = useState<Video[]>([])

  // Sample video data with more realistic properties
  const videos: Video[] = [
    {
      id: 1,
      title: "How to Build a React Application in 2024",
      channel: "CodeWithMe",
      views: "245K views",
      thumbnail: "https://picsum.photos/seed/1/400/225",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      duration: "12:34",
      uploadedAt: "2 weeks ago",
      likes: "18K"
    },
    {
      id: 2,
      title: "Exploring Nature's Wonders - Documentary",
      channel: "NatureLovers",
      views: "1.2M views",
      thumbnail: "https://picsum.photos/seed/2/400/225",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      duration: "24:15",
      uploadedAt: "1 month ago",
      likes: "95K"
    },
    {
      id: 3,
      title: "Cooking the Perfect Steak | Chef's Special",
      channel: "CulinaryArts",
      views: "567K views",
      thumbnail: "https://picsum.photos/seed/3/400/225",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      duration: "8:42",
      uploadedAt: "5 days ago",
      likes: "42K"
    },
    {
      id: 4,
      title: "Morning Yoga Routine for Beginners",
      channel: "YogaWithTina",
      views: "892K views",
      thumbnail: "https://picsum.photos/seed/4/400/225",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      duration: "15:20",
      uploadedAt: "3 weeks ago",
      likes: "67K"
    },
    {
      id: 5,
      title: "Top 10 Travel Destinations 2024",
      channel: "TravelDiaries",
      views: "3.4M views",
      thumbnail: "https://picsum.photos/seed/5/400/225",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      duration: "18:09",
      uploadedAt: "2 months ago",
      likes: "210K"
    },
    {
      id: 6,
      title: "Learn JavaScript in 30 Days - Day 1",
      channel: "JavaScriptMaster",
      views: "189K views",
      thumbnail: "https://picsum.photos/seed/6/400/225",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      duration: "22:45",
      uploadedAt: "1 week ago",
      likes: "15K"
    },
    {
      id: 7,
      title: "DIY Home Decor on a Budget",
      channel: "CreativeHome",
      views: "756K views",
      thumbnail: "https://picsum.photos/seed/7/400/225",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      duration: "14:33",
      uploadedAt: "3 days ago",
      likes: "58K"
    },
    {
      id: 8,
      title: "Guitar Lessons for Beginners - Chords & Strumming",
      channel: "MusicMasters",
      views: "432K views",
      thumbnail: "https://picsum.photos/seed/8/400/225",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      duration: "16:22",
      uploadedAt: "1 month ago",
      likes: "31K"
    },
    {
      id: 9,
      title: "Productivity Hacks for Developers",
      channel: "DevProductivity",
      views: "321K views",
      thumbnail: "https://picsum.photos/seed/9/400/225",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      duration: "11:05",
      uploadedAt: "4 days ago",
      likes: "27K"
    },
    {
      id: 10,
      title: "Wildlife Photography Tips & Techniques",
      channel: "PhotoAdventures",
      views: "678K views",
      thumbnail: "https://picsum.photos/seed/10/400/225",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      duration: "19:48",
      uploadedAt: "2 weeks ago",
      likes: "49K"
    },
    {
      id: 11,
      title: "Meditation for Stress Relief",
      channel: "MindfulLiving",
      views: "912K views",
      thumbnail: "https://picsum.photos/seed/11/400/225",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      duration: "25:10",
      uploadedAt: "5 days ago",
      likes: "73K"
    },
    {
      id: 12,
      title: "Financial Planning for Young Professionals",
      channel: "FinanceSimplified",
      views: "445K views",
      thumbnail: "https://picsum.photos/seed/12/400/225",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      duration: "17:32",
      uploadedAt: "3 weeks ago",
      likes: "36K"
    }
  ]

  // Filter videos based on search query
  useEffect(() => {
    if (!searchQuery) {
      setFilteredVideos(videos)
    } else {
      const filtered = videos.filter(video => 
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.channel.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredVideos(filtered)
    }
  }, [searchQuery])

  return (
    <div className="flex h-screen bg-gray-50 text-gray-900">
      {/* Sidebar */}
      {sidebarOpen && (
        <aside className="w-60 border-r bg-white p-4 space-y-2">
          <nav className="space-y-1">
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Home className="h-5 w-5" /> Home
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Flame className="h-5 w-5" /> Trending
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <PlaySquare className="h-5 w-5" /> Subscriptions
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Library className="h-5 w-5" /> Library
            </Button>
            <hr className="my-2" />
            <Button variant="ghost" className="w-full justify-start gap-2">
              <History className="h-5 w-5" /> History
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <Clock className="h-5 w-5" /> Watch later
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
              <ThumbsUp className="h-5 w-5" /> Liked videos
            </Button>
          </nav>
        </aside>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="flex items-center justify-between border-b bg-white px-4 py-2 sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Link to="/" className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">SCOOB</h2>
            </Link>
          </div>

          <div className="flex flex-1 justify-center max-w-xl px-4">
            <div className="flex w-full items-center gap-2">
              <Input 
                placeholder="Search videos..." 
                className="flex-1" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button size="icon">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </header>

        {/* Video Grid */}
        <main className="flex-1 overflow-y-auto p-6">
          {filteredVideos.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full">
              <Search className="h-16 w-16 text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold">No videos found</h3>
              <p className="text-gray-600">Try different search terms</p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-6">Recommended Videos</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {filteredVideos.map((video) => (
                  <div key={video.id} className="group cursor-pointer">
                    <Link to={`/video/${video.id}`} state={video}>
                      <div className="relative rounded-lg bg-white shadow hover:shadow-lg transition overflow-hidden">
                        <div className="relative">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full aspect-video object-cover"
                          />
                          <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
                            {video.duration}
                          </div>
                        </div>
                        <div className="p-3">
                          <h3 className="font-semibold group-hover:text-blue-600 line-clamp-2 mb-1">
                            {video.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-1">{video.channel}</p>
                          <div className="flex text-xs text-gray-500">
                            <span>{video.views}</span>
                            <span className="mx-1">•</span>
                            <span>{video.uploadedAt}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  )
}