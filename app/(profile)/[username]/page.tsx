import { getUserByUsername } from '@/modules/profile/actions';
import TreeBioProfile from '@/modules/profile/components/treebio-profile';
import { redirect } from 'next/navigation';
import React from 'react'

const profilePage = async({params}:{params:Promise<{username:string}>}) => {
    const {username} = await params;
    const profileData = await getUserByUsername(username)

    if(profileData?.username !== username){
        return redirect("/")
    }

  return (
  <TreeBioProfile profileData={profileData}/>
  )
}

export default profilePage