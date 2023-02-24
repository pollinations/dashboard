import supabase from "./client"

export const getCurrentUser = async () =>{    
    const res = await supabase.auth.getSession()
    return res
}
export async function getUser(){
     return await supabase.auth.getUser()
}

export async function signOut(){
    return await supabase.auth.signOut((err) => {
    console.error(err)
    })
}

// Ex: handleSocialLogin("facebook", "https://pollinations.ai")
export async function handleSocialLogin(provider, redirectTo=null) { 
    if (redirectTo == null) redirectTo = window.location.origin
    return await supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
            redirectTo
        }
    })
}


export async function signInWithEmail(user) {

    if(!user.username) return ({
        error: 'missing username'
    })
    if(!user.password) return ({
        error: 'missing password'
    })
    
    return await supabase.auth.signInWithPassword({
      email: user?.username,
      password: user?.password,
    })
}
export async function signUpwithEmail(user) {

    if(!user.username) return ({
        error: 'missing username'
    })
    if(!user.password) return ({
        error: 'missing password'
    })

    return await supabase.auth.signUp({
      email: user?.username,
      password: user?.password,
    })
}

export async function updatePassword(new_password) {

    if(!new_password) return ({
        error: 'missing new_password'
    })

    return await supabase.auth.updateUser({
        password: new_password
    })  
}

export async function fetchUserData(table, column) {
    // get uuid. we should handle this with RLS in the future
    const { data } = await getUser()
    const uuid = data?.user?.id

    return (await supabase
        .from(table)
        .select(column)
        .eq('user_id', uuid)).data;

}

export async function fetchPreviousSession(){
    return await supabase.auth.getSession()
}



