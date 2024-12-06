'use client';

import { useState } from 'react';
import { ContactSubmission } from '@/lib/db/types';

export function useContact() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (data: Omit<ContactSubmission, 'id' | 'createdAt'>) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to submit contact form');
      
      return await response.json();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    submitForm,
    isLoading,
    error,
  };
}