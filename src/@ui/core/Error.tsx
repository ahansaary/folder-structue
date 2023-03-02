import { FC } from "react"

type Props = {
  message: string
}

const Error: FC<Props> = ({message}) => {
  return <>Error: {message}</>
}

export default Error
