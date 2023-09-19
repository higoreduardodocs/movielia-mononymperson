import { ICustomComponentProps } from '../../../types/common-types'
import { mergeClassName } from '../../../utils/format'
import Image from './image'

interface IProps extends ICustomComponentProps {
}

export default function Card(props: IProps) {
  return (
    <div className={mergeClassName("mx-3 my-1.5 cursor-pointer", props.className)}>
      <Image />
      {/* <p className="py-1.5 line-clamp-2">
        Indiana Jones e A Relíquia do Destino
      </p> */}
      {props.children}
    </div>
  )
}
