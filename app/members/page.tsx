import { supabase } from "@/lib/supabase";
import { UserProfile } from "@/components/user-profile";
import { RedBeam } from "@/components/red-beam";
import Motions from "@/components/text-motion";

type Member = {
  id: number;
  name: string;
  username: string;
  avatar: string;
  bio: string;
};

export default async function MembersPage() {
  const { data: members, error } = await supabase
    .from("members")
    .select("id, name, username, avatar, bio");

  if (error) {
    console.error("Error fetching members:", error);
    return <p className="text-center text-red-500">Failed to load members.</p>;
  }

  return (
    <div className="relative min-h-[calc(100vh-64px)] py-12">
      <RedBeam />
      <div className="container mx-auto px-4 z-10 relative">
        <Motions
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0,
            duration: 2,
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
        >
          <span className="text-red-500">;</span>Members
        </Motions>

        <Motions
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 2,
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
        >
          {members?.map((member, index) => (
            <Motions
              key={member.id}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 2,
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            >
              <UserProfile key={member.id} user={member} />
            </Motions>
          ))}
        </Motions>
      </div>
    </div>
  );
}
