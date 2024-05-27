//https://codesandbox.io/p/sandbox/drawer-joy-ui-fnqxzp?file=%2FDrawer.tsx%3A1%2C1-81%2C1
import Modal, { ModalProps, modalClasses } from '@mui/joy/Modal'
import Sheet from '@mui/joy/Sheet'
import React from 'react'

export interface DrawerProps extends Omit<ModalProps, 'children'> {
  children: React.ReactNode

  size?: number | string
  position?: 'left' | 'right' | 'top' | 'bottom'
}

export function Drawer({
  children,
  position = 'left',
  size = 'clamp(256px, 30vw, 378px)',
  sx,
  ...props
}: DrawerProps) {
  return (
    <Modal
      keepMounted
      sx={[
        {
          transitionProperty: 'visibility',
          transitionDelay: props.open ? '0s' : '300ms',
          [`& .${modalClasses.backdrop}`]: {
            opacity: props.open ? 1 : 0,
            transition: 'opacity 0.3s ease',
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      <Sheet
        sx={{
          position: 'fixed',
          overflow: 'auto',
          ...(position === 'left' && {
            left: 0,
            transform: props.open ? 'translateX(0)' : 'translateX(-100%)',
          }),
          ...(position === 'right' && {
            right: 0,
            transform: props.open ? 'translateX(0)' : 'translateX(100%)',
          }),
          ...(position === 'top' && {
            top: 0,
            transform: props.open ? 'translateY(0)' : 'translateY(-100%)',
          }),
          ...(position === 'bottom' && {
            bottom: 0,
            transform: props.open ? 'translateY(0)' : 'translateY(100%)',
          }),
          height: position.match(/(left|right)/) ? '100%' : size,
          width: position.match(/(top|bottom)/) ? '100vw' : size,
          boxShadow: 'md',
          transition: 'transform 0.3s ease',
        }}
      >
        {children}
      </Sheet>
    </Modal>
  )
}
