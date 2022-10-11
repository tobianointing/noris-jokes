import { useState } from "react"

type useDisclosureType = () => [boolean, () => void, () => void]


export const useDisclosure: useDisclosureType = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onOpen = () => {
    setIsOpen(!isOpen)
  }

  const onClose = () => {
    setIsOpen(!isOpen)
  }

  return [isOpen, onOpen, onClose]
}
