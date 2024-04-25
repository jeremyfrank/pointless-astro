// from turbopress example
// https://github.com/turbopress/turbopress/blob/main/apps/web/src/services/api

import type { Project } from '../payload-types'
import { getPayloadCollection } from './api.service'

export async function getProjectCollection(query: any = null) {
  const url = `${import.meta.env.ASTRO_PUBLIC_CMS_URL}/api/projects`
  return getPayloadCollection<Project>(url, query)
}

export async function getProjectSingle(
  slug: string
): Promise<Project | undefined> {
  // TODO: might be able to query by id instead:
  // GET /api/{collection-slug}/{id}
  const projects = await getProjectCollection({
    where: { slug: { equals: slug } },
  })
  if (projects.docs[0]) return projects.docs[0]
}
