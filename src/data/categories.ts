import type { Category, CategoryGroup } from '@/types'

export const CATEGORIES: Category[] = [
  // Group A — Startup, Product & Innovation
  {
    id: 'startup-award',
    group: 'A',
    name: 'Startup ICT Award 2026',
    description: 'Recognizes a Nepali tech startup that has effectively leveraged ICT to drive innovation, growth, and impact. The startup should demonstrate strong institutional development, scalable products/services, diversified business model, and resilience.',
    eligibility: 'Nepali tech-startups incorporated within the last five years (from F.Y. 2078/079 onwards). Must demonstrate substantial institutional growth, scaled products/services, and diversified business models.',
    icon: 'RocketLaunch',
  },
  {
    id: 'product-award',
    group: 'A',
    name: 'Product ICT Award 2026',
    description: 'Honors a groundbreaking ICT product (software, hardware, or combination) that has made significant impact on business operations or community life. Recognizes innovation, originality, practical application, and measurable benefits.',
    eligibility: 'Innovative tech products (software, hardware, or both) launched between 14th April 2025 – 15th July 2026 by any Nepali company or organization.',
    icon: 'Lightbulb',
  },
  {
    id: 'rising-star',
    group: 'A',
    name: 'Rising Star Innovation ICT Award 2026',
    description: 'Recognizes outstanding contributions and innovations by young individuals or students. Highlights innovative ideas, academic research projects, or independent technological solutions demonstrating creativity, impact, and potential.',
    eligibility: 'Full-time students or individuals below 30 years. Projects must be original and not affiliated with any established company\'s R&D.',
    icon: 'Star',
  },
  {
    id: 'social-innovation',
    group: 'A',
    name: 'Social Innovation ICT Award 2026',
    description: 'Honors socially impactful, technology-driven initiatives leveraging ICT to address critical challenges in health, education, agriculture, tourism, climate change, human rights, and social inclusion.',
    eligibility: 'Open to academic institutions, government bodies, development agencies, non-profits, or private organizations. Initiative must have started within the last five years.',
    icon: 'Globe',
  },
  // Group B — Individual Excellence
  {
    id: 'pioneer-award',
    group: 'B',
    name: 'Pioneer ICT Award 2026',
    description: 'Honors a senior individual who has made significant and lasting contributions to Nepal\'s ICT sector for 20+ years. Often working behind the scenes, these pioneers have shaped the industry and expanded Nepal\'s technology services nationally and internationally.',
    eligibility: 'Veteran individuals who have contributed to Nepal\'s ICT sector for at least 20 years. Self-nomination or nomination by others accepted.',
    icon: 'Medal',
  },
  {
    id: 'professional-excellence',
    group: 'B',
    name: 'Professional Excellence ICT Award 2026',
    description: 'Recognizes ICT professionals demonstrating exceptional expertise and excellence in their ICT-focused domain — academia, industry, corporate, or technical communities.',
    eligibility: 'ICT professionals with minimum 7 years experience in Nepal, including at least 5 years continuous experience in the same domain.',
    icon: 'UserCircle',
  },
  {
    id: 'entrepreneur-award',
    group: 'B',
    name: 'Entrepreneur ICT Award 2026',
    description: 'Celebrates visionary ICT entrepreneurs demonstrating leadership in driving innovation, creating jobs, and contributing significantly to Nepal\'s economic development.',
    eligibility: 'Entrepreneurs with more than 10 years experience in ICT sector with proven track record of success, innovation, and positive impact.',
    icon: 'Briefcase',
  },
  {
    id: 'woman-icon',
    group: 'B',
    name: 'Woman Icon ICT Award 2026',
    description: 'Honors a distinguished female leader who has made significant contributions to Nepal\'s ICT sector. Recognizes achievements and leadership of women advancing the tech industry.',
    eligibility: 'Female leaders who have contributed to Nepal\'s ICT sector for at least 15 years. Self-nomination or nomination by others accepted.',
    icon: 'Code',
  },
  {
    id: 'nepali-diaspora',
    group: 'B',
    name: 'Nepali Diaspora ICT Award 2026',
    description: 'Honors an individual of Nepali origin residing abroad who has achieved notable success in international ICT arena, inspiring the Nepali ICT community globally.',
    eligibility: 'Individuals of Nepali origin currently based abroad who have made significant contributions to the ICT ecosystem in Nepal and globally.',
    icon: 'Globe',
  },
  // Group C — Organization & Enterprises
  {
    id: 'digital-governance',
    group: 'C',
    name: 'Digital Governance ICT Award 2026',
    description: 'Recognizes government agencies demonstrating exceptional success in supporting digital governance through innovative ICT use. Honors ministries, departments, or ICT initiatives that have enhanced governance and public service delivery.',
    eligibility: 'Government organizations including local bodies, ministries, departments, or their ICT initiatives showing exemplary performance in using ICT for governance.',
    icon: 'Buildings',
  },
  {
    id: 'digital-edu-public',
    group: 'C',
    name: 'Digital Education ICT Award 2026 (Public Sector)',
    description: 'Recognizes public educational institutions demonstrating outstanding excellence in integrating ICT for teaching and learning, enhancing education quality and student engagement.',
    eligibility: 'Public schools and colleges that have effectively implemented ICT in teaching, learning, and pedagogy.',
    icon: 'GraduationCap',
  },
  {
    id: 'digital-edu-private',
    group: 'C',
    name: 'Digital Education ICT Award 2026 (Private Sector)',
    description: 'Celebrates private educational institutions demonstrating exemplary use of ICT to enhance educational delivery, pedagogy, and learning outcomes.',
    eligibility: 'Private schools and colleges with proven success in applying ICT across teaching, learning, and pedagogy.',
    icon: 'GraduationCap',
  },
  {
    id: 'digital-services-ent',
    group: 'C',
    name: 'Digital Services ICT Award 2026 (Enterprise Sector)',
    description: 'Recognizes organizations and enterprises delivering exceptional services to the public through digitalization. Focus is on overall organizational transformation — not just individual software products.',
    eligibility: 'Organizations that have digitally transformed their overall services to better serve the public — hospitals, insurance companies, banks, and similar institutions.',
    icon: 'Building',
  },
  {
    id: 'digital-services-neo',
    group: 'C',
    name: 'Digital Services ICT Award 2026 (Neo Sector)',
    description: 'Recognizes private institutions demonstrating outstanding technology use to digitalize services. Honors companies in banking, fintech, health, agriculture, tourism, and telecommunications.',
    eligibility: 'Organizations in Nepal that have developed innovative digital services replacing manual or physical processes, clearly improving public access, convenience, and quality.',
    icon: 'DeviceMobile',
  },
  // Group D — International
  {
    id: 'south-asia-startup',
    group: 'D',
    name: 'South Asia Startup ICT Award 2026',
    description: 'Recognizes impactful startups from across South Asia making notable contributions to the region\'s growing tech and innovation ecosystem. Fosters cross-border collaboration and showcases regional entrepreneurial excellence.',
    eligibility: 'ICT startups incorporated between January 2021 and December 2025 in Afghanistan, Bangladesh, Bhutan, India, Maldives, Nepal, Pakistan, or Sri Lanka.',
    icon: 'Globe',
  },
  // Group E — Province Recognition
  {
    id: 'province-startup',
    group: 'E',
    name: 'Province Startup ICT Recognition 2026',
    description: 'Special recognition for startups registered and operating within one of Nepal\'s seven provinces. Encourages balanced entrepreneurial development across the country by highlighting promising startups outside the Kathmandu Valley.',
    eligibility: 'Startups incorporated on or after Fiscal Year 2078/079 and operating within any of Nepal\'s seven provinces.',
    icon: 'MapTrifold',
  },
]

export const CATEGORY_GROUP_LABELS: Record<string, string> = {
  A: 'Startup, Product & Innovation',
  B: 'Individual Excellence',
  C: 'Organization & Enterprises',
  D: 'International',
  E: 'Province Recognition',
}

export const CATEGORY_GROUPS: { group: CategoryGroup; label: string; description: string }[] = [
  { group: 'A', label: 'Startup, Product & Innovation', description: 'Celebrating groundbreaking tech startups, innovative products, rising young talent, and impactful social innovations.' },
  { group: 'B', label: 'Individual Excellence', description: 'Honoring pioneers, entrepreneurs, professionals, and leaders who have shaped Nepal\'s ICT landscape.' },
  { group: 'C', label: 'Organization & Enterprises', description: 'Recognizing institutions driving digital governance, digital education, and digital services transformation.' },
  { group: 'D', label: 'International', description: 'Celebrating the best tech startups from across South Asia.' },
  { group: 'E', label: 'Province Recognition', description: 'Spotlighting promising startups from all seven provinces of Nepal.' },
]

/**
 * Brand color per award group — the Signature Spectrum (indigo → red), matching
 * the `spectrum` tokens in tailwind.config.ts. Applied via inline `style` to
 * avoid Tailwind JIT purging dynamic class names. Append an 8-digit alpha suffix
 * for tints, e.g. `GROUP_COLOR[g] + '1A'` ≈ 10% opacity.
 *
 * WCAG AA verified (2026-06-19): normal text on white / cream (#FEF9EE) / surface-alt (#F8F9FA).
 * Contrast ratios (white / cream / surface-alt):
 *   A 10.8 / 10.3 / 10.4  ·  B 9.4 / 9.0 / 9.1  ·  C 7.5 / 7.1 / 7.2
 *   D 6.1 / 5.8 / 5.9     ·  E 6.2 / 5.9 / 6.0
 * All ≥ 4.5:1. E uses #C20F1A (unified AA-safe red, == spectrum.e).
 */
export const GROUP_COLOR: Record<CategoryGroup, string> = {
  A: '#4C2D75',
  B: '#6E2C68',
  C: '#9B2850',
  D: '#BD203A',
  E: '#C20F1A', // AA-safe red — unified value (== spectrum.e and live tokens)
}
