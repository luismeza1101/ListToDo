import '../styleSheets/Tag.css'

interface Props {
  infoTag: string
}

const Tag: React.FC<Props> = ({infoTag}) => {
  return (
    <div className="tag">
      {infoTag}
    </div>
  )
}

export default Tag
