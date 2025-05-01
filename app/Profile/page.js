'use client';
import React from 'react';
import { useSession, signOut } from 'next-auth/react';
import { User, Mail, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


const ProfilePage = () => {
  const { data: session, status } = useSession();
    const router = useRouter()

  if (status === 'loading') {
    return <div className=" flex items-center justify-center text-lg">Loading...</div>;
  }

  if (!session) {
    return (
      <div className="text-white my-60 flex flex-col items-center justify-center text-center px-4">
        <User size={48} className="text-gray-500 mb-4" />
        <h2 className="text-xl font-semibold mb-2">You&#39;re not logged in</h2>
        <p className="">Please sign in to view your profile.</p>
        <button  className="bg-green-500 mt-2 lg:mt-50 mx-30 cursor-pointer absolute text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-green-600 transition"
       onClick={()=>{
        router.push('/')
       }} >Sign now</button>
      </div>
    );
  }

  const { user } = session;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12  text-white">
      <div className="w-fit  rounded-xl shadow-lg p-8 text-center">
        <Image
            src={user?.image || '/default-avatar.png'}
            alt="User Profile"
            fill
            className="object-cover rounded-full"
            priority
          />
        <h2 className="text-2xl font-bold mb-2 flex justify-center items-center gap-2">
          <User size={20} />
          {user?.name || 'No Name'}
        </h2>
        <p className="text-gray-600 flex items-center justify-center gap-2 mb-6">
          <Mail size={18} />
          {user?.email || 'No Email'}
        </p>
        <button
          onClick={() => signOut()}
          className="bg-red-500 mx-30 absolute cursor-pointer text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 hover:bg-red-600 transition"
        >
          <LogOut size={18} />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
