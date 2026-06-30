import type { Category, CategoryGroup } from '@/types'

export const CATEGORIES: Category[] = [
  // Group A — Startup, Product & Innovation
  {
    id: 'startup-award',
    group: 'A',
    name: 'Startup ICT Award 2026',
    description: 'This award recognizes a Nepali tech startup that has effectively leveraged Information and Communication Technology (ICT) to drive innovation, growth, and impact in Nepal\'s ICT sector. The startup should demonstrate strong institutional development, scalable products or services, a diversified business model, and resilience in the country\'s evolving digital landscape.',
    eligibility: 'Nepali startups incorporated on or after fiscal year 2078/079 — that is, between 2077 Shrawan 1, and 2082 Asar 32 (July 16, 2021 to July 16, 2026).',
    previousWinner: 'Startup ICT Award 2025 was awarded to Arkbo Technologies Pvt. Ltd.',
    icon: 'RocketLaunch',
  },
  {
    id: 'product-award',
    group: 'A',
    name: 'Product ICT Award 2026',
    description: 'This award honors a groundbreaking ICT product—whether software, hardware, or a combination of both—that has made a significant impact on business operations or community life. It recognizes innovation that clearly demonstrates how ICT can transform the way businesses operate or improve people\'s lives. The product should reflect originality, practical application, and measurable benefits within Nepal\'s ICT landscape.',
    eligibility: 'Products released between April 14, 2025 (2082 Baishakh 1), and July 15, 2025 (2083 Ashar 31) by any Nepali company or organization.',
    previousWinner: 'Product ICT Award 2025 was awarded to QuickCCA by Quickfox Consulting.',
    icon: 'Lightbulb',
  },
  {
    id: 'rising-star',
    group: 'A',
    name: 'Rising Star Innovation ICT Award 2026',
    description: 'This award recognizes outstanding contributions and innovations in Nepal\'s ICT sector by young individuals or students. It highlights innovative ideas, academic research projects, or independent technological solutions that demonstrate creativity, impact, and potential for further development. The award celebrates the spirit of innovation among youth and encourages the next generation of tech leaders to bring forward meaningful change through ICT. Projects submitted should be original and must not be affiliated with the R&D efforts of any established company.',
    eligibility: 'Open to full-time students or individuals below 30 years of age (born on or after Shrawan 1, 2053 B.S. / July 17, 1996 A.D.). All team members must meet this age criterion.',
    previousWinner: 'Rising Star Innovation ICT Award 2025 was awarded to Mind Bridge.',
    icon: 'Star',
  },
  {
    id: 'social-innovation',
    group: 'A',
    name: 'Social Innovation ICT Award 2026',
    description: 'This award honors socially impactful, technology-driven initiatives that leverage ICT to address critical challenges in areas such as health, education, agriculture, tourism, climate change, human rights, and social inclusion. Open to academic institutions, government bodies, development agencies, non-profits, or private organizations, the initiative must demonstrate innovation, measurable impact, and alignment with broader public goals. Projects should empower communities, enhance service delivery, and promote sustainable development through inclusive digital solutions. Private sector-led initiatives must be implemented in collaboration with government, non-profits, or development partners to ensure relevance to community needs.',
    eligibility: 'The submitted product, project, or initiative must have been initiated between Shrawan 1, 2078 (July 16, 2021) and Chaitra 31, 2081 (April 14, 2026), and must have been actively running for a minimum of 3 months as of July 16, 2026.',
    previousWinner: 'Social Innovation ICT Award 2025 was awarded to Kataho Digital Address.',
    icon: 'Globe',
  },
  // Group B — Individual Excellence
  {
    id: 'pioneer-award',
    group: 'B',
    name: 'Pioneer ICT Award 2026',
    description: 'This award honors a senior individual who has made significant and lasting contributions to the promotion and development of Nepal\'s ICT sector. Often working behind the scenes, these pioneers have played a crucial role in shaping the industry and expanding Nepal\'s technology and services both nationally and internationally over the past 20 years or more. Their dedication and impact have been unprecedented and widely recognized within the ICT community. Nominations can be submitted by the individual themselves or by others wishing to acknowledge their contributions.',
    eligibility: 'Veteran individuals who have contributed to the development and growth of Nepal\'s ICT sector for at least 20 years.',
    previousWinner: 'Pioneer ICT Award 2025 was awarded to Dr. Allen Bailochan Tuladhar, Chief Executive Officer, Unlimited Cloud LLC.',
    icon: 'Medal',
  },
  {
    id: 'professional-excellence',
    group: 'B',
    name: 'Professional Excellence ICT Award 2026',
    description: 'This award recognizes and honors ICT professionals who have demonstrated exceptional expertise and excellence in their specified ICT-focused domain—whether in academia, industry, corporate sectors, or technical communities. Eligible professionals should have a proven track record of outstanding performance, innovation, and leadership that distinguishes them as experts in their ICT field. They must have made significant contributions that have advanced knowledge, practices, or technologies within their ICT domain, and positively impacted their organizations, communities, or society at large. While their work may have broad relevance, nominees are expected to be actively engaged in Nepal\'s ICT ecosystem, contributing meaningfully to the country\'s digital growth and development. By consistently exhibiting professional excellence, these individuals play a key role in driving Nepal\'s ICT progress, inspiring others, and elevating standards within the sector.',
    eligibility: 'ICT professionals with a minimum of seven years of experience working in Nepal, including at least five years of continuous experience in the same domain, who have played a key role in driving innovation and excellence.',
    previousWinner: 'Professional Excellence ICT Award 2025 was awarded to Er. Ram Krishna Pariyar, Chief Technology Officer, Subisu Cablenet..',
    icon: 'UserCircle',
  },
  {
    id: 'entrepreneur-award',
    group: 'B',
    name: 'Entrepreneur ICT Award 2026',
    description: 'This award celebrates visionary ICT entrepreneurs who have demonstrated leadership in driving innovation, creating jobs, and contributing significantly to Nepal\'s economic development. It honors individuals whose entrepreneurial journeys have inspired a generation and helped shape the ICT landscape both within Nepal and internationally. Their achievements reflect resilience, strategic vision, and a lasting impact on the growth of the digital economy.',
    eligibility: 'Entrepreneurs with more than 10 years of experience in the ICT sector, with a proven track record of success, innovation, and positive impact. The nomination can be submitted by the entrepreneur themselves or by any third party.',
    previousWinner: 'Entrepreneur ICT Award 2025 was awarded to Mr. Bibhusan Bista, Managing Director, YoungInnovations Pvt. Ltd.',
    icon: 'Briefcase',
  },
  {
    id: 'woman-icon',
    group: 'B',
    name: 'Woman Icon ICT Award 2026',
    description: 'This award honors a distinguished female leader who has made significant contributions to Nepal\'s ICT sector for fifteen years or more. It recognizes and celebrates the achievements and leadership of women who have played a vital role in advancing the tech industry in Nepal. Through their vision, resilience, and dedication, these women have not only driven innovation and growth but also paved the way for future generations of women in technology. Their leadership inspires others to overcome barriers, pursue careers in ICT, and contribute meaningfully to Nepal\'s digital transformation. Nominations can be submitted by the nominee herself or by others who wish to acknowledge her impact and dedication.',
    eligibility: 'Female leaders who have contributed to Nepal\'s ICT sector for at least 15 years.',
    previousWinner: 'The Woman Icon ICT Award 2025 was awarded to Ms. Munni Rajbhandari, Chief Operating Officer, Nepal Pay QR | NCHL.',
    icon: 'Code',
  },
  {
    id: 'nepali-diaspora',
    group: 'B',
    name: 'Nepali Diaspora ICT Award 2026',
    description: 'This award honors an individual of Nepali origin residing abroad who has achieved notable success in the international ICT arena. Through their outstanding contributions, leadership, or innovation in the global tech industry, the awardee not only exemplifies excellence but also helps position Nepal as a country with capable and globally competitive talent. Their achievements serve as an inspiration to the Nepali ICT community, positively impacting Nepali society by promoting knowledge sharing, technology transfer, and opportunities for collaboration. This recognition strengthens Nepal\'s visibility and credibility in the global technology landscape, fostering greater avenues for investment and development.',
    eligibility: 'Individuals of Nepali origin who are currently based abroad and have made significant contributions in the field of Information and Communication Technology ecosystem and community in Nepal and globally.',
    previousWinner: 'Nepali Diaspora ICT Award 2025 was awarded to Mr. Dinesh Silwal, Chairman, Codavatar Tech Pvt. Ltd.',
    icon: 'Globe',
  },
  // Group C — Organization & Enterprises
  {
    id: 'digital-governance',
    group: 'C',
    name: 'Digital Governance ICT Award 2026',
    description: 'This award recognizes government agencies that have demonstrated exceptional success in supporting, employing, and facilitating digital governance through innovative use of ICT. It honors local governing bodies (Palikas), ministries, departments, or their specialized ICT initiatives that have effectively incorporated and implemented digital tools to enhance governance and public service delivery.',
    eligibility: 'Government organizations, including local bodies, ministries, departments, or their ICT initiatives, that have shown exemplary performance in using ICT to serve their constituencies and improve governance. Self-nominations are welcome.',
    previousWinner: 'The Digital Governance ICT Award 2025 was awarded to the Social Security Fund.',
    icon: 'Buildings',
  },
  {
    id: 'digital-edu-public',
    group: 'C',
    name: 'Digital Education ICT Award 2026 (Public Sector)',
    description: 'This award recognizes public educational institutions—schools and colleges—that have demonstrated outstanding excellence in integrating ICT as an effective tool for teaching and learning. It honors institutions that have successfully adopted digital technologies to enhance education quality, improve student engagement, and set a benchmark for digital education in Nepal\'s public sector.',
    eligibility: 'Public schools and colleges that have effectively implemented ICT in their teaching, learning, and pedagogy, demonstrating exemplary success in digital education. Nominations can be submitted by a representative of the institution or by any individual.',
    previousWinner: 'Digital Education ICT Award 2025 (Public Sector) was awarded to Narayani Secondary School, Chitwan, Bagmati Province.',
    icon: 'GraduationCap',
  },
  {
    id: 'digital-edu-private',
    group: 'C',
    name: 'Digital Education ICT Award 2026 (Private Sector)',
    description: 'This award celebrates private educational institutions—schools and colleges—that have demonstrated exemplary use of ICT to enhance educational delivery, pedagogy, and learning outcomes. It recognizes private institutions excelling in integrating digital technologies as effective tools for teaching, learning, and innovative pedagogical practices.',
    eligibility: 'Private schools and colleges with proven success in applying ICT across teaching, learning, and pedagogy are eligible to nominate themselves. Nominations can be submitted by a representative of the institution or by any individual.',
    previousWinner: 'Digital Education ICT Award 2025 (Private Sector) was awarded to Kopila Valley School, Surkhet, Karnali Province.',
    icon: 'GraduationCap',
  },
  {
    id: 'digital-services-ent',
    group: 'C',
    name: 'Digital Services ICT Award 2026 (Enterprise Sector)',
    description: 'This award recognizes the organizations and enterprises that have delivered exceptional services to the public. It recognizes how traditional organizations have transformed through digitalization, leveraging technology to enhance service delivery and improve public access. The focus is on the overall transformation of the organization and its services—not just on individual software or digital products. The award honors those that have made their services more accessible, efficient, and user-friendly by implementing innovative digital solutions to better serve the public.',
    eligibility: 'Open to organizations that have digitally transformed their overall services to better serve the public as a whole—not just individual products or software. Examples include hospitals, insurance companies, banks, and similar institutions.',
    previousWinner: 'Digital Services ICT Award 2025 (Enterprise Sector) was awarded to NMB Bank.',
    icon: 'Building',
  },
  {
    id: 'digital-services-neo',
    group: 'C',
    name: 'Digital Services ICT Award 2026 (Neo Sector)',
    description: 'This award recognizes private institutions, organizations, or their specialized ICT initiatives that have demonstrated outstanding use of technology to digitalize and enhance their services. It honors private sector companies across banking, insurance, health, agriculture, tourism, telecommunications, fintech, and other fields that have transformed traditional manual or physical services into accessible, efficient, and user-friendly digital solutions. Examples include ride-sharing platforms, neo banks, digital wallets, and similar innovations that provide tangible benefits to the public by improving service delivery through innovative digital technologies.',
    eligibility: 'Open to organizations or initiatives in Nepal that have developed innovative digital services replacing manual or physical processes. These solutions should clearly improve public access, convenience, and service quality by making previously manual services faster, easier, and more user-friendly. Examples include ride-sharing platforms, neo banks, digital wallets, and similar innovations.',
    previousWinner: 'Digital Services ICT Award 2025 (Neo Sector) was awarded to Ambition Guru.',
    icon: 'DeviceMobile',
  },
  // Group D — International
  {
    id: 'south-asia-startup',
    group: 'D',
    name: 'South Asia Startup ICT Award 2026',
    description: 'This award recognizes impactful startups from across South Asia, including Afghanistan, Bangladesh, Bhutan, India, Maldives, Nepal, Pakistan, and Sri Lanka, that have made notable contributions to the region\'s growing tech and innovation ecosystem. As South Asia emerges as a dynamic market for digital transformation, this award celebrates startups that are leveraging ICT to solve pressing challenges, drive economic growth, and create scalable solutions with regional and global relevance. This category aims to foster cross-border collaboration, highlight entrepreneurial excellence, and showcase the region\'s potential on the global tech stage.',
    eligibility: 'ICT startups incorporated between January 2021 and 01 December 2025 in any of the eight South Asian countries: Afghanistan, Bangladesh, Bhutan, India, Maldives, Nepal, Pakistan, and Sri Lanka.',
    previousWinner: 'The South Asia ICT Award 2025 was awarded to the PriyoShop (Bangladesh)',
    icon: 'Globe',
  },
  // Group E — Province Recognition
  {
    id: 'province-startup',
    group: 'E',
    name: 'Province Startup ICT Recognition 2026',
    description: 'This special recognition is dedicated to startups that are registered and operating within one of Nepal\'s seven provinces. It celebrates emerging provincial startups that have demonstrated notable growth, innovation, and impact in their respective regions. The aim is to encourage balanced entrepreneurial development across the country by highlighting promising startups from outside the Kathmandu Valley.',
    eligibility: 'Startups incorporated on or after Fiscal Year 2078/079 and operating within any of Nepal\'s seven provinces.',
    previousWinner: 'Koshi: Medicab Technologies Pvt. Ltd., Madhesh: Janaki Soft International Pvt. Ltd., Bagmati:  Cloud Mandap Pvt. Ltd., Gandaki: Brand Builder Pvt. Ltd., Lumbini: Golden Technosoft IT Solution, Karnali: Everest Wireless Network Pvt. Ltd., Sudurpaschim: Busy Infotex Pvt. Ltd.',
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
