import React from "react";

// Image imports (replace paths with your actual asset locations)
import voteTuneImage from "../assets/votetune.png";
import equityTrackImage from "../assets/equitytrack.png";
import tweetUpImage from "../assets/tweetup.png";
import nestAwayImage from "../assets/nestaway.png";

// Projects data array
const projects = [
  {
    id: 1,
    name: "VoteTune",
    description: "A collaborative music voting platform where users can add songs, vote on the next track, and create dynamic playlists in real time.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Prisma"],
    features: [
      "Real-time voting with Socket.io",
      "User authentication and profiles",
      "Collaborative playlist management",
      "Cloudinary integration for album art uploads",
      "Responsive design with Tailwind CSS"
    ],
    image: voteTuneImage,
    github: "https://github.com/RevanasiddaNK/VoteTune",
    live: "https://votetune.onrender.com",
    createdAt: "2024-11-24",
  },
  {
    id: 2,
    name: "EquityTrack",
    description: "An investment portfolio tracker that provides real-time stock data, analytics, and performance reports.",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Chart.js", "Bootstrap"],
    features: [
      "Real-time market data fetch",
      "Portfolio performance charts",
      "Historical price analysis",
      "User alerts and notifications",
      "Secure JWT-based authentication"
    ],
    image: equityTrackImage,
    github: "https://github.com/RevanasiddaNK/EquityTrack",
    live: "https://equitytrack.onrender.com",
    createdAt: "2024-12-02",
  },
  {
    id: 3,
    name: "TweetUp",
    description: "A full-featured Twitter clone with JWT authentication, real-time feed, likes, comments, and cloud-based media uploads.",
    technologies: ["React", "Tailwind CSS", "React Query", "Node.js", "Express", "MongoDB", "Socket.io"],
    features: [
      "JWT-based auth",
      "Post creation, editing, and deletion",
      "Like, comment, and retweet functionality",
      "Real-time notifications",
      "Cover/profile image upload via Cloudinary"
    ],
    image: tweetUpImage,
    github: "https://github.com/RevanasiddaNK/TweetUp",
    live: "https://tweetup.onrender.com",
    createdAt: "2024-11-03",
  },
  {
    id: 4,
    name: "NestAway",
    description: "An Airbnb clone featuring property listings, bookings, user reviews, and secure payment integration.",
    technologies: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap", "Passport.js", "Stripe API"],
    features: [
      "User registration and login",
      "Property listing CRUD",
      "Booking calendar with availability filtering",
      "User reviews and ratings",
      "Payment processing via Stripe"
    ],
    image: nestAwayImage,
    github: "https://github.com/RevanasiddaNK/NestAway",
    live: "https://nestaway-ltf5.onrender.com",
    createdAt: "2024-10-29",
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-900 text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-2xl hover:shadow-xl transform transition duration-300 hover:scale-105 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4 flex-1">{project.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-green-600 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <details className="mb-4">
                <summary className="cursor-pointer font-semibold">
                  Key Features
                </summary>
                <ul className="list-disc list-inside mt-2 text-gray-300">
                  {project.features.map((feat, i) => (
                    <li key={i}>{feat}</li>
                  ))}
                </ul>
              </details>

              <div className="mt-auto flex space-x-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-full hover:opacity-90 transition duration-300"
                >
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gradient-to-r from-yellow-400 to-red-500 px-4 py-2 rounded-full hover:opacity-90 transition duration-300"
                  >
                    Live Demo
                  </a>
                )}
              </div>

              {project.createdAt && (
                <p className="text-xs text-gray-500 mt-4 text-right">
                  Launched on: {new Date(project.createdAt).toLocaleDateString()}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
