import type { JuryMember, AdvisorGroup } from '@/types'

/** Jury list for 2025. 2026 list will be updated before nominations open. */
export const JURY_2025: JuryMember[] = [
  { name: 'Prof. Dr. Bal Krishna Bal', designation: 'Associate Dean & Professor', organization: 'School of Engineering, Kathmandu University' },
  { name: 'Dr. Bhoj Raj Ghimire', designation: 'Acting Dean, Faculty of Science, Health and Technology', organization: 'Nepal Open University' },
  { name: 'Ms. Ganga Subba', designation: 'Associate Professor', organization: 'Sagarmatha College of Science and Technology' },
  { name: 'Mr. Narayan Timilsina', designation: 'Under Secretary', organization: 'Ministry of Communication & IT (MoCIT)' },
  { name: 'Mr. Hempal Shrestha', designation: 'Knowledge Management Specialist (Jury Coordinator)', organization: 'ICT Foundation Nepal' },
  { name: 'Dr. Pradip Paudyal', designation: 'Deputy Director', organization: 'Nepal Telecommunications Authority (NTA)' },
  { name: 'Mr. Pranaya Sthapit', designation: 'Project Director', organization: 'The Asia Foundation' },
  { name: 'Ms. Sajana Maharjan Amatya', designation: 'Team Leader', organization: 'Adam Smith International' },
  { name: 'Mr. Sanjaya Poudel', designation: 'Advisor', organization: 'Ministry of Science, Technology and Innovation' },
  { name: 'Mr. Shishir Pachhai', designation: 'Founder / Chairman', organization: 'LIPI.One' },
  { name: 'Ms. Sneha Bhattarai', designation: 'NPO – Innovation & Digitalization', organization: 'Swiss Cooperation Office Nepal' },
  { name: 'Mr. Subhash Dhakal', designation: 'Deputy Director General', organization: 'Department of IT (DoIT)' },
  { name: 'Mr. Suman Pokharel', designation: 'Deputy CEO', organization: 'Global IME Bank' },
  { name: 'Mr. Vishal Mani Upadhyay', designation: 'Telecommunications Professional | Entrepreneur' },
]

export const ADVISOR_GROUPS: AdvisorGroup[] = [
  {
    title: 'Advisory Guardians',
    members: [
      { name: 'Mr. Ananda Raj Khanal', designation: 'ICT Expert & Chairman', organization: 'Nepal Digital Leads' },
      { name: 'Mr. Birendra Kumar Mishra', designation: 'Former Joint Secretary', organization: 'Ministry of Communication & IT (MoCIT)' },
      { name: 'Mr. Ganesh Shah', designation: 'Former Minister', organization: 'Ministry of Education, Science & Technology (MoEST)' },
      { name: 'Prof. Dr. Manish Pokharel', designation: 'Dean', organization: 'School of Engineering, Kathmandu University' },
      { name: 'Prof. Dr. Subarna Shakya', designation: 'Director', organization: 'IT Innovation Center, Tribhuvan University' },
    ],
  },
  {
    title: 'Institutional Advisory',
    members: [
      { name: 'Mr. Ramesh Sharma Paudyal', designation: 'Former Director General', organization: 'Department of IT (DoIT)' },
      { name: 'Mr. Bhupendra Bhandari', designation: 'Former Chairman', organization: 'Nepal Telecommunications Authority' },
      { name: 'Er. Umesh Gupta', designation: 'Former Executive Director', organization: 'Industrial Enterprise Development Institute' },
      { name: 'Mr. Gaurab Raj Pandey', designation: 'President', organization: 'NAS-IT' },
      { name: 'Ms. Sunaina Ghimire Pandey', designation: 'Former President', organization: 'Federation of Computer Association Nepal (CAN Federation)' },
    ],
  },
  {
    title: 'Jury Advisors',
    members: [
      { name: 'Mr. Adesh Khadka', designation: 'Director General', organization: 'National Cyber Security Center, OPMCM' },
      { name: 'Mr. Anil Kumar Dutta', designation: 'Joint Secretary', organization: 'eGovernance Board, OPMCM' },
      { name: 'Mr. Narottam Aryal', designation: 'President', organization: "King's College" },
      { name: 'Mrs. Guna Keshari Pradhan', designation: 'President', organization: 'Women in IT (WIIT)' },
      { name: 'Mr. Sushil Pokharel', designation: 'Vice President', organization: 'International Hydropower Association' },
      { name: 'Mr. Bikram Shrestha', designation: 'President', organization: 'Nepal Internet Foundation' },
    ],
  },
  {
    title: 'South Asia Jury',
    members: [
      { name: 'Mr. Adnan Faisal', designation: 'Founder & CEO', organization: 'ScaleX, Pakistan' },
      { name: 'Dr. Bhoj Raj Ghimire', designation: 'Asst. Prof & Head – School of Technology', organization: 'Nepal Open University, Nepal' },
      { name: 'Dr. Chaminda Weerabaddana', designation: 'Specialist – Health Informatics', organization: 'Ministry of Health and Mass Media, Sri Lanka' },
      { name: 'Mr. Hempal Shrestha', designation: 'Knowledge Management Specialist', organization: 'ICT Foundation Nepal, Nepal' },
      { name: 'Dr. Madan Mohan Alevoor Rao', designation: 'Research Director', organization: 'Your Story Media, India' },
      { name: 'Mr. Pavel Sarwar', designation: 'Co-Founder', organization: 'Youth Hub, Bangladesh' },
    ],
  },
]
