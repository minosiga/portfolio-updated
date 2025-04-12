import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const projectCategories = {
  'AI Projects': [
    {
      id: 'weather-chatbot',
      title: 'Weather Chatbot',
      description: 'Developed an intelligent chatbot using Java that provides real-time weather information and temperature updates',
      image: '/assets/chatbot.png'
    }
  ],
  'App Mobile Development': [
    {
      id: 'score-it',
      title: 'Score It - Student Calculator',
      description: 'Mobile app for students to calculate their module scores and track academic performance',
      image: '/assets/p1.jpg',
      screenshots: [
        {
          id: 'score-it-1',
          title: 'Main Interface',
          image: '/assets/p1.jpg'
        },
        {
          id: 'score-it-2',
          title: 'Module Calculator',
          image: '/assets/p2.jpg'
        },
        {
          id: 'score-it-3',
          title: 'Results View',
          image: '/assets/p3.jpg'
        }
      ]
    }
  ],
  'Web Development': [
    {
      id: 'gym-crm-web',
      title: 'GymCRM Web Application',
      description: 'Web-based version of the GymCRM system with responsive design and modern UI',
      image: '/assets/d1.png',
      screenshots: [
        {
          id: 'dashboard',
          title: 'Dashboard Overview',
          image: '/assets/d1.png'
        },
        {
          id: 'analytics',
          title: 'Analytics Dashboard',
          image: '/assets/d2.png'
        },
        {
          id: 'member-management',
          title: 'Member Management',
          image: '/assets/d3.png'
        },
        {
          id: 'schedule',
          title: 'Schedule Management',
          image: '/assets/d4.png'
        },
        {
          id: 'reports',
          title: 'Reports and Analytics',
          image: '/assets/d5.png'
        },
        {
          id: 'settings',
          title: 'System Settings',
          image: '/assets/d6.png'
        },
        {
          id: 'attendance',
          title: 'Attendance Tracking',
          image: '/assets/d7.png'
        },
        {
          id: 'payments',
          title: 'Payment Management',
          image: '/assets/d8.png'
        },
        {
          id: 'notifications',
          title: 'Notification Center',
          image: '/assets/d9.png'
        },
        {
          id: 'profile',
          title: 'User Profile',
          image: '/assets/d10.png'
        }
      ]
    }
  ],
  'Desktop Development': [
    {
      id: 'gym-crm',
      title: 'Gym CRM System',
      description: 'Comprehensive desktop application for gym management including member tracking and scheduling',
      image: '/assets/gym-crm.png'
    },
    {
      id: 'inventory-system',
      title: 'Inventory Management System',
      description: 'Desktop application for tracking inventory with barcode scanning and automated reordering',
      image: '/assets/inventory.png'
    }
  ],
  'Data Analysis': [
    {
      id: 'covid-dashboard',
      title: 'COVID-19 Dashboard',
      description: 'Interactive dashboard analyzing global COVID-19 statistics and trends using data visualization techniques',
      image: '/assets/covid-dashboard.png',
      source: 'https://github.com/minosiga/data_analysis-covid',
      screenshots: [
        {
          id: 'covid-1',
          title: 'COVID-19 Statistics Overview',
          image: '/assets/covid1.png'
        },
        {
          id: 'covid-2',
          title: 'COVID-19 Data Analysis',
          image: '/assets/covid2.png'
        },
        {
          id: 'covid-dashboard',
          title: 'Main Dashboard View',
          image: '/assets/covid-dashboard.png'
        }
      ],
      technologies: ['Tableau', 'SQL', 'Excel', 'Data Analysis']
    },
    {
      id: 'video-games',
      title: 'Video Games Sales Analysis',
      description: 'Analysis of video game sales trends and market performance across different regions and platforms',
      image: '/assets/video-games.png',
      source: 'https://github.com/minosiga/data_analysis-games',
      screenshots: [
        {
          id: 'games-analysis',
          title: 'Video Games Sales Dashboard',
          image: '/assets/g1.png'
        }
      ],
      technologies: ['Tableau', 'Excel', 'Data Analysis']
    },
    {
      id: 'store-sales',
      title: 'Store Sales Analytics',
      description: 'Comprehensive analysis of store performance metrics and sales patterns using interactive visualizations',
      image: '/assets/store-sales.png',
      source: 'https://github.com/minosiga/data_analysis-powerbi-project',
      screenshots: [
        {
          id: 'sales-powerbi',
          title: 'Store Sales Power BI Dashboard',
          image: '/assets/v1.png'
        }
      ],
      technologies: ['Power BI', 'DAX', 'Data Analysis']
    },
    {
      id: 'bike-sales',
      title: 'Bike Sales Dashboard',
      description: 'Dashboard showcasing bike sales performance, customer demographics, and regional trends',
      image: '/assets/bike-sales.png',
      source: 'https://github.com/minosiga/data_analysis-excel-project',
      screenshots: [
        {
          id: 'bike-excel',
          title: 'Bike Sales Excel Analysis',
          image: '/assets/b01.png'
        }
      ],
      technologies: ['Excel', 'Data Analysis', 'Data Visualization']
    },
    {
      id: 'airbnb',
      title: 'Airbnb Market Analysis',
      description: 'Analysis of Airbnb rental market trends, pricing patterns, and property performance metrics',
      image: '/assets/airbnb.png',
      source: 'https://github.com/minosiga/data_analysis-airbnb',
      screenshots: [
        {
          id: 'airbnb-dashboard',
          title: 'Airbnb Market Analysis Dashboard',
          image: '/assets/airbnbscr.png'
        }
      ],
      technologies: ['Tableau', 'Data Analysis', 'Excel']
    }
  ],
  'Logo Designs': [
    {
      id: 'mino-design',
      title: 'Mino Design',
      description: 'Modern and creative logo design combining abstract shapes with typography',
      image: '/assets/mino-design.png'
    },
    {
      id: 'core-it',
      title: 'Core IT',
      description: 'Minimalist and professional logo design for an IT company',
      image: '/assets/scoreit.png'
    }
  ],
  'UI/UX': [
    {
      id: 'gym-crm-ui',
      title: 'GymCRM Desktop Application UI',
      description: 'Modern and intuitive user interface design for the GymCRM desktop application. Features include athlete management, session tracking, mini-market system, expense tracking, and external session management. The UI emphasizes user experience with a clean, professional design in a consistent purple theme.',
      image: '/assets/Desktop-0.png',
      technologies: ['Figma', 'Adobe XD', 'UI/UX Design'],
      screenshots: [
        {
          id: 'add-athlete',
          title: 'Add Athlete Interface',
          image: '/assets/add-a-athlete.png'
        },
        {
          id: 'desktop-1',
          title: 'Dashboard View',
          image: '/assets/Desktop-1.png'
        },
        {
          id: 'desktop-2',
          title: 'Member Management',
          image: '/assets/Desktop-2.png'
        },
        {
          id: 'desktop-3',
          title: 'Schedule View',
          image: '/assets/Desktop-3.png'
        },
        {
          id: 'desktop-4',
          title: 'Calendar Interface',
          image: '/assets/Desktop-4.png'
        },
        {
          id: 'desktop-5',
          title: 'Member Details',
          image: '/assets/Desktop-5.png'
        },
        {
          id: 'desktop-6',
          title: 'Activity Timeline',
          image: '/assets/Desktop-6.png'
        },
        {
          id: 'expenses',
          title: 'Expense Tracking',
          image: '/assets/expenses.png'
        },
        {
          id: 'external-session',
          title: 'External Session Management',
          image: '/assets/external-session.png'
        },
        {
          id: 'card-info',
          title: 'Card Information',
          image: '/assets/information-when-u-pass-the-card.png'
        },
        {
          id: 'member-info',
          title: 'Member Information',
          image: '/assets/informations.png'
        },
        {
          id: 'mini-market',
          title: 'Mini Market Interface',
          image: '/assets/mini-market.png'
        },
        {
          id: 'product-sale',
          title: 'Product Sales Interface',
          image: '/assets/sale-a-product.png'
        },
        {
          id: 'gym-crm-logo',
          title: 'GymCRM Overview',
          image: '/assets/GYMCRM.png'
        }
      ]
    }
  ]
};

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gray-600 dark:text-gray-400 mb-2">Browse My Recent</p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Projects</h2>
        </div>

        <div className="grid gap-8">
          {Object.entries(projectCategories).map(([category, projects]) => (
            <div key={category} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <Link
                to={`/category/${encodeURIComponent(category)}`}
                className="block p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {category}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {projects.length} Project{projects.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                  <FaArrowRight className="text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

// Export for use in other components
export { projectCategories }; 