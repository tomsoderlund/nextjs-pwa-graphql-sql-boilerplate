import React from 'react'
import type { GetStaticPropsResult } from 'next'
import Image from 'next/image'
import { Button } from '@mui/material'

import { useUser } from 'graphql/collections/user/hooks'
import SigninWithEmailForm from 'components/user/SigninWithEmailForm'
import SigninWithGoogleButton from 'components/user/SigninWithGoogleButton'

function SigninPage (): React.ReactElement {
  const { user, signOut } = useUser()
  return user === null
    ? (
      <>
        <Image src='/images/brizo_logo.svg' alt='Brizo logo' width={200} height={30} />
        <h1>Welcome to the Brizo Dashboard</h1>
        <SigninWithGoogleButton redirectTo='/orders' />
        <p>or sign in with email:</p>
        <SigninWithEmailForm redirectTo='/orders' />
      </>
      )
    : (
      <Button
        onClick={() => { void signOut?.() }}
      >
        Sign out
      </Button>
      )
}

export default SigninPage

export const getStaticProps = async (): Promise<GetStaticPropsResult<{}>> => ({
  props: {
    title: 'Sign in',
    layout: 'signin'
  }
})
