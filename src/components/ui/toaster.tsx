"use client"

import {
  Toaster as ChakraToaster,
  Portal,
  Spinner,
  Stack,
  Toast,
  createToaster,
} from "@chakra-ui/react"

export const toaster = createToaster({
  placement: "bottom-end",
  pauseOnPageIdle: true,
})

const getToastColors = (type: string | undefined) => {
  switch (type) {
    case "success":
      return { bg: "green.500", color: "white" }
    case "error":
      return { bg: "red.500", color: "white" }
    case "warning":
      return { bg: "yellow.400", color: "black" }
    case "info":
      return { bg: "blue.400", color: "white" }
    case "loading":
      return { bg: "gray.600", color: "white" }
    default:
      return { bg: "gray.700", color: "white" }
  }
}

export const Toaster = () => {
  return (
    <Portal>
      <ChakraToaster toaster={toaster} insetInline={{ mdDown: "4" }}>
        {(toast) => {
          const colors = getToastColors(toast.type)
          return (
            <Toast.Root width={{ md: "sm" }} bg={colors.bg} color={colors.color} borderRadius="md" boxShadow="md">
              {toast.type === "loading" ? (
                <Spinner size="sm" color="white" mr="2" />
              ) : (
                <Toast.Indicator />
              )}
              <Stack gap="1" flex="1" maxWidth="100%">
                {toast.title && <Toast.Title>{toast.title}</Toast.Title>}
                {toast.description && (
                  <Toast.Description>{toast.description}</Toast.Description>
                )}
              </Stack>
              {toast.action && (
                <Toast.ActionTrigger>{toast.action.label}</Toast.ActionTrigger>
              )}
              {toast.meta?.closable && <Toast.CloseTrigger />}
            </Toast.Root>
          )
        }}
      </ChakraToaster>
    </Portal>
  )
}
