Bala Venkatarao Kurangi's Professional Portfolio: https://balavenkataraokurangi.netlify.app/

Project Overview:
This is a modern, responsive, and visually appealing personal portfolio website for 
Kurangi Bala Venkatarao, a Java Developer and AI Enthusiast. It showcases his technical 
skills, projects, experience, education, and achievements in an engaging format.

 Features: 
 Modern Design: Sleek, dark-themed UI with professional aesthetics.
 Responsive Layout: Optimized for seamless viewing across all devices (desktop,
 tablet, mobile).
 Interactive UI: Smooth animations, hover effects, and scroll-triggered transitions
 powered by Framer Motion.
 Dynamic Content: Sections for About Me, Skills, Projects, Experience, Education,
 and Contact.
 Skill Visualization: Progress bars with shimmer effects to highlight proficiency
 levels.
 Project Showcase: Detailed cards for each project, including technologies used
 and key features.
 Social Integration: Links to LinkedIn, GitHub, LeetCode, and GeeksforGeeks
 profiles.
 Contact Form: A simple form for visitors to get in touch.
 Optimized Performance: Fast loading times and smooth user experience.
 
 Technologies Used:
 Frontend Framework: React 18 (with Vite)
 Styling: Tailwind CSS (with custom animations and utility classes)
 UI Components: shadcn/ui (a collection of re-usable components built with Radix
 UI and Tailwind CSS)
 Icons: Lucide React (for general icons) and custom image assets for specific
 technologies (Java, Python, C, SQL, Spring Boot, Git, GitHub, LinkedIn, LeetCode,
 GeeksforGeeks).
 Animations: Framer Motion
 Build Tool: Vite
Package Manager: pnpm

 Project Structure:
 
 bala-portfolio/
 ├──public/ #Staticassets(e.g.,favicon.ico)
 ├──src/
 │├──assets/ #Imagesandcustomicons
 ││├──icons/ #Technologyandsocialmediaicons
 ││└──profile.jpg #Professionalprofilepicture
 │├──components/ui/ #ReusableUIcomponentsfromshadcn/ui
 │├──App.jsx #Mainapplicationcomponent(containsallsections)
 │├──App.css #CustomstylesandTailwindCSSimports
 │└──main.jsx #Applicationentrypoint
 ├──.gitignore
 ├──index.html #MainHTMLfile
 ├──package.json #Projectdependenciesandscripts
 ├──pnpm-lock.yaml #pnpmlockfile
 ├──postcss.config.js #PostCSSconfigurationforTailwindCSS
 ├──README.md #Thisfile
 ├──tailwind.config.js #TailwindCSSconfiguration
 └──vite.config.js #Vitebuildconfiguration
 
 Setup and Installation:
 To get a local copy up and running, follow these simple steps.
 Prerequisites
 Make sure you have Node.js and pnpm installed on your machine.- Node.js: Download & Install Node.js- pnpm: If you don't have pnpm, you can install it via npm:
 bash
  npm install -g pnpm
 Installation
 Clone the repository (if you received it as a ZIP, unzip it to your desired location):
 bash
    git clone <repository_url> # Replace with your actual repository URL if 
applicable
    cd bala-portfolio
 If you received a ZIP file, navigate to the unzipped bala-portfolio directory. For 
1. example, if you unzipped it to 
inside there's a 
C:\Users\YourUser\Downloads\bala-portfolio , and 
home\ubuntu\bala-portfolio structure, navigate to that deepest 
bala-portfolio folder.
 bash
    cd C:\Users\YourUser\Downloads\bala-portfolio\home\ubuntu\bala-portfolio
 2. Install dependencies:
 bash
    pnpm install
 Running the Project
 Development Mode
 To run the project in development mode with hot-reloading:
 pnpmrundev
 This will typically start the development server at 
in your web browser.
 Building for Production
 http://localhost:5173 . Open this URL 
To create an optimized production build of the project:
 pnpmrunbuild
 This command will generate a 
deployment.
 dist folder containing the static files ready for 
Previewing Production Build
 To preview the production build locally after running 
pnpmrunpreview
 pnpm run build :
 This will typically serve the 
dist folder at 
http://localhost:4173 .
Deployment
 This project is configured for easy deployment to static site hosting services like Netlify, 
Vercel, GitHub Pages, etc.
 Deploying to Netlify
 1. Connect to Git Repository: If your project is in a Git repository, connect your
 Netlify account to it.
2. Build Command: Set the build command to 
pnpm run build .
3. Publish Directory: Set the publish directory to 
dist .
4. Deploy: Netlify will automatically build and deploy your site.

 Customization:
Content: All text content can be easily updated in 
Styling: Modify 
src/App.css and 
adjustments.
 Assets: Replace 
profile.jpg and icons in 
src/App.jsx .
 tailwind.config.js for custom styles and theme
 src/assets/ with your own.
 Sections: Add, remove, or reorder sections by modifying 
App.jsx .

Contact:
Kurangi Bala Venkatarao- Email: balavenkataraokurangi@54.com- 
LinkedIn: Kurangi Bala Venkatarao- 
GitHub: Kurangi237
