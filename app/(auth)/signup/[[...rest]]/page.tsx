import {SignUp} from '@clerk/nextjs';

function page() {
  return (
    <div className="bg-gradient-to-br from-sky-50 via-neutral-50 to-emerald-50 flex justify-center items-center min-h-screen">
      <SignUp />
    </div>
  )
}

export default page