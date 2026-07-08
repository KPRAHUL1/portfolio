export interface LinkedInPost {
  id: number;
  embedUrl: string;
  height: number;
  postUrl?: string;
  tags?: string[];
}

export const linkedinPosts: LinkedInPost[] = [
  {
    id: 1,
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:7379090949693440000?collapsed=1",
    height: 542,
  },
  {
    id: 2,
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7367482732139962368?collapsed=1",
    height: 541,
  },
  {
    id: 3,
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7366109036859076608?collapsed=1",
    height: 541,
  },
  {
    id: 4,
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7345499755940147202?collapsed=1",
    height: 566,
    postUrl:
      "https://www.linkedin.com/posts/rahulk07_jsmavens-techmeetup-javascript-activity-7345504125943484416-XXHg",
    tags: ["JSMavens", "TechMeetup", "JavaScript"],
  },
  {
    id: 5,
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:7322673307676196867?collapsed=1",
    height: 635,
  },
  {
    id: 6,
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:share:7318751460886728704?collapsed=1",
    height: 669,
  },
];
