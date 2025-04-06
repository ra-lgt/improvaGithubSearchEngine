import React from 'react'
import { Alert } from "@chakra-ui/react"

export default function AlertPopup(props:{}) {
  console.log(props)
  return (
      <Alert.Root status={props?.alert_type}>
        <Alert.Indicator />
        <Alert.Title>{props?.message}</Alert.Title>
      </Alert.Root>
  )
}
