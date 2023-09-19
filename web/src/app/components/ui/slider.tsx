import { ReactNode, useState } from 'react'
import Slick, { Settings } from 'react-slick'

interface IProps extends Omit<Settings, 'children'> {
  isMovieCard?: boolean
  children?: (onSwipe: boolean) => ReactNode
}

export default function Slider(props: IProps) {
  const [onSwipe, setOnSwipe] = useState(false)
  let settings: Omit<Settings, 'children'> = { ...props }

  if (props.isMovieCard) {
    settings = {
      ...settings,
      infinite: true,
      swipe: false,
      slidesToShow: 5,
      slidesToScroll: 5,
    }
  }

  return (
    <Slick
      autoplay={false}
      autoplaySpeed={5000}
      onSwipe={() => setOnSwipe(true)}
      afterChange={() => setOnSwipe(false)}
      {...settings}
    >
      {props.children && props.children(onSwipe)}
    </Slick>
  )
}
