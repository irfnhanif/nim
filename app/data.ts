type Project = {
  name: string
  description: string
  link: string
  media: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Ideabox MiX',
    description:
      'A social media platform where MiX (Mandiri Innovation Experience) participants can share and collaborate on innovative ideas.',
    link: 'https://mandiri.ideaboxapp.com/',
    media: '/ideabox_mix.png',
    id: 'project1',
  },
  {
    name: 'AMD MiX',
    description:
      'A canvassing platform where digital talents in the Mandiri Innovation Xperience program can collaborate on innovations.',
    link: 'https://dingo-mandiri.ideaboxapp.com/homepage',
    media: '/amd_mandiri.png',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Freelance',
    title: 'Software Engineer',
    start: 'Feb. 2025',
    end: 'Present',
    link: 'https://www.linkedin.com/in/irfan-hanif-habibi/',
    id: 'work1',
  },
  {
    company: 'Telkom Indonesia',
    title: 'Back-end Developer Intern',
    start: 'Feb. 2024',
    end: 'July 2024',
    link: 'https://www.linkedin.com/in/irfan-hanif-habibi/',
    id: 'work2',
  },
  {
    company: 'POROS Organization of Open Source',
    title: 'Backend Division Staff',
    start: 'Mar. 2023',
    end: 'Dec. 2024',
    link: 'https://www.linkedin.com/in/irfan-hanif-habibi/',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description:
      'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/irfnhanif',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/irfan-hanif-habibi/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/irfnhan',
  },
]

export const EMAIL = '14.irfanh@gmail.com'
