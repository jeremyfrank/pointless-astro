// from turbopress example
// https://github.com/turbopress/turbopress/blob/main/apps/web/src/types.ts
// in a monorepo setup, this file could potentially be
// imported from payload package

export type PayloadCollection<CollectionType = any> = {
  totalDocs?: number
  limit?: number
  totalPages?: number
  page?: number
  pagingCounter?: number
  hasPrevPage?: boolean
  hasNextPage?: boolean
  prevPage?: number
  nextPage?: number
  hasMore?: boolean
  docs: CollectionType[]
}
