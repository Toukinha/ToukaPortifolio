import PageIntroduction from '../components/pages/projects/page-introduction/PageIntroduction'
import ProjectsList from '../components/pages/projects/projects-lits/ProjectsList'
import { ProjectsPageData } from '../Types/page-info'
import { fetchHygraphQuery } from '../ultils/fetch-hygraph-query'

export const metadata = {
  title: 'Projetcs',
}

const getPageData = async (): Promise<ProjectsPageData> => {
  const query = `
    query ProjectsQuery {
      projects {
        shortDescription
        slug
        title
        thumbnail {
          url
        }
        technologies {
          name
        }
      }
    }
    `
  return fetchHygraphQuery(query, 60 * 60 * 24)
}

export default async function Projects() {
  const { projects } = await getPageData()
  return (
    <>
      <PageIntroduction />
      <ProjectsList projects={projects} />
    </>
  )
}
