import { useState } from 'react'
import { supabase } from '../lib/supabaseClient';
console.log('Supabase client:', supabase)

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) alert(error.message)
    else alert('Successfully signed in!')
  }

  const signUp = async () => {
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) alert(error.message)
    else alert('Check your email for confirmation!')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-4">
      <h1 className="text-2xl font-bold">Tuvera Login</h1>
      <input
        className="p-2 border rounded w-64"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="p-2 border rounded w-64"
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signIn} className="bg-blue-500 text-white px-4 py-2 rounded">
        Sign In
      </button>
      <button onClick={signUp} className="text-sm underline">
        Or Sign Up
      </button>
    </div>
  )
}
