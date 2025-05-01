'use client';
import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import { User, Mail, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const ProfilePage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <div className="flex items-center justify-center text-lg text-white h-screen">Loading...</div>;
  }

  if (!session) {
    return (
      <div className="text-white min-h-screen flex flex-col items-center justify-center text-center px-4">
        <User size={48} className="text-gray-500 mb-4" />
        <h2 className="text-xl font-semibold mb-2">You're not logged in</h2>
        <p className="mb-4">Please sign in to view your profile.</p>
        <button
          onClick={() => router.push('/')}
          className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
        >
          Sign In Now
        </button>
      </div>
    );
  }

  const { user } = session;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 text-white bg-black">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-gray-900 rounded-xl shadow-lg p-6 sm:p-8 text-center">
        
        {/* Avatar */}
        <div className="relative w-32 h-32 mx-auto mb-6">
          <Image
            src={user?.image || '/default-avatar.png'}
            alt="User Profile"
            fill
            className="object-cover rounded-full border border-white"
            priority
          />
        </div>

        {/* Name */}
        <h2 className="text-2xl font-bold mb-2 flex justify-center items-center gap-2">
          <User size={20} />
          {user?.name || 'No Name'}
        </h2>

        {/* Email */}
        <p className="text-gray-400 flex items-center justify-center gap-2 mb-6">
          <Mail size={18} />
          {user?.email || 'No Email'}
        </p>

        {/* Sign Out */}
        <button
          onClick={() => signOut()}
          className="bg-red-500 w-full text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-red-600 transition"
        >
          <LogOut size={18} />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
