# Starbase Innovations Dashboard

A modern React TypeScript admin dashboard with authentication, data visualization, and user management features.

## 🚀 Features

- **Authentication System** with protected routes
- **Dashboard** with statistics and visualizations
- **User Management** with search and filter capabilities
- **Settings Page** with user profile and theme preferences
- **Responsive Design** for all device sizes
- **Redux State Management** with Redux Persist
- **TypeScript** for type safety
- **Dockerized** for easy deployment

## 📁 Project Structure

```
STARBASE_INNOVATIONS/
├── public/
├── src/
│   ├── assets/          # Static assets like images
│   ├── components/      # Reusable components
│   │   ├── auth/        # Authentication related components
│   │   │   └── ProtectedRoute.tsx
│   │   ├── charts/      # Chart components
│   │   │   ├── BarChartCard.tsx
│   │   │   └── LineChartCard.tsx
│   │   ├── layout/      # Layout components
│   │   │   └── Layout.tsx
│   │   └── ui/          # UI components
│   │       ├── Card.tsx
│   │       ├── TextInput.tsx
│   │       ├── ThemeProvider.tsx
│   │       └── UserCard.tsx
│   ├── data/            # Mock data and API responses
│   │   ├── activeUsersByRole.json
│   │   ├── stat.json
│   │   └── userRegistration.json
│   ├── pages/           # Page components
│   │   ├── Dashboard.tsx
│   │   ├── Login.tsx
│   │   ├── Settings.tsx
│   │   └── Users.tsx
│   ├── service/         # Service layer
│   │   └── index.ts
│   ├── store/           # Redux store
│   │   ├── slice/       # Redux slices
│   │   ├── types/       # TypeScript types
│   │   └── index.ts
│   ├── App.css
│   └── App.tsx
├── .dockerignore
├── .gitignore
├── Dockerfile
├── index.html
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.ts
```

## 🛠️ Technology Stack

- **Frontend**: React 18+, TypeScript
- **State Management**: Redux Toolkit with Redux Persist
- **Routing**: React Router DOM v6+
- **Data Visualization**: Recharts
- **Styling**: Tailwind
- **Build Tool**: Vite
- **Containerization**: Docker

## 🔧 Installation & Setup

### Running locally

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/starbase-innovations.git
   cd starbase-innovations
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Access the application at http://localhost:5173

### Running with Docker

1. Build the Docker image
   ```bash
   docker build -t react-admin-dashboard .
   ```

2. Run the Docker container
   ```bash
   docker run -p 3000:80 react-admin-dashboard
   ```

3. Access the application at http://localhost:3000

## 📋 Pages

### 1. Login Page `/login`
- Authentication form with username and password
- Simulated API login with token storage in localStorage
- Redirects to dashboard on successful login

### 2. Dashboard Page `/dashboard`
- Statistics cards showing key metrics
- Line chart showing user registrations over time
- Bar chart showing active users by role

### 3. Users Page `/users`
- User management interface
- Displays data from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users)
- Allows adding new users, searching, and sorting

### 4. Settings Page `/settings`
- User profile management
- Dark mode toggle with localStorage persistence

## 🔒 Authentication Flow

1. User enters credentials on the login page
2. On successful login, a token is stored in localStorage
3. Protected routes check for this token
4. Unauthorized users are redirected to login
5. Logout clears the token and redirects to login

## 🔄 State Management

- **Redux** for centralized state management
- **Redux Persist** for persisting state in localStorage
- State slices for:
  - Authentication
  - User data
  - UI preferences
  - Form states

## 📱 Responsive Design

- Mobile-first approach
- Adaptive layouts for all screen sizes
- Responsive data visualization components

## 🐳 Docker Configuration

The application is containerized using Docker for easy deployment:
- Multi-stage build for optimized image size
- Nginx for serving the built application
- Configured for production use

## 🧪 Testing

Run tests using:
```bash
npm test
```

## 📄 License

MIT License