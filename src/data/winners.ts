import type { Winner } from '@/types'
import { CATEGORIES } from '@/data/categories'

export const WINNERS: Winner[] = [
  // 2016
  { year: 2016, categoryId: 'startup-award', categoryName: 'Best Startup ICT Award', winnerName: 'SastoDeal, KulTechno Lab, Nep Flights, Yellow Nepal' },
  { year: 2016, categoryId: 'pioneer-award', categoryName: 'ICT Pioneer Award', winnerName: 'Mr. Muni Bahadur Shakya' },
  // 2017
  { year: 2017, categoryId: 'startup-award', categoryName: 'Startup ICT Award', winnerName: 'Paaila Technology, Basobaas Pvt. Ltd.' },
  { year: 2017, categoryId: 'product-award', categoryName: 'Product ICT Award', winnerName: 'Pari, Everest Cast, Nepal VR' },
  { year: 2017, categoryId: 'pioneer-award', categoryName: 'Pioneer ICT Award', winnerName: 'Mr. Suresh Regmi' },
  { year: 2017, categoryId: 'nepali-diaspora', categoryName: 'Diaspora ICT Award', winnerName: 'Mr. Kiran Bhakta Joshi' },
  // 2018
  { year: 2018, categoryId: 'pioneer-award', categoryName: 'Pioneer ICT Award', winnerName: 'Mr. Sanjib Raj Bhandari' },
  { year: 2018, categoryId: 'nepali-diaspora', categoryName: 'Nepali Diaspora ICT Award', winnerName: 'Mr. Himal Karmacharya' },
  { year: 2018, categoryId: 'entrepreneur-award', categoryName: 'Entrepreneur ICT Award', winnerName: 'Mr. Bishwas Dhakal' },
  { year: 2018, categoryId: 'startup-award', categoryName: 'Startup ICT Award', winnerName: 'People\'s Development Lab' },
  { year: 2018, categoryId: 'product-award', categoryName: 'Product ICT Award', winnerName: 'iSolution Life' },
  { year: 2018, categoryId: 'digital-governance', categoryName: 'Digital Governance ICT Award', winnerName: 'Nepal Police' },
  // 2019
  { year: 2019, categoryId: 'startup-award', categoryName: 'Startup ICT Award', winnerName: 'E-Digital Nepal Pvt. Ltd.' },
  { year: 2019, categoryId: 'product-award', categoryName: 'Product ICT Award', winnerName: 'Mediflow Systems and Services' },
  { year: 2019, categoryId: 'rising-star', categoryName: 'Rising Student ICT Award', winnerName: 'Raktadan' },
  { year: 2019, categoryId: 'pioneer-award', categoryName: 'Pioneer ICT Award', winnerName: 'Mr. Mahabir Pun' },
  { year: 2019, categoryId: 'nepali-diaspora', categoryName: 'Nepali Diaspora ICT Award', winnerName: 'Mr. Samir Maskey' },
  { year: 2019, categoryId: 'entrepreneur-award', categoryName: 'Entrepreneur ICT Award', winnerName: 'Mr. Amit Agrawal' },
  { year: 2019, categoryId: 'digital-governance', categoryName: 'Digital Governance ICT Award', winnerName: 'Public Service Commission (Lok Sewa Aayog)' },
  { year: 2019, categoryId: 'digital-edu-public', categoryName: 'Digital Education ICT Award', winnerName: 'Nepal Open University (NOU)' },
  // 2020
  { year: 2020, categoryId: 'startup-award', categoryName: 'Startup ICT Award', winnerName: 'Cryptogen Nepal Pvt. Ltd.' },
  { year: 2020, categoryId: 'product-award', categoryName: 'Product ICT Award', winnerName: 'CPFDS and KYC Management System' },
  { year: 2020, categoryId: 'rising-star', categoryName: 'Rising Student ICT Award', winnerName: 'Sanchai Chau' },
  { year: 2020, categoryId: 'pioneer-award', categoryName: 'Pioneer ICT Award', winnerName: 'Mr. Nilkantha Upreti' },
  { year: 2020, categoryId: 'entrepreneur-award', categoryName: 'Entrepreneur ICT Award', winnerName: 'Mr. Binay Bohra' },
  { year: 2020, categoryId: 'nepali-diaspora', categoryName: 'Nepali Diaspora ICT Award', winnerName: 'Mr. Gaurav Raj Upadhyay' },
  { year: 2020, categoryId: 'woman-icon', categoryName: 'Woman Icon ICT Award', winnerName: 'Prof. Timila Yami Thapa' },
  { year: 2020, categoryId: 'digital-edu-public', categoryName: 'Digital Education ICT Award', winnerName: 'Budhanilkantha School' },
  { year: 2020, categoryId: 'digital-governance', categoryName: 'Digital Governance ICT Award', winnerName: 'Inland Revenue Department (IRD)' },
  // 2021
  { year: 2021, categoryId: 'startup-award', categoryName: 'Startup ICT Award', winnerName: 'Kheti Venture Pvt. Ltd.' },
  { year: 2021, categoryId: 'product-award', categoryName: 'Product ICT Award', winnerName: 'Mikha' },
  { year: 2021, categoryId: 'rising-star', categoryName: 'Rising Star Innovation ICT Award', winnerName: 'Mushoor' },
  { year: 2021, categoryId: 'pioneer-award', categoryName: 'Pioneer ICT Award', winnerName: 'Mr. Manohar Kumar Bhattarai' },
  { year: 2021, categoryId: 'entrepreneur-award', categoryName: 'Entrepreneur ICT Award', winnerName: 'Mr. Deepesh Pradhan' },
  { year: 2021, categoryId: 'nepali-diaspora', categoryName: 'Nepali Diaspora ICT Award', winnerName: 'Mr. Prasanna Dhungel' },
  { year: 2021, categoryId: 'woman-icon', categoryName: 'Woman Icon ICT Award', winnerName: 'Mrs. Gunakeshari Pradhan Manandhar' },
  { year: 2021, categoryId: 'digital-edu-private', categoryName: 'Digital Education ICT Award (Private)', winnerName: 'Rato Bangala School, Patan' },
  { year: 2021, categoryId: 'digital-edu-public', categoryName: 'Digital Education ICT Award (Public)', winnerName: 'Kalika ManavGyan Secondary School, Butwal' },
  { year: 2021, categoryId: 'digital-governance', categoryName: 'Digital Governance ICT Award', winnerName: 'Department of Land Management and Archive' },
  { year: 2021, categoryId: 'digital-services-ent', categoryName: 'Digital Services ICT Award', winnerName: 'Nepal Clearing House Limited (NCHL)' },
  // 2022
  { year: 2022, categoryId: 'startup-award', categoryName: 'Startup ICT Award', winnerName: 'Monal Tech Pvt. Ltd.' },
  { year: 2022, categoryId: 'product-award', categoryName: 'Product ICT Award', winnerName: 'Galli Maps' },
  { year: 2022, categoryId: 'rising-star', categoryName: 'Rising Star Innovation ICT Award', winnerName: 'Karobar App' },
  { year: 2022, categoryId: 'south-asia-startup', categoryName: 'South Asia Startup ICT Award', winnerName: 'Tech4billion, India' },
  { year: 2022, categoryId: 'pioneer-award', categoryName: 'Pioneer ICT Award', winnerName: 'Mr. Bijay Shrestha' },
  { year: 2022, categoryId: 'entrepreneur-award', categoryName: 'Entrepreneur ICT Award', winnerName: 'Mr. Mangesh Lal Shrestha' },
  { year: 2022, categoryId: 'nepali-diaspora', categoryName: 'Nepali Diaspora ICT Award', winnerName: 'Dr. Ved Prasad Kafle' },
  { year: 2022, categoryId: 'woman-icon', categoryName: 'Woman Icon ICT Award', winnerName: 'Ms. Sheela Kansakar Karkee' },
  { year: 2022, categoryId: 'digital-edu-private', categoryName: 'Digital Education ICT Award (Private)', winnerName: 'Gyanodaya Bal Batika, Khokana' },
  { year: 2022, categoryId: 'digital-edu-public', categoryName: 'Digital Education ICT Award (Public)', winnerName: 'Gyanodaya Secondary School (GSS), Bafal' },
  { year: 2022, categoryId: 'digital-governance', categoryName: 'Digital Governance ICT Award', winnerName: 'Department of Foreign Employment (DoFE)' },
  { year: 2022, categoryId: 'digital-services-ent', categoryName: 'Digital Services ICT Award', winnerName: 'Fonepay Payment Service Ltd.' },
  // 2023
  { year: 2023, categoryId: 'startup-award', categoryName: 'Startup ICT Award', winnerName: 'Yarsa Tech Pvt. Ltd.' },
  { year: 2023, categoryId: 'product-award', categoryName: 'Product ICT Award', winnerName: 'QuickRPA' },
  { year: 2023, categoryId: 'rising-star', categoryName: 'Rising Star ICT Award', winnerName: 'Blanxer' },
  { year: 2023, categoryId: 'nepali-diaspora', categoryName: 'Nepali Diaspora ICT Award', winnerName: 'Prof. Dr. Suresh Manandhar' },
  { year: 2023, categoryId: 'woman-icon', categoryName: 'Woman Icon ICT Award', winnerName: 'Mrs. Sunaina Ghimire Pandey' },
  { year: 2023, categoryId: 'entrepreneur-award', categoryName: 'Entrepreneur ICT Award', winnerName: 'Mr. Anoop Sherchan' },
  { year: 2023, categoryId: 'pioneer-award', categoryName: 'Pioneer ICT Award', winnerName: 'Mr. Balkrishna Joshi' },
  { year: 2023, categoryId: 'professional-excellence', categoryName: 'Professional Excellence ICT Award', winnerName: 'Er. Lochan Lal Amatya' },
  { year: 2023, categoryId: 'digital-edu-private', categoryName: 'Digital Education ICT Award (Private)', winnerName: 'Adhyayan School, Kathmandu' },
  { year: 2023, categoryId: 'digital-edu-public', categoryName: 'Digital Education ICT Award (Public)', winnerName: 'Satyawati Secondary School, Tanahun' },
  { year: 2023, categoryId: 'digital-services-ent', categoryName: 'Digital Services ICT Award', winnerName: 'Tilganga Institute of Ophthalmology' },
  { year: 2023, categoryId: 'digital-governance', categoryName: 'Digital Governance ICT Award', winnerName: 'Nepal Stock Exchange (NEPSE)' },
  { year: 2023, categoryId: 'south-asia-startup', categoryName: 'South Asia Startup ICT Award', winnerName: 'Samuh Mediatech, Bhutan' },
  { year: 2023, categoryId: 'province-startup', categoryName: 'Province Startup ICT Recognition — Koshi', winnerName: 'Track On Nepal', isProvince: true, province: 'Koshi' },
  { year: 2023, categoryId: 'province-startup', categoryName: 'Province Startup ICT Recognition — Madhesh', winnerName: 'Ads Bee Media', isProvince: true, province: 'Madhesh' },
  { year: 2023, categoryId: 'province-startup', categoryName: 'Province Startup ICT Recognition — Bagmati', winnerName: 'Heartsun Technologies', isProvince: true, province: 'Bagmati' },
  { year: 2023, categoryId: 'province-startup', categoryName: 'Province Startup ICT Recognition — Gandaki', winnerName: 'RestroX Nepal', isProvince: true, province: 'Gandaki' },
  { year: 2023, categoryId: 'province-startup', categoryName: 'Province Startup ICT Recognition — Lumbini', winnerName: 'Tuna Technology', isProvince: true, province: 'Lumbini' },
  { year: 2023, categoryId: 'province-startup', categoryName: 'Province Startup ICT Recognition — Karnali', winnerName: 'Bio Karnali Aroma', isProvince: true, province: 'Karnali' },
  { year: 2023, categoryId: 'province-startup', categoryName: 'Province Startup ICT Recognition — Sudurpaschim', winnerName: 'NEEM Infosys', isProvince: true, province: 'Sudurpaschim' },
  // 2024
  { year: 2024, categoryId: 'startup-award', categoryName: 'Startup ICT Award', winnerName: 'Crimson Tech Pvt. Ltd.' },
  { year: 2024, categoryId: 'product-award', categoryName: 'Product ICT Award', winnerName: 'APIMS (API Management System)' },
  { year: 2024, categoryId: 'rising-star', categoryName: 'Rising Star Innovation ICT Award', winnerName: 'SpeakUp Nepal' },
  { year: 2024, categoryId: 'social-innovation', categoryName: 'Social Innovation ICT Award', winnerName: 'GeoKrishi' },
  { year: 2024, categoryId: 'south-asia-startup', categoryName: 'South Asia Startup ICT Award', winnerName: 'Hyphen SCs, India' },
  { year: 2024, categoryId: 'woman-icon', categoryName: 'Woman Icon ICT Award', winnerName: 'Ms. Bandana Sharma' },
  { year: 2024, categoryId: 'pioneer-award', categoryName: 'Pioneer ICT Award', winnerName: 'Prof. Dr. Suresh Raj Sharma', organization: 'Founding Vice Chancellor, Kathmandu University' },
  { year: 2024, categoryId: 'professional-excellence', categoryName: 'Professional Excellence ICT Award', winnerName: 'Dr. Bishesh Khanal', organization: 'Co-Founder, Director & Research Scientist, NAAMII' },
  { year: 2024, categoryId: 'entrepreneur-award', categoryName: 'Entrepreneur ICT Award', winnerName: 'Mr. Manohar Adhikari', organization: 'Managing Director, Foodmandu' },
  { year: 2024, categoryId: 'nepali-diaspora', categoryName: 'Nepali Diaspora ICT Award', winnerName: 'Ms. Nami Baral', organization: 'Founder & CEO, Niural Inc.' },
  { year: 2024, categoryId: 'digital-edu-private', categoryName: 'Digital Education ICT Award (Private)', winnerName: 'Learning Realm International (LRI) School', organization: 'Kalanki, Kathmandu' },
  { year: 2024, categoryId: 'digital-edu-public', categoryName: 'Digital Education ICT Award (Public)', winnerName: 'Sukuna Secondary School', organization: 'Morang, Koshi Province' },
  { year: 2024, categoryId: 'digital-services-ent', categoryName: 'Digital Services ICT Award (Enterprise)', winnerName: 'IME Pay' },
  { year: 2024, categoryId: 'digital-governance', categoryName: 'Digital Governance ICT Award', winnerName: 'Supreme Court of Nepal' },
  { year: 2024, categoryId: 'province-startup', categoryName: 'Province Startup — Koshi', winnerName: 'Delta Tech Pvt. Ltd.', isProvince: true, province: 'Koshi' },
  { year: 2024, categoryId: 'province-startup', categoryName: 'Province Startup — Madhesh', winnerName: 'Tezash Tech Pvt. Ltd.', isProvince: true, province: 'Madhesh' },
  { year: 2024, categoryId: 'province-startup', categoryName: 'Province Startup — Bagmati', winnerName: 'Abhiyantriki Karmashala Pvt. Ltd.', isProvince: true, province: 'Bagmati' },
  { year: 2024, categoryId: 'province-startup', categoryName: 'Province Startup — Gandaki', winnerName: 'Aakash Digital Pvt. Ltd.', isProvince: true, province: 'Gandaki' },
  { year: 2024, categoryId: 'province-startup', categoryName: 'Province Startup — Lumbini', winnerName: 'Ninja Infosys Pvt. Ltd.', isProvince: true, province: 'Lumbini' },
  { year: 2024, categoryId: 'province-startup', categoryName: 'Province Startup — Karnali', winnerName: 'Business Online Service Pvt. Ltd.', isProvince: true, province: 'Karnali' },
  { year: 2024, categoryId: 'province-startup', categoryName: 'Province Startup — Sudurpaschim', winnerName: 'Far West Infotech and Research Centre Pvt. Ltd.', isProvince: true, province: 'Sudurpaschim' },
  // 2025
  { year: 2025, categoryId: 'startup-award', categoryName: 'Startup ICT Award', winnerName: 'Arkbo Technologies Pvt. Ltd.' },
  { year: 2025, categoryId: 'product-award', categoryName: 'Product ICT Award', winnerName: 'QuickCCA' },
  { year: 2025, categoryId: 'rising-star', categoryName: 'Rising Star ICT Award', winnerName: 'MindBridge' },
  { year: 2025, categoryId: 'social-innovation', categoryName: 'Social Innovation ICT Award', winnerName: 'Kataho' },
  { year: 2025, categoryId: 'woman-icon', categoryName: 'Woman Icon ICT Award', winnerName: 'Munni Rajbhandari' },
  { year: 2025, categoryId: 'pioneer-award', categoryName: 'Pioneer ICT Award', winnerName: 'Dr. Allen Baulochan Tuladhar' },
  { year: 2025, categoryId: 'entrepreneur-award', categoryName: 'Entrepreneur ICT Award', winnerName: 'Bibhushan Bista' },
  { year: 2025, categoryId: 'nepali-diaspora', categoryName: 'Nepali Diaspora ICT Award', winnerName: 'Dinesh Silwal' },
  { year: 2025, categoryId: 'professional-excellence', categoryName: 'Professional Excellence ICT Award', winnerName: 'Ramkrishna Pariyar' },
  { year: 2025, categoryId: 'digital-edu-private', categoryName: 'Digital Education ICT Award (Private)', winnerName: 'Kopila Valley School', organization: 'Surkhet' },
  { year: 2025, categoryId: 'digital-edu-public', categoryName: 'Digital Education ICT Award (Public)', winnerName: 'Narayani Secondary School', organization: 'Chitwan' },
  { year: 2025, categoryId: 'digital-services-ent', categoryName: 'Digital Services ICT Award (Enterprise)', winnerName: 'NMB Bank' },
  { year: 2025, categoryId: 'digital-services-neo', categoryName: 'Digital Services ICT Award (Neo)', winnerName: 'Ambition Guru' },
  { year: 2025, categoryId: 'digital-governance', categoryName: 'Digital Governance ICT Award', winnerName: 'Social Security Fund' },
  { year: 2025, categoryId: 'south-asia-startup', categoryName: 'South Asia Startup ICT Award', winnerName: 'PriyoShop, Bangladesh' },
  { year: 2025, categoryId: 'province-startup', categoryName: 'Province Startup — Koshi', winnerName: 'Medicab Technologies Pvt. Ltd', isProvince: true, province: 'Koshi' },
  { year: 2025, categoryId: 'province-startup', categoryName: 'Province Startup — Madhesh', winnerName: 'Janaki Soft International Pvt. Ltd.', isProvince: true, province: 'Madhesh' },
  { year: 2025, categoryId: 'province-startup', categoryName: 'Province Startup — Bagmati', winnerName: 'Cloud Mandap Pvt. Ltd.', isProvince: true, province: 'Bagmati' },
  { year: 2025, categoryId: 'province-startup', categoryName: 'Province Startup — Gandaki', winnerName: 'Brand Builder Pvt. Ltd.', isProvince: true, province: 'Gandaki' },
  { year: 2025, categoryId: 'province-startup', categoryName: 'Province Startup — Lumbini', winnerName: 'Golden Technosoft IT Solution', isProvince: true, province: 'Lumbini' },
  { year: 2025, categoryId: 'province-startup', categoryName: 'Province Startup — Karnali', winnerName: 'Everest Wireless Network Pvt. Ltd.', isProvince: true, province: 'Karnali' },
  { year: 2025, categoryId: 'province-startup', categoryName: 'Province Startup — Sudurpaschim', winnerName: 'Busy Infotex Pvt. Ltd.', isProvince: true, province: 'Sudurpaschim' },
]

export const WINNER_YEARS = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016]

export const getWinnersByYear = (year: number) => WINNERS.filter(w => w.year === year)

/** All winners for a given categoryId, sorted newest-first. */
export const getWinnersByCategory = (categoryId: string): Winner[] =>
  WINNERS.filter(w => w.categoryId === categoryId).sort((a, b) => b.year - a.year)

/**
 * Unique award categories that actually have at least one winner,
 * preserving the A–E group order from CATEGORIES.
 * Each entry uses the canonical name from CATEGORIES.
 */
const _winnerCategoryIds = new Set(WINNERS.filter(w => !w.isProvince).map(w => w.categoryId))
export const WINNER_CATEGORIES = CATEGORIES.filter(c => _winnerCategoryIds.has(c.id)).map(c => ({
  id: c.id,
  name: c.name.replace(/ 2026$/, ''), // strip the current-year suffix for a timeless label
  group: c.group,
}))

/** Profile text for a winner — returns the stored profile or a generic placeholder. */
export const getWinnerProfile = (winner: Winner): string =>
  winner.profile ??
  `${winner.winnerName} was recognized with this ICT Award for outstanding contributions to Nepal's technology sector.`
