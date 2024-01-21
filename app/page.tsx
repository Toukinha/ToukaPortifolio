import Footer from './components/footer/Footer'
import HeroSection from './components/pages/home/HeroSection/HeroSection'
import HighlightProjects from './components/pages/home/highlightProjects/HighlightProjects'
import KnowTechs from './components/pages/home/know-section/KnowTechs'
import WorkExprience from './components/pages/home/Work-experience/WorkExprience'
import { HomePageData } from './Types/page-info'
import { fetchHygraphQuery } from './ultils/fetch-hygraph-query'

const getPageData = async (): Promise<HomePageData> => {
  const query = `
    query PageInfoQuery {
      page(where: {slug: "home"}) {
        introduction {
          raw
        }
        technologies {
          name
        }
        profilePicture {
          url
        }
        socials {
          url
          iconSvg
        }
        knownTechs {
          iconSvg
          name
          startDate
        }
        highlightProjects {
          slug
          thumbnail {
            url
          }
          title
          shortDescription
          technologies {
            name
          }
        }
      }
      workExperiences {
        companyLogo {
          url
        }
        role
        companyName
        companyUrl
        startDate
        endDate
        description {
          raw
        }
        technologies {
          name
        }
      }
    }
  `

  return fetchHygraphQuery(query, 60 * 60 * 24)
}

export default async function Home() {
  const { page: pageData, workExperiences } = await getPageData()

  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnowTechs techs={pageData.knownTechs} />
      <HighlightProjects projects={pageData.highlightProjects} />
      <WorkExprience experiences={workExperiences} />
    </>
  )
}
