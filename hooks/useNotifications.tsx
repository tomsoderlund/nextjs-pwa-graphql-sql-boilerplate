/*
  Usage:
    import { NotificationsContextProvider } from 'hooks/useNotifications'
    <NotificationsContextProvider>
      <ComponentThatUsesNotifications />
    </NotificationsContextProvider>

  and inside ComponentThatUsesNotifications:
    import { useNotifications } from 'hooks/useNotifications'
    const { showNotification } = useNotifications()
*/

import React, { createContext, useContext, useState } from 'react'
import { Snackbar, SnackbarContent } from '@mui/material'

import { COLORS } from 'components/theme/AppThemeProvider'

interface NotificationsInputProps {
  children: React.ReactNode
}

interface NotificationsReturnProps {
  showNotification: (msg: string, severity?: NotificationType) => void
}

const NotificationsContext = createContext<Partial<NotificationsReturnProps>>({})

const NotificationStyles = {
  info: {
    backgroundColor: COLORS.BLUE_MEDIUM
  },
  success: {
    backgroundColor: COLORS.GREEN
  },
  warning: {
    backgroundColor: COLORS.ORANGE,
    color: COLORS.BLACK
  },
  error: {
    backgroundColor: COLORS.RED_DARK
  }
}

export type NotificationType = keyof typeof NotificationStyles

export const NotificationsContextProvider = (props: NotificationsInputProps): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [severity, setSeverity] = useState<NotificationType>('info')

  const showNotification = (msg: string, severity: NotificationType = 'info'): void => {
    setMessage(msg)
    setSeverity(severity)
    setIsOpen(true)
  }

  // Make the context object (i.e. the “API” for Notifications)
  const itemContext: NotificationsReturnProps = {
    showNotification
  }
  // Pass the value in Provider and return
  return (
    <NotificationsContext.Provider value={itemContext}>
      {props.children}
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={isOpen}
        autoHideDuration={6000}
        onClose={() => setIsOpen(false)}
      >
        <SnackbarContent
          style={NotificationStyles[severity]}
          message={message}
        />
      </Snackbar>
    </NotificationsContext.Provider>
  )
}

export const { Consumer: NotificationsContextConsumer } = NotificationsContext

export const useNotifications = (): Partial<NotificationsReturnProps> => useContext(NotificationsContext)
