import { z } from "zod";

export const blogPostSchema = z.object({
  title: z.string().min(1, "Title is required").max(100),
  content: z.string().min(1, "Content is required"),
  coverImage: z.string().url("Valid image URL is required"),
  slug: z.string().min(1, "Slug is required")
});

export const trainerApplicationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  expertise: z.string().min(1, "Area of expertise is required"),
  yearsOfExperience: z.number().min(0, "Years of experience must be positive"),
  introduction: z.string().min(50, "Introduction must be at least 50 characters")
});

export const contactSubmissionSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(10, "Message must be at least 10 characters")
});