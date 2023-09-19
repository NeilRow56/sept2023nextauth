import React from 'react'

const IndividualProfile = ({ params }: any) => {
  return (
    <main className="flex w-full  flex-col items-center justify-center bg-gray-100   py-12 sm:px-6 lg:px-8">
      <div className="rounded-lg  p-8 sm:mx-auto sm:w-full sm:max-w-2xl">
        <h1 className="text-4xl font-bold">Profile</h1>
        <hr />
        <span className=" flex gap-3 text-3xl">
          Individual&apos;s profile page for
          <h3>{params.profileId}</h3>
        </span>
      </div>
    </main>
  )
}

export default IndividualProfile
