"use client";
import { UserProfile } from "@/components/user-profile"
import { RedBeam } from "@/components/red-beam"
import { motion } from "motion/react"

// Mock data for user profiles
const members = [
  {
    id: 1,
    name: "nath",
    username: "@comfortchainn",
    avatar: "/images/pasifixc.webp?height=100&width=100",
    bio: "gwe njir",
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
    bio: "ore wa strika da!!",
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
    name: "freacias",
    username: "@rvnggakbar",
    avatar: "/images/pasifixc.webp?height=100&width=100",
    bio: "",
  },
  {
    id: 6,
    name: "carlos",
    username: "@yarloss",
    avatar: "/images/pasifixc.webp?height=100&width=100",
    bio: "",
  },
  {
    id: 7,
    name: "claw",
    username: "@clawsie.",
    avatar: "/images/pasifixc.webp?height=100&width=100",
    bio: "",
  },
]

export default function MembersPage() {
  return (
    <div
      className="relative min-h-[calc(100vh-64px)] py-12">
      <RedBeam />

      <div className="container mx-auto px-4 z-10 relative">
        <motion.h1 className="text-3xl md:text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay:0, duration: 2, type: "spring", stiffness: 200, damping: 20 }}
        >
          <span className="text-red-500">;</span>Members
        </motion.h1>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay:0.1, duration: 2, type: "spring", stiffness: 200, damping: 20 }}
        >
          {members.map((member) => (
            <UserProfile key={member.id} user={member} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

