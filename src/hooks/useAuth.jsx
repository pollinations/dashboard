import { useQuery } from '@tanstack/react-query'
import * as React from 'react'
import supabase from '../supabase/client'
import { getCurrentUser, signOut, getUser } from '../supabase/user'

const AuthContext = React.createContext()



function AuthProvider({ children }) {

    const [ user, setUser ] = React.useState(null)
    const [ token, setToken ] = React.useState(null)


    // const test = useQuery(
    //   queryKey: 'auth',
    //   queryFn: 
    // )


    React.useEffect(() => {


      async function fetchPreviousSession(callback){
        const { data } = await supabase.auth.getSession()
        setUser(data?.session?.user ?? null)
        setToken(data?.session?.access_token)
      }
      fetchPreviousSession()

      // Listen for changes on auth state (logged in, signed out, etc.)
      const { data: listener } = supabase.auth.onAuthStateChange(
        async (event, session) => {
          setUser(session?.user ?? null)
        }
      )
    
      return () => {
        if (!listener.unsubscribe) return;
        listener?.unsubscribe()
      }
    }, [])

    async function handleSignOut(e) {
      // e.preventDefault()
      await signOut()
      setUser(null)
    }



    

  return <AuthContext.Provider value={ {
      user,
      getUser,
      getCurrentUser,
      handleSignOut,  
      token,    
      }}>
      {children}
    </AuthContext.Provider>
}

function useAuth() {
  const context = React.useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}

export {AuthProvider, useAuth}