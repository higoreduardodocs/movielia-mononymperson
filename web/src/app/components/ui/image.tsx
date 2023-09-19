import { ICustomComponentProps } from '../../../types/common-types'
import { mergeClassName } from '../../../utils/format'

interface IProps extends ICustomComponentProps {}

export default function Image(props: IProps) {
  return (
    <div className={mergeClassName("bg-primary h-full w-full rounded-lg overflow-hidden", props.className)}>
      <img src="https://placehold.co/400x400" className="min-h-[300px] w-full h-full object-cover" />
    </div>
  )
}