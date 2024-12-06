'use client';

import { useState } from 'react';
import { TrainerApplication } from '@/lib/db/types';

export function useTrainerApplication() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitApplication = async (data: Omit<TrainerApplication, 'id' | 'status'>) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch('/api/trainer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to submit trainer application');
      
      return await response.json();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    submitApplication,
    isLoading,
    error,
  };
}