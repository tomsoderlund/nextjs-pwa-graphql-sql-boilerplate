import React from 'react'
import type { GetStaticPropsResult } from 'next'

import { config } from 'config/config'
import { useUser } from 'graphql/collections/user/hooks'
import SigninWithEmailForm from 'components/user/SigninWithEmailForm'
import SigninWithGoogleButton from 'components/user/SigninWithGoogleButton'

function SigninPage (): React.ReactElement {
  const { user, signOut } = useUser()
  return user === null
    ? (
      <>
        <h1>Welcome to {config.appName}</h1>
        <SigninWithGoogleButton redirectTo='/orders' />
        <p>or sign in with email:</p>
        <SigninWithEmailForm redirectTo='/orders' />
      </>
      )
    : (
      <button
        onClick={() => { void signOut?.() }}
      >
        Sign out
      </button>
      )
}

export default SigninPage

export const getStaticProps = async (): Promise<GetStaticPropsResult<{}>> => ({
  props: {
    title: 'Sign in'
  }
})
