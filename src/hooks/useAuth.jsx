import * as React from 'react'
import supabase from '../supabase/client'
import { getCurrentUser, signOut, getUser } from '../supabase/user'

const AuthContext = React.createContext()

function AuthProvider({ children }) {

    const [ user, setUser ] = React.useState(null)

    React.useEffect(() => {
        // Check active sessions and sets the user
        const session = supabase.auth.getSession()
    
        setUser(session?.user ?? null)
    
        // Listen for changes on auth state (logged in, signed out, etc.)
        const { data: listener } = supabase.auth.onAuthStateChange(
          async (event, session) => {
            setUser(session?.user ?? null)
          }
        )
    
        return () => {
          listener?.unsubscribe()
        }
      }, [])

    async function handleSignOut() {
        await signOut()
        setUser(null)
    }



    

  return <AuthContext.Provider value={ {
      user,
      getUser,
      getCurrentUser,
      handleSignOut,      
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