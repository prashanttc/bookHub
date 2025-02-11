import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'

const page = async() => {
    const supabase = createServerComponentClient({ cookies });
    const { data: session } = await supabase.auth.getSession();
    if (session) {
      redirect("/student/dashboard");
    }
  return (
    <div>
        
    </div>
  )
}

export default page
