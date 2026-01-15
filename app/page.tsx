import Header from './components/Header'
import EducationSection from './components/EducationSection'
import SkillsSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'

export default function Home() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />

        <EducationSection />

        <SkillsSection />

        <ExperienceSection />

        <ProjectsSection />

        <a 
          href="/Jason_Xu.pdf" 
          download="resume.pdf" 
          className="contact-link" 
          style={{
            position: 'absolute',
            top: '60px',
            right: '60px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px'
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
        </a>
      </div>
    </div>
  )
}
