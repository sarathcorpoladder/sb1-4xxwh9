import { createUploadthing, type FileRouter } from "uploadthing/next";
import { getToken } from "@/lib/auth";
 
const f = createUploadthing();
 
export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async () => {
      const token = await getToken();
 
      if (!token) throw new Error("Unauthorized");
 
      return { userId: token.sub };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      console.log("File URL:", file.url);
      
      return { uploadedBy: metadata.userId };
    }),

  blogImageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async () => {
      const token = await getToken();
 
      if (!token) throw new Error("Unauthorized");
 
      return { userId: token.sub };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Blog image uploaded by userId:", metadata.userId);
      console.log("File URL:", file.url);
      
      return { uploadedBy: metadata.userId };
    })
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;