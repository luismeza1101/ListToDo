import '../styleSheets/Tag.css'
import { Tags } from '../types';

interface Props {
  infoTag: Tags
}

const Tag: React.FC<Props> = ({infoTag}) => {

  const addTagColor = () => {
    switch (infoTag) {
      case 'Importan':
        return 'importan'  
      case 'Home':
        return 'home'  
      case 'Work':
        return 'work'  
      case 'Personal':
        return 'personal'  
      case 'Proyects':
        return 'proyects'  
      case 'Favors':
        return 'favors'
    }
  }
  return (
    <div className={`tag ${addTagColor()}`}>
      {infoTag}
    </div>
  )
}

export default Tag
