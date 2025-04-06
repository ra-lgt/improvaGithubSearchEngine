import { Alert } from "@chakra-ui/react"


type AlertStatus = "success" | "info" | "warning" | "error" | "neutral";

type AlertData={
  alert_type:AlertStatus,
  message:string,
}
export default function AlertPopup(props:AlertData) {
  console.log(props)
  return (
      <Alert.Root status={props?.alert_type || "success"}>
        <Alert.Indicator />
        <Alert.Title>{props?.message}</Alert.Title>
      </Alert.Root>
  )
}
