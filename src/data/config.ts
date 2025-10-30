const config = {
  // --- 1. Your Basic Info ---
  title: "Sameer Shaikh | Data Science | Web Dev ",
  author: "Sameer Shaikh",
  email: "sameerwork0207@gmail.com", // Your email
  site: "https://portfolio-one-lyart-66.vercel.app/", // We'll update this later

  // --- 2. Your Descriptions (for Google) ---
  description: {
    long: "Explore the portfolio of Sameer Shaikh, a student and developer passionate about Data Science, AI and Web Dev.",
    short:
      "The portfolio of Sameer Shaikh, Data Science and Web Dev enthusiast",
  },

  // --- 3. Your Keywords (for Google) ---
  keywords: [
    "Sameer Shaikh",
    "Sameer",
    "portfolio",
    "Dara Science",
    "Web Development",
    "Developer",
    "AI",
    "ML",
    "Student",
  ],

  // --- 4. Your Social Links (Very Important!) ---
  social: {
    twitter: "https://x.com/your-twitter-username", // Your Twitter
    linkedin: "https://www.linkedin.com/in/sameer-ctrl/", // Your LinkedIn
    instagram: "https://www.instagram.com/meeracle.music/", // Your Instagram
    facebook: "https://www.facebook.com/your-facebook-username/", // Your Facebook
    github: "https://github.com/sameerwork0207", // Your GitHub
  },

  // --- You can leave this part alone ---
  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
};
export { config };
export const social = config.social;