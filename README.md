# Next Project - Full-Stack Next.js Application

A modern full-stack web application built with **Next.js 16**, **Prisma ORM**, **NextAuth**, and **Tailwind CSS + DaisyUI**. Features user authentication, management dashboard, product catalog, and file uploads.

##  Features

- **Authentication**: NextAuth integration with Google OAuth and email/password login
- **User Management**: Create, read, update, and delete users with REST API
- **Product Catalog**: Dynamic product pages with external API integration
- **File Uploads**: Cloudinary integration for image uploads
- **Admin Dashboard**: Protected admin area for managing users
- **Email Support**: Email templates with React Email and Resend
- **Database**: MySQL with Prisma ORM for type-safe database operations
- **Styling**: Tailwind CSS + DaisyUI for responsive, beautiful UI
- **Type Safety**: Full TypeScript support throughout the project

##  Prerequisites

Before you begin, ensure you have:
- **Node.js** 18+ and **npm/yarn/pnpm**
- **MySQL** 8.0+ (local or cloud-based)
- Git

## 🔧 Installation

1. **Clone the repository**:
```bash
git clone https://github.com/bhandarizan/Next_Fullstack
cd next-proj
```

2. **Install dependencies**:
```bash
npm install
```

3. **Set up environment variables**:
Create a `.env.local` file in the root directory and add:

```env
# Database
DATABASE_URL="mysql://username:password@localhost:3306/nextjs_db"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="generate-a-random-string-here"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Cloudinary (for file uploads)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloudinary-name"

# Resend (for emails)
RESEND_API_KEY="your-resend-api-key"
```

4. **Set up the database**:
```bash
npx prisma migrate dev --name init
```

5. **Generate Prisma Client**:
```bash
npx prisma generate
```

##  Running Locally

**Development server**:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Build for production**:
```bash
npm run build
npm start
```

##  Project Structure

```
app/
├── api/
│   ├── auth/[...nextauth]/    # NextAuth configuration
│   ├── register/              # User registration endpoint
│   ├── users/                 # User CRUD endpoints
│   └── send-email-test/       # Email testing
├── admin/                     # Admin dashboard (protected)
├── auth/                      # Auth components
├── products/                  # Product pages with dynamic routing
├── users/                     # User management pages
├── upload/                    # File upload page
└── components/                # Reusable components
prisma/
├── schema.prisma              # Database schema
└── migrations/                # Database migrations
public/                        # Static assets
```

##  API Endpoints

### Users
- `GET /api/users` - List all users
- `POST /api/users` - Create a new user
- `GET /api/users/[id]` - Get user by ID
- `PUT /api/users/[id]` - Update user
- `DELETE /api/users/[id]` - Delete user

### Authentication
- `POST /api/register` - Register new user
- `POST /api/auth/signin` - Sign in (handled by NextAuth)
- `POST /api/auth/signout` - Sign out (handled by NextAuth)

##  Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | MySQL connection string |
| `NEXTAUTH_URL` | Your application URL |
| `NEXTAUTH_SECRET` | Secret key for NextAuth  |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` | Cloudinary account name |
| `RESEND_API_KEY` | Resend email API key |

##  Database Schema

### User Model
```prisma
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String?   @unique
  emailVerified DateTime?
  hashedPassword String?
  image         String?
  accounts      Account[]
  sessions      Session[]
}
```

Includes OAuth account linking via NextAuth adapter.

##  Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables in project settings
5. Deploy with one click

### Deploy on Other Platforms

**Environment Setup**:
- Ensure `NODE_ENV=production`
- Update `NEXTAUTH_URL` to your production domain
- Use a strong `NEXTAUTH_SECRET`
- Point `DATABASE_URL` to production MySQL instance

**Build & Start**:
```bash
npm run build
npm start
```

##  Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 16.0.10 | React framework |
| Prisma | 6.19.1 | ORM |
| NextAuth | 4.24.13 | Authentication |
| Tailwind CSS | 4.1.18 | Styling |
| DaisyUI | 5.5.13 | Component library |
| React Email | 5.1.1 | Email templates |
| Resend | 6.6.0 | Email delivery |
| Zod | 4.2.1 | Schema validation |
| TypeScript | 5 | Type safety |

##  Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run preview-email # Preview email templates
```

##  Database Migrations

Create a new migration:
```bash
npx prisma migrate dev --name <migration-name>
```

View database with Prisma Studio:
```bash
npx prisma studio
```

##  Email Setup

This project uses **React Email** and **Resend** for email handling:

1. Get API key from [Resend](https://resend.com)
2. Add `RESEND_API_KEY` to environment variables
3. Email templates are in `app/api/send-email-test/`
4. Test locally: `npm run preview-email`

##  Troubleshooting

**Build Warning about lockfiles**:
- Remove extra `package-lock.json` or set `turbopack.root` in `next.config.js`

**Database Connection Issues**:
- Verify MySQL is running: `mysql -u root -p`
- Check `DATABASE_URL` format
- Ensure user has proper permissions

**NextAuth Issues**:
- Verify `NEXTAUTH_SECRET` is set
- Check OAuth credentials are correct
- Clear `.next` folder: `rm -rf .next && npm run build`

##  License

This project is private. All rights reserved.

## Support

For issues or questions, please create an issue in the repository or contact the development team.


