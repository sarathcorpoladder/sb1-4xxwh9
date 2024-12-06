export interface BlogPost {
  id: string;
  title: string;
  content: string;
  coverImage: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Course {
  id: string;
  title: string;
  duration: string;
  description: string;
  image: string;
  category: 'AI' | 'ESG' | 'Leadership';
}

export interface TrainerApplication {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  expertise: string;
  yearsOfExperience: number;
  introduction: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface ContactSubmission {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  createdAt: Date;
}