export type Tags = 'Select the tag' | 'Importan' | 'Home' | 'Work' |'Personal' | 'Proyects' | 'Favors';

export type TagsFilter = 'All' | 'Importan' | 'Home' | 'Work' |'Personal' | 'Proyects' | 'Favors';

export interface Task {
    info: string
    id: string
    tag: Tags
    edit: boolean
}
