import { UserProfile } from "@/components/user-profile"
import { RedBeam } from "@/components/red-beam"

// Mock data for user profiles
const members = [
  {
    id: 1,
    name: "Nath",
    username: "@comfortchainn",
    avatar: "/images/pasifixc.webp?height=100&width=100",
    bio: "mnjir gweh",
  },
  {
    id: 2,
    name: "levia",
    username: "@7levia",
    avatar: "/images/pasifixc.webp?height=100&width=100",
    bio: "emmuach❤️",
  },
  {
    id: 3,
    name: "blur",
    username: "@directional.blur",
    avatar: "/images/pasifixc.webp?height=100&width=100",
    bio: "",
  },
  {
    id: 4,
    name: "rafwpu 💔",
    username: "@rafwpu",
    avatar: "/images/pasifixc.webp?height=100&width=100",
    bio: "",
  },
  {
    id: 5,
    name: "frecias",
    username: "@rvnggakbar",
    avatar: "/images/pasifixc.webp?height=100&width=100",
    bio: "",
  },

]

export default function MembersPage() {
  return (
    <div className="relative min-h-[calc(100vh-64px)] py-12">
      <RedBeam />

      <div className="container mx-auto px-4 z-10 relative">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          <span className="text-red-500">;</span>Members
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => (
            <UserProfile key={member.id} user={member} />
          ))}
        </div>
      </div>
    </div>
  )
}

