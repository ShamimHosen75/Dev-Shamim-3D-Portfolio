// Content mirrored from https://dev-shamim.vercel.app/ (source: ShamimHosen75/dev-shamim-portfolio).

export const bio = {
  name: 'Billal Hosen Shamim',
  shortName: 'Shamim',
  roles: ['Aspiring Software Engineer', 'Competitive Programmer', 'MERN Stack Developer', 'WordPress Expert'],
  headline: 'I build high-quality websites that grow your business & interactive web solutions',
  description:
    "I'm an enthusiastic programmer working on web application development for more than 5 years. I'm passionate about coding to make people's daily life easier and always eager to take on new challenges. With a passion for learning, I'm dedicated to delivering high-quality results. My core skills are based on JavaScript, React JS, and WordPress, which I love to work with most.",
  tagline: 'Building the future with code and AI',
  goals:
    'To become a skilled Software Engineer & build impactful AI-powered solutions that solve real-world problems.',
  yearsOfExperience: 5,
  location: 'Dhaka, Bangladesh',
  availability: '24/7 for projects',
  email: 'billal.shamim75@gmail.com',
  resume: 'https://drive.google.com/file/d/1Tuaw6I_V2PlsGnzyhXeRG1y82r6RQiSu/view?usp=sharing',
  github: 'https://github.com/ShamimHosen75',
  linkedin: 'https://www.linkedin.com/in/billal-hosen-shamim/',
  facebook: 'https://www.facebook.com/billal.hosen.shamim96',
  twitter: 'https://twitter.com/ShamimHosen75',
};

export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend Development',
    skills: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Bootstrap 5', 'HTML5/CSS3'],
  },
  { title: 'Backend Development', skills: ['Node.js', 'Express.js', 'REST APIs', 'Go/Golang'] },
  { title: 'Database & Cloud', skills: ['MongoDB', 'Supabase', 'Firebase', 'MySQL'] },
  { title: 'Programming Languages', skills: ['JavaScript', 'C/C++', 'Python', 'PHP', 'Go/Golang'] },
  { title: 'CMS & Design', skills: ['WordPress', 'Wix', 'WooCommerce', 'Yoast SEO', 'Figma', 'Canva'] },
  { title: 'Tools & Technologies', skills: ['Git/GitHub', 'VS Code', 'Webpack', 'Vercel', 'Vite', 'Netlify'] },
];

export interface Experience {
  role: string;
  company: string;
  location: string;
  date: string;
  desc: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    role: 'Web Developer - Full time',
    company: 'Ashma Tech Limited',
    location: 'Dhaka, Bangladesh',
    date: 'Present',
    desc: 'Leading full-stack web development using React JS, Next JS, and Node JS for scalable web applications. Building and managing backend services with Supabase and Firebase. Developing and maintaining WordPress and WooCommerce-based e-commerce stores using Woodmart and Elementor. Leveraging AI-assisted vibe coding to accelerate development workflows and deliver high-quality solutions.',
    skills: ['React JS', 'Next JS', 'Node JS', 'Supabase', 'Firebase', 'JavaScript', 'WordPress', 'Elementor', 'WooCommerce', 'Woodmart', 'Vibe Coding'],
  },
  {
    role: 'Web Developer - Full time',
    company: 'Radius ICT',
    location: 'Dhaka, Bangladesh',
    date: 'Jan 2025 - Jan 2026',
    desc: 'Developed and maintained full-stack web applications using React JS, Next JS, and Node JS with Supabase and Firebase for backend services. Built and customized WordPress and WooCommerce e-commerce stores using Woodmart and Elementor, delivering responsive and high-performance websites for diverse clients.',
    skills: ['React JS', 'Next JS', 'Node JS', 'Supabase', 'Firebase', 'WordPress', 'Elementor', 'WooCommerce', 'Woodmart', 'JavaScript'],
  },
  {
    role: 'Lead Web Developer - Full time',
    company: 'Ethical Den',
    location: 'Remote',
    date: 'Aug 2024 - Dec 2024',
    desc: 'Worked as team lead developer on frontend and WordPress development projects using the Elementor page builder, Divi, WPBakery and WooCommerce.',
    skills: ['WordPress', 'Elementor', 'WooCommerce', 'WPBakery', 'Divi', 'HTML 5', 'CSS 3', 'JavaScript'],
  },
  {
    role: 'Web Developer - Full time',
    company: 'bdCalling IT LTD',
    location: 'Dhaka, Bangladesh',
    date: 'Sep 2023 - Nov 2023',
    desc: 'Worked on WordPress development projects using the Elementor page builder, Divi, WPBakery and WooCommerce.',
    skills: ['WordPress', 'Elementor', 'WooCommerce', 'WPBakery', 'HTML 5', 'CSS 3', 'JavaScript'],
  },
  {
    role: 'Frontend Engineer - Intern',
    company: 'App Coderz, USA',
    location: 'Remote',
    date: 'Dec 2022 - May 2023',
    desc: 'Worked on the frontend of web applications using MERN stack technology and on CMS projects in WordPress.',
    skills: ['ReactJS', 'NodeJS', 'Tailwind CSS', 'JavaScript', 'MongoDB', 'Express JS', 'WordPress', 'WooCommerce', 'WPBakery'],
  },
];

export interface Education {
  school: string;
  location: string;
  date: string;
  grade: string;
  degree: string;
  desc: string;
}

export const education: Education[] = [
  {
    school: 'World University of Bangladesh',
    location: 'Dhaka, Bangladesh',
    date: '2026 - 2029',
    grade: 'In Progress',
    degree: 'B.Sc in Computer Science and Engineering (CSE)',
    desc: 'Focused on the core pillars of computer science, including Data Structures, Algorithms, Object-Oriented Programming (OOP), and Database Management Systems. Actively involved in applying these academic principles to solve complex engineering problems in my personal and professional projects.',
  },
  {
    school: 'Habiganj Polytechnic Institute',
    location: 'Habiganj, Bangladesh',
    date: '2019 - 2023',
    grade: '3.59 / 4.00',
    degree: 'Diploma in Engineering - Computer Science and Technology',
    desc: 'Completed Diploma in Computer Science & Engineering. Studied Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks.',
  },
  {
    school: 'D.C.P High School',
    location: 'Chunarughat, Bangladesh',
    date: '2014 - 2019',
    grade: '4.79 / 5.00',
    degree: 'Secondary School Certificate - General Mechanics',
    desc: 'Completed secondary education with focus on technical subjects and General Mechanics.',
  },
];

export interface Project {
  title: string;
  date: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    title: 'DeenHub - Islamic App',
    date: 'Sep 2025 - Feb 2026',
    category: 'Vibe Coding',
    description:
      'A comprehensive Islamic digital platform combining Quran reading/listening with mosque management tools. Features include all 114 surahs with audio from renowned reciters, prayer times, tasbeeh counter, prayer tracker, Hijri calendar, Zakat calculator, and Hajj/Umrah guides. The dashboard offers full mosque administration: member management, donation tracking, expense monitoring, imam/staff payroll, and automated notifications. Supports Bengali & English localization, dark/light themes, and role-based access control.',
    image: 'https://i.ibb.co.com/ymvds1NK/Project13.png',
    tags: ['React Js', 'TypeScript', 'Framer Motion', 'Vite', 'Tailwind CSS', 'Supabase'],
    github: 'https://github.com/ShamimHosen75/masjid-manage-pro',
    liveLink: 'https://deenhub.online/',
  },
  {
    title: 'DocZen - Medical & Health React Template',
    date: 'Nov 2025 - Dec 2025',
    category: 'Web App',
    description:
      'A next-generation healthcare platform template engineered for speed and scalability. Built on the bleeding edge with React 19 and Tailwind CSS 4, this 15-page architecture features seamless Framer Motion animations, appointment booking logic, and a fully responsive design system optimized for medical professionals.',
    image: 'https://i.ibb.co.com/9kdfV0Gt/Project-1.png',
    tags: ['React Js', 'TypeScript', 'Framer Motion', 'Vite 7', 'Tailwind CSS'],
    github: 'https://github.com/ShamimHosen75/DocZen---Medical-Health-React-Web-Template',
    liveLink: 'https://doczen-medical.vercel.app/',
  },
  {
    title: "Sawlin's Lifestyle",
    date: 'Jan 2026 - Feb 2026',
    category: 'Web App',
    description:
      "Sawlin's Lifestyle is a modern, full-featured e-commerce platform for fashion and lifestyle products. Built with React, TypeScript, and Supabase, it features a dynamic product catalog with category filtering, real-time inventory management, secure checkout flow, user authentication, an admin dashboard for store management, and a responsive design with smooth Framer Motion animations for a premium shopping experience.",
    image: 'https://i.ibb.co.com/WNnwkSL6/Project14.png',
    tags: ['React Js', 'TypeScript', 'Framer Motion', 'Vite', 'Tailwind CSS', 'Supabase'],
    github: 'https://github.com/ShamimHosen75/Sawlin-s-Lifestyle-Ecommerce',
    liveLink: 'https://sawlins-lifestyle.vercel.app/',
  },
  {
    title: 'Smart Ranna - Cook Smarter with AI',
    date: 'Aug 2025',
    category: 'Vibe Coding',
    description:
      'SmartRanna is an AI-powered cooking assistant that helps users discover recipes instantly by typing a dish, listing available ingredients, or speaking their request. Its goal is to remove decision fatigue in the kitchen and speed up meal planning with an intuitive, hands-free search experience.',
    image: 'https://i.ibb.co.com/tM6xF5dk/Project-21.png',
    tags: ['React Js', 'MongoDB', 'Node Js', 'Express Js', 'Tailwind CSS'],
    github: 'https://github.com/ShamimHosen75/Smart-Ranna-App',
    liveLink: 'https://smart-ranna.vercel.app/',
  },
  {
    title: 'Sam-Fitness',
    date: 'Apr 2022 - May 2022',
    category: 'Web App',
    description:
      'A Firebase-hosted single-page fitness web app focused on class/program discovery, trainer profiles, and online booking/membership flows to convert visitors into paying members.',
    image: 'https://i.ibb.co/Jykgdyd/project-5.png',
    tags: ['React Js', 'JavaScript', 'Bootstrap 5', 'Firebase'],
    github: 'https://github.com/ShamimHosen75/SamFitness-React-Auth',
    liveLink: 'https://samfitnessc.web.app/',
  },
  {
    title: 'Next Gear Auto',
    date: 'Dec 2025 - Jan 2026',
    category: 'WordPress',
    description:
      'A WordPress car rental site with a conversion-first landing page, vehicle listings, online booking and payment flows, and a mobile-first UX, built with WooCommerce, a booking plugin and ACF.',
    image: 'https://i.ibb.co.com/5WYnbpK7/Project-3.png',
    tags: ['WordPress', 'WooCommerce', 'Booking Plugin', 'ACF', 'Payment Gateway', 'PHP'],
    liveLink: 'https://rentnextgearauto.com/',
  },
  {
    title: 'Film Maker Life',
    date: 'Sep 2023 - Oct 2023',
    category: 'WordPress',
    description:
      'FilmmakerLife is a WordPress-based online magazine for filmmakers and creators that publishes interviews, magazine issues, and event/award coverage to amplify cinematic talent. The site combines long-form editorial features with active social channels and event promotion.',
    image: 'https://i.ibb.co/GWBV0z9/project-9.png',
    tags: ['WordPress', 'Elementor', 'Plugins'],
    liveLink: 'http://www.filmmakerlife.com/',
  },
  {
    title: 'Doraleh General Hospital',
    date: 'Oct 2024 - Nov 2024',
    category: 'WordPress',
    description:
      'A website for Doraleh General Hospital, a modern, patient-focused medical institution in East Africa. The content positions the brand around "Excellence in Healthcare" and "Innovation in Treatment", emphasizing qualified doctors, extra care, and round-the-clock availability.',
    image: 'https://i.ibb.co.com/Q3kPFGGr/Project-18.png',
    tags: ['WordPress', 'Elementor', 'Plugins'],
    liveLink: 'https://doralehhospital.com/',
  },
  {
    title: 'Golden Rule Transport',
    date: 'Sep 2024 - Dec 2024',
    category: 'WordPress',
    description:
      'A WordPress site for a Minnesota-based NEMT and wheelchair-accessible transport provider. It presents a clear services lineup, mission-led copy, and frictionless contact/quote paths to convert visitors into ride requests.',
    image: 'https://i.ibb.co.com/qLS8hRx3/Project-16.png',
    tags: ['WordPress', 'Elementor', 'Plugins'],
    liveLink: 'https://goldenruletrans.com/',
  },
  {
    title: 'Massart',
    date: 'Jun 2024 - Dec 2024',
    category: 'WordPress',
    description:
      "A WordPress cultural site that curates Kolkata's Durga Puja as a large public-art festival and runs a multi-day Preview Show with guided tours, gallery exhibits, and preview-pass registrations.",
    image: 'https://i.ibb.co.com/fGTHQ5H7/scrnli-Jj-Pr7-E23-Z0-R2-IF.png',
    tags: ['WordPress', 'Elementor', 'Plugins'],
    liveLink: 'https://massart.in/',
  },
  {
    title: 'Cure And Safe Homoeo',
    date: 'Nov 2024 - Jan 2025',
    category: 'WooCommerce',
    description:
      'A WooCommerce store offering a diverse catalog of homeopathic remedies, with a user-friendly shopping experience, discounted products, consultation support, educational content, free shipping and 24/7 support.',
    image: 'https://i.ibb.co.com/7NK67dR5/Project-17.png',
    tags: ['WordPress', 'WooCommerce', 'Elementor'],
    liveLink: 'https://cureandsafehomoeo.com/',
  },
  {
    title: 'SPS Law',
    date: 'Nov 2025 - Dec 2025',
    category: 'WordPress',
    description:
      'A comprehensive brand refresh and digital presence update for SPS Law Group LLP, a Canadian law firm serving a diverse, multilingual community, with a visual identity that projects authority, trust, and accessibility.',
    image: 'https://i.ibb.co.com/DPMXWjGw/Project-12.png',
    tags: ['WordPress', 'Elementor', 'Plugins'],
    liveLink: 'https://spslaw.ca/',
  },
];
