import type { TvEpisode, GrandFinale, MediaCoverage } from '@/types'

export const MEDIA_COVERAGES: MediaCoverage[] = [
  { id: 'mc-1',  outlet: 'Annapurna Express', url: 'https://theannapurnaexpress.com/story/60800/',                                                                                                         thumbnail: 'https://annapurnaexpress.prixacdn.net/media/albums/IMG_8533_55SmXtWj74.jpeg',                                                title: 'ICT Award 2025 concludes in Lalitpur' },
  { id: 'mc-2',  outlet: 'Techpana',           url: 'https://www.techpana.com/2025/154581/ict-awards-nepal-10th-edition-24-winners',                                                                       thumbnail: 'https://techpana.prixacdn.net/media/albums/ict_award_2025_HaCh0ayn3f.jpg',                                                   title: 'यस्ता छन् दसौँ संस्करणको आईसीटी अवार्डका २४ विजेता' },
  // { id: 'mc-3',  outlet: 'Nepal Profit',        url: 'https://nepalprofit.com/2025/12/41337/',                                                                                                              thumbnail: 'https://nepalprofit.com/wp-content/uploads/2025/12/Indrive.webp',                                                             title: 'इन्ड्राइभ आइसिटी अवार्ड २०२५ सम्पन्न, १७ विधामा प्रविधि क्षेत्रका स्टार्टअप, संस्था र व्यक्तिहरू सम्मानित' },
  { id: 'mc-4',  outlet: 'Business 360',        url: 'https://www.b360nepal.com/detail/27272/10th-ict-awards-finale-highlights-ict-role-in-disaster-response-election-readiness',                          thumbnail: 'https://www.b360nepal.com/uploads/posts/10th-ICT-Awards-(1)-1766381719.jpg',                                                  title: '10th ICT Awards finale highlights ICT role in disaster response, election readiness' },
  { id: 'mc-5',  outlet: 'Shilapatra',           url: 'https://shilapatra.com/detail/173870',                                                                                                               thumbnail: 'https://shilapatracdn.de/uploads/posts/Group-Photo-1766384327.jpg',                                                           title: '१०औँ संस्करणको आईसीटी अवार्ड २०२५ सम्पन्न, १७ विधामा स्टार्टअप, संस्था र व्यक्तित्व सम्मानित' },
  { id: 'mc-7',  outlet: 'Businesspana',         url: 'https://businesspana.com/more/update/30074/',                                                                                                        thumbnail: 'https://businesspana.com/wp-content/uploads/2025/12/photo-with-logo-Recovered.gif',                                           title: 'आइसिटी अवार्ड २०२५ सम्पन्न, यी हुन् विजेता हुने स्टार्टअप, संस्था र व्यक्तित्व' },
  { id: 'mc-8',  outlet: 'Bizpati',             url: 'https://bizpati.com/2025/12/186103/',                                                                                                                thumbnail: 'https://bizpati.com/wp-content/uploads/2025/12/Untitled-1-copy-95.png',                                                      title: 'इन्ड्राइभ आइसिटी अवार्ड २०२५ सम्पन्न, १७ विधामा प्रविधि क्षेत्रका स्टार्टअप, संस्था र व्यक्तित्वहरू सम्मानित' },
  { id: 'mc-9',  outlet: 'ICT Samachar',        url: 'https://ictsamachar.com/news/indrive-ict-awards-2025-concluded-technology-startups-organizations-and-individuals-honored-in-17-categories/',         thumbnail: 'https://ictsamacharcdn.prixacdn.net/media/albums/New_Project_74_DMMLOnm5sq_SF4iA2ew9v.jpg',                                   title: 'इन्ड्राइभ आइसिटी अवार्ड २०२५ सम्पन्न, १७ विधामा प्रविधि क्षेत्रका स्टार्टअप, संस्था र व्यक्तित्वहरू सम्मानित' },
  { id: 'mc-10', outlet: 'Desh Sanchar',         url: 'https://deshsanchar.com/2025/12/21/1128839/',                                                                                                        thumbnail: 'https://assets.deshsanchar.com/wp-content/uploads/2025/12/21184047/Group-Photo.jpg',                                          title: 'इन्ड्राइभ आइसिटी अवार्ड २०२५ सम्पन्न, १७ विधामा प्रविधि क्षेत्रका स्टार्टअप, संस्था र व्यक्तिहरू सम्मानित' },
  { id: 'mc-11', outlet: 'Good Nepal',           url: 'https://www.goodnepal.com/detail/244',                                                                                                               thumbnail: 'https://www.goodnepal.com/uploads/posts/Winner-1766379254.jpg',                                                               title: 'आइसिटी अवार्ड २०२५: प्रविधि क्षेत्रका स्टार्टअप, संस्था र व्यक्तित्वहरू सम्मानित' },
  { id: 'mc-12', outlet: 'Nepali Telecom',       url: 'https://www.nepalitelecom.com/ict-award-2025',                                                                                                       thumbnail: 'https://www.nepalitelecom.com/wp-content/uploads/2025/10/ICT-Award-2025-all-winners.jpeg',                                    title: 'ICT Award 2025: Full list of winners at grandest event' },
  { id: 'mc-13', outlet: 'DC Nepal',             url: 'https://www.dcnepal.com/2025/12/724120/',                                                                                                            thumbnail: 'https://www.dcnepal.com/wp-content/uploads/2025/12/jury_1803f60e.jpg',                                                       title: 'इन्ड्राइभ आइसिटी अवार्ड २०२५ सम्पन्न, १७ विधामा प्रविधि क्षेत्रका स्टार्टअप, संस्था र व्यक्तित्वहरू सम्मानित' },
]

export const GRAND_FINALES: GrandFinale[] = [
  { year: 2025, youtubeId: 'sWBu8PpOQg8' },
  { year: 2024, youtubeId: 'bKIWfZscb1U' },
  { year: 2023, youtubeId: 'u4UMGLqXK_c' },
  { year: 2022, youtubeId: '7tauU5jpaUQ' },
  { year: 2021, youtubeId: 'Aj_qw_h9yOM' },
  { year: 2019, youtubeId: 'LabxeYHbQTo' },
  { year: 2018, youtubeId: 'zxjTnudsgMs' },
  { year: 2017, youtubeId: 'Z8roysD-_Ec' },
  { year: 2016, youtubeId: '8BNy6z5f8YE' },
]

export const TV_EPISODES: TvEpisode[] = [
  // 2025 — Himalaya TV HD
  { id: 'ep-2025-1', year: 2025, episodeNumber: 1, youtubeId: 'nGeGEkW06oY', channel: 'Himalaya TV HD' },
  { id: 'ep-2025-2', year: 2025, episodeNumber: 2, youtubeId: 'om-I7z926AI', channel: 'Himalaya TV HD' },
  { id: 'ep-2025-3', year: 2025, episodeNumber: 3, youtubeId: 'b8dqzOlUrhw', channel: 'Himalaya TV HD' },
  { id: 'ep-2025-4', year: 2025, episodeNumber: 4, youtubeId: 'ny50R5Iy2PM', channel: 'Himalaya TV HD' },
  { id: 'ep-2025-5', year: 2025, episodeNumber: 5, youtubeId: 'fBJbNZCiw4c', channel: 'Himalaya TV HD' },
  // 2024 — Kantipur TV HD
  { id: 'ep-2024-1', year: 2024, episodeNumber: 1, youtubeId: 'ncPuu4W2k3Y', channel: 'Kantipur TV HD' },
  { id: 'ep-2024-2', year: 2024, episodeNumber: 2, youtubeId: 'BUryoXZWCP0', channel: 'Kantipur TV HD' },
  { id: 'ep-2024-3', year: 2024, episodeNumber: 3, youtubeId: '8TQ91arbGZ8', channel: 'Kantipur TV HD' },
  { id: 'ep-2024-4', year: 2024, episodeNumber: 4, youtubeId: '6BupEVjIyuE', channel: 'Kantipur TV HD' },
  { id: 'ep-2024-5', year: 2024, episodeNumber: 5, youtubeId: '6x_Ou91S2tU', channel: 'Kantipur TV HD' },
  // 2023 — Kantipur TV HD
  { id: 'ep-2023-1', year: 2023, episodeNumber: 1, youtubeId: 'UKB717iJfQY', channel: 'Kantipur TV HD' },
  { id: 'ep-2023-2', year: 2023, episodeNumber: 2, youtubeId: 'GO0J7HHdpvM', channel: 'Kantipur TV HD' },
  { id: 'ep-2023-3', year: 2023, episodeNumber: 3, youtubeId: '9p5uL_V3lsQ', channel: 'Kantipur TV HD' },
  { id: 'ep-2023-4', year: 2023, episodeNumber: 4, youtubeId: 'Tk35ikj8hAY', channel: 'Kantipur TV HD' },
  { id: 'ep-2023-5', year: 2023, episodeNumber: 5, youtubeId: 'w6OK1YPj4ic', channel: 'Kantipur TV HD' },
  // 2022 — Kantipur TV HD
  { id: 'ep-2022-1', year: 2022, episodeNumber: 1, youtubeId: '5W1Ay0TaME8', channel: 'Kantipur TV HD' },
  { id: 'ep-2022-2', year: 2022, episodeNumber: 2, youtubeId: 'w23ve4xkHmM', channel: 'Kantipur TV HD' },
  { id: 'ep-2022-3', year: 2022, episodeNumber: 3, youtubeId: 'dw1Q4OzqueY', channel: 'Kantipur TV HD' },
  { id: 'ep-2022-4', year: 2022, episodeNumber: 4, youtubeId: 'FA9kG_G30g4', channel: 'Kantipur TV HD' },
]
