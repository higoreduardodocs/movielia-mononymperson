import { ICustomComponentProps } from '../../../types/common-types'
import { imageSrc, mergeClassName } from '../../../utils/format'
import Image from './image'

interface IProps extends ICustomComponentProps {
  src: string
  title?: string
}

export default function Card(props: IProps) {
  return (
    <div className={mergeClassName("mx-3 my-1.5 cursor-pointer", props.className)}>
      <Image src={imageSrc(props.src)!} />
      <p className="py-1.5 line-clamp-2">{props.title}</p>
      {props.children}
    </div>
  )
}
