import { ICustomComponentProps } from '../../../types/common-types'
import { mergeClassName } from '../../../utils/format'

interface IProps extends ICustomComponentProps {
  title: string
}

export default function Heading(props: IProps) {
  return (
    <h3 className={mergeClassName('text-xl px-3 py-2', props.className)} dangerouslySetInnerHTML={{ __html: props.title }} />
  )
}
