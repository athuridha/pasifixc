"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

interface Member {
  id: number;
  name: string;
  username: string;
  avatar: string;
  bio: string;
}

export default function AdminMembersPage() {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(false);
  const [newMember, setNewMember] = useState({ name: "", username: "", bio: "" });
  const [editedMember, setEditedMember] = useState<{ [key: number]: Partial<Member> }>({});

  useEffect(() => {
    async function fetchMembers() {
      const { data, error } = await supabase.from("members").select("*");
      if (error) console.error("Error fetching members:", error);
      if (data) setMembers(data);
    }
    fetchMembers();
  }, []);

  async function handleAddMember() {
    if (!newMember.name || !newMember.username) return alert("Name dan username harus diisi!");

    setLoading(true);
    const { data, error } = await supabase
      .from("members")
      .insert([{ ...newMember, avatar: "" }])
      .select()
      .single();

    if (error) {
      console.error("Error adding member:", error);
      alert("Gagal menambahkan member");
    } else {
      setMembers([...members, data]);
      setNewMember({ name: "", username: "", bio: "" });
    }
    setLoading(false);
  }

  async function handleApplyChanges(id: number) {
    if (!editedMember[id]) return;

    setLoading(true);
    const { error } = await supabase.from("members").update(editedMember[id]).eq("id", id);
    if (error) {
      console.error("Error updating member:", error);
      alert("Gagal menyimpan perubahan");
    } else {
      setMembers(members.map((m) => (m.id === id ? { ...m, ...editedMember[id] } : m)));
      setEditedMember((prev) => {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      });
    }
    setLoading(false);
  }

  function handleEditMember(id: number, key: keyof Member, value: string) {
    setEditedMember((prev) => ({
      ...prev,
      [id]: { ...prev[id], [key]: value },
    }));
  }

  async function handleDeleteMember(id: number) {
    if (!confirm("Yakin ingin menghapus member ini?")) return;

    setLoading(true);
    const { error } = await supabase.from("members").delete().eq("id", id);
    if (error) {
      console.error("Error deleting member:", error);
      alert("Gagal menghapus member");
    } else {
      setMembers(members.filter((m) => m.id !== id));
    }
    setLoading(false);
  }

  async function handleUploadAvatar(e: React.ChangeEvent<HTMLInputElement>, memberId: number) {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/upload-avatar", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      alert("Gagal mengupload avatar");
      return;
    }

    const { filePath } = await response.json();

    // Simpan ke editedMember untuk tombol Apply
    handleEditMember(memberId, "avatar", filePath);
  }

  return (
    <div className="p-6 max-w-3xl mx-auto bg-gray-900 text-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-blue-400">Manage Members</h1>

      {/* Form Tambah Member */}
      <div className="p-4 border border-gray-700 rounded-lg bg-gray-800 shadow mb-4">
        <h2 className="text-xl font-bold text-green-400">Add New Member</h2>
        <input
          className="mt-2 border p-2 w-full bg-gray-700 text-white rounded"
          placeholder="Name"
          value={newMember.name}
          onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
        />
        <input
          className="mt-2 border p-2 w-full bg-gray-700 text-white rounded"
          placeholder="Username"
          value={newMember.username}
          onChange={(e) => setNewMember({ ...newMember, username: e.target.value })}
        />
        <textarea
          className="mt-2 border p-2 w-full bg-gray-700 text-white rounded"
          placeholder="Bio"
          value={newMember.bio}
          onChange={(e) => setNewMember({ ...newMember, bio: e.target.value })}
        />
        <button
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={handleAddMember}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Member"}
        </button>
      </div>

      {/* List Members */}
      <div className="grid grid-cols-1 gap-4">
        {members.map((member) => (
          <div
            key={member.id}
            className="p-4 border border-gray-700 rounded-lg bg-gray-800 shadow-lg flex flex-col gap-2"
          >
            <input
              className="text-lg font-semibold bg-transparent text-white border-b border-gray-500 focus:outline-none"
              value={editedMember[member.id]?.name ?? member.name}
              onChange={(e) => handleEditMember(member.id, "name", e.target.value)}
            />
            <input
              className="text-sm text-gray-400 bg-transparent border-b border-gray-500 focus:outline-none"
              value={editedMember[member.id]?.username ?? member.username}
              onChange={(e) => handleEditMember(member.id, "username", e.target.value)}
            />
            <textarea
              className="text-sm text-gray-300 bg-transparent border-b border-gray-500 focus:outline-none"
              value={editedMember[member.id]?.bio ?? member.bio}
              onChange={(e) => handleEditMember(member.id, "bio", e.target.value)}
            />

            <input
              type="file"
              className="text-sm text-gray-300"
              onChange={(e) => handleUploadAvatar(e, member.id)}
            />

            {/* Tombol Apply */}
            {editedMember[member.id] && (
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                onClick={() => handleApplyChanges(member.id)}
                disabled={loading}
              >
                Apply
              </button>
            )}

            {/* Tombol Delete */}
            <button
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              onClick={() => handleDeleteMember(member.id)}
              disabled={loading}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
