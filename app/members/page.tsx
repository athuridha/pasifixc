'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/supabaseClient'
import { UserProfile } from '@/components/user-profile'
import { RedBeam } from '@/components/red-beam'
import NoSSR from '@/components/NoSSR'

export default function MembersPage() {
  const [members, setMembers] = useState<any[]>([])

  useEffect(() => {
    const fetchMembers = async () => {
      const { data, error } = await supabase
        .from('Members')
        .select('*')

      if (error) {
        console.error('Error fetching members:', error)
      } else {
        setMembers(data)
      }
    }

    fetchMembers()
  }, [])

  return (
    <div className="relative min-h-[calc(100vh-64px)] py-12">
      <RedBeam />

      <div className="container mx-auto px-4 z-10 relative">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          <span className="text-red-500">;</span>Members
        </h1>

        <NoSSR>
          <div className="sm:overflow-x-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {members.map((member, index) => (
                <div
                  key={member.id}
                  className="opacity-0 animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.3}s`, animationFillMode: 'forwards' }}
                >
                  <UserProfile user={member} />
                </div>
              ))}
            </div>
          </div>
        </NoSSR>
      </div>
    </div>
  )
}