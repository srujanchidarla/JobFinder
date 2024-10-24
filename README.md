# JobFinder - Your Ultimate Job Search Platform


**JobFinder** is a modern, feature-rich, and responsive platform for finding job listings, built with **React** and **TailwindCSS**. It dynamically fetches jobs from external APIs, allowing users to filter listings based on categories like "Software Engineer" or "Designer," and provides an intuitive user experience for both job seekers and employers.

---

## Features

- **Dynamic Job Listings**: 
  - Fetches real-time job data from the **Adzuna API**. Users can view jobs filtered by categories or roles such as "Designer" or "Software Engineer."
  
- **Show More/Show Less Toggle**: 
  - Job descriptions are truncated by default with an option to expand or collapse the full content, improving readability and focus.
  
- **Category-based Filtering**: 
  - Users can easily navigate between different job categories (e.g., `/jobs/designer`, `/jobs/software-engineer`) for targeted search results.
  
- **Interactive and Responsive Design**: 
  - Fully responsive across devices using **TailwindCSS**, with smooth hover animations and transitions to enhance the user experience.
  
- **Real-time API Integration**: 
  - Jobs are dynamically fetched from the **Adzuna API**, which allows the platform to stay up-to-date with current job market listings.

- **Direct Application Links**: 
  - Each job listing includes a direct "Apply Here" button that redirects users to the source job application page on the API provider's site.

---

## Pages and Components

### 1. **Home Page**:
   - Displays a brief set of recent job listings with links to detailed category pages. Also features multiple hero sections representing different roles like "Designer" and "Software Engineer."
   
![Screenshot 2024-10-21 175440](https://github.com/user-attachments/assets/da6a5485-af14-419e-bf44-9213a40dce1d)

### 2. **Job Listings Page**:
   - A page that displays a list of all available jobs fetched from the API, with filters for categories. Users can browse and apply for jobs dynamically.
   
![Screenshot 2024-10-21 175541](https://github.com/user-attachments/assets/f87b74e0-e29c-48e8-9978-0b2ecb043b87)

### 3. **Job Details Page**:
   - Detailed view for a specific job showing the title, description, company details, location, and salary. It includes a direct link to apply for the job.
   
![image](https://github.com/user-attachments/assets/43dcdb69-d1ac-4a22-b627-7edc94fbe4a1)

### 4. **Add and Edit Job Pages**:
   - Forms for adding or editing job listings with fields for job title, description, company info, and salary. The changes are submitted and handled through API interactions.
   
![image](https://github.com/user-attachments/assets/be659469-622f-485d-a5e2-81b39f347dbb)

---

## Technologies Used

- **Frontend**: React, React Router
- **Styling**: TailwindCSS, Custom Animations
- **API**: Adzuna API for fetching job data
- **Icons**: React Icons for minimal and beautiful icons
- **Version Control**: Git, GitHub

---

## How to Run the Project Locally

1. **Clone the repository**:

   ```bash
   git clone https://github.com/srujanchidarla/JobFinder.git

2. **Navigate to the project directory**:

   ```bash
   cd JobFinder
3. **Install dependencies**:

   ```bash
   npm install
4. **Add your Adzuna API keys**:
   - Create a .env file in the root of the project and add your API key and App ID from Adzuna:
   ```bash
   VITE_ADZUNA_API_KEY=your_adzuna_api_key
   VITE_ADZUNA_APP_ID=your_adzuna_app_id
5. **Run the application**:
   ```bash
   npm run dev
6. **Open the application in your browser**:
   - Visit http://localhost:3000 to explore JobFinder.

## Project Structure

```bash
JobFinder/
├── src/
│   ├── components/           # Reusable components (Hero, JobCard, Navbar)
│   ├── pages/                # Page components (HomePage, JobsPage, JobPage)
│   ├── assets/               # Media and static assets
│   ├── App.jsx               # Main App component
│   ├── index.jsx             # Entry point for the React app
│   └── styles/               # TailwindCSS for styling
├── public/                   # Public assets
├── .env                      # API keys and environment variables
├── README.md                 # Project readme file
├── package.json              # Project dependencies and scripts
└── tailwind.config.js        # TailwindCSS configuration
