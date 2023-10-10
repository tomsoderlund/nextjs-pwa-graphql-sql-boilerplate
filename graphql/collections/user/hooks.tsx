/*
  Usage:
    import { UserContextProvider } from 'graphql/collections/user/hooks'
    <UserContextProvider>
      <ComponentThatUsesUser />
    </UserContextProvider>

  and inside ComponentThatUsesUser:
    import { useUser } from 'graphql/collections/user/hooks'
    const { user, signOut } = useUser()
*/

import React, { createContext, useContext, useState, useEffect } from 'react'
// import { User, getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { useQuery, useMutation } from '@apollo/client'
import { useRouter } from 'next/router'

// import { firebaseApp } from 'lib/firebase'
import { GET_USER, CREATE_USER } from './queries'
import { UserGoodsowner } from 'graphql/__generated__/graphql'

interface UserInputProps {
  children: React.ReactNode
}

interface UserReturnProps {
  user: any | null
  userGoodsowners?: UserGoodsowner[]

  signOut: () => Promise<void>
}

const UserContext = createContext<Partial<UserReturnProps>>({})

export const UserContextProvider = (props: UserInputProps): React.ReactElement => {
  const [user, setUser] = useState</* User | */ any | null | undefined>(undefined)
  // const auth = getAuth(firebaseApp)
  const [createUser] = useMutation(CREATE_USER)
  const router = useRouter()

  // Get user profile from Postgres
  const { data } = useQuery(GET_USER, { variables: { firebaseUid: user?.uid as string } })
  const userGoodsowners = data?.userByFirebaseUid?.userGoodsownersByUserIdList as UserGoodsowner[]

  useEffect(() => {
    try {
      // onAuthStateChanged(auth, (firebaseUser) => {
      //   setUser(firebaseUser)
      // })
    } catch (error: any) {
      console.warn(`Warning: ${error.message as string}`)
    }
  }, [])

  useEffect(() => {
    if (user?.uid !== undefined && data?.userByFirebaseUid === null) {
      // Create in Postgres if user doesn’t exist
      console.log('Creating new user:', user?.uid)
      void createUser({
        variables: {
          input: {
            user: {
              firebaseUid: user?.uid
            }
          }
        }
      })
    }
  }, [user?.uid, data?.userByFirebaseUid])

  const signOutFunction = async (): Promise<void> => {
    // Sign out from Firebase
    // await signOut(auth)
    // Redirect to start page
    void router.push('/')
  }

  // Make the context object (i.e. the “API” for User)
  const userContext: UserReturnProps = {
    user,
    userGoodsowners,

    signOut: signOutFunction
  }
  // Pass the value in Provider and return
  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  )
}

export const { Consumer: UserContextConsumer } = UserContext

export const useUser = (): Partial<UserReturnProps> => useContext(UserContext)
