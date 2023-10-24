import React, { useEffect } from 'react'
import type { GetStaticPropsResult } from 'next'
import Router from 'next/router'
import { getAuth, signInWithEmailLink } from 'firebase/auth'
import querystring from 'querystring'

import { config } from 'config/config'
import { firebaseApp } from 'lib/firebase'

// const titleCase = str => str.replace(/(?:^|\s|[-"'([{])+\S/g, (c) => c.toUpperCase())
// const emailToName = (email) => titleCase(email.split('@')[0].replace(/\./g, ' '))

function EmailAuthenticatePage ({ query }: { query: any }): React.ReactElement {
  const auth = getAuth(firebaseApp)
  useEffect(() => {
    async function signinUserAndRedirect (): Promise<void> {
      // Confirm the link is a sign-in with email link.
      let email = window.localStorage.getItem('emailForSignIn')
      if (email === undefined) {
        // User opened the link on a different device. To prevent session fixation attacks, ask the user to provide the associated email again. For example:
        email = window.prompt('Please provide your email again for confirmation (the email was opened in a new window):')
      }
      try {
        const { user } = await signInWithEmailLink(auth, email ?? '', window.location.href)
        // Add user.displayName if missing
        if (user.displayName !== undefined) {
          // // user.updateProfile({ displayName: emailToName(user.email) })
        }
        // Clear email from storage
        window.localStorage.removeItem('emailForSignIn')
        // Redirect browser
        const { redirectTo } = querystring.parse(window.location.href.split('?')[1])
        void Router.push(redirectTo !== undefined ? decodeURIComponent(redirectTo as string) : config.startPagePath ?? '/')
        // You can access the new user via result.user
        // Additional user info profile not available via: result.additionalUserInfo.profile == null
        // You can check if the user is new or existing: result.additionalUserInfo.isNewUser
      } catch (error: any) {
        console.warn(`Warning: ${error.message as string}`, error)
      }
    }
    void signinUserAndRedirect()
  }, [query, auth])

  return (
    <>
      <h1>Logging in to {config.appName}...</h1>
    </>
  )
}

export default EmailAuthenticatePage

export const getStaticProps = async (): Promise<GetStaticPropsResult<{}>> => ({
  props: {
    title: 'Signing in',
    layout: 'signin'
  }
})
