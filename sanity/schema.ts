import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import category from './schemaTypes/category'
import author from './schemaTypes/author'
import portflio from './schemaTypes/portflio/Schema'
import skill from './schemaTypes/skill/Schema'
import service from './schemaTypes/service/Schema'
import servicetag from './schemaTypes/service/other/Schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, category, blockContent, portflio, skill, service, servicetag],
}
