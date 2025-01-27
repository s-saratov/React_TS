import React from 'react';

export interface AnimalCardProps {
    animalName: string;
    animalSpecies: number;
    animalImg?: string;
    children?: React.ReactNode;
  }