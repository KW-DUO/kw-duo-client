// ProjectContext.tsx
'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ProjectState, ProjectContextType } from '@/types';

const initialState: ProjectState = {
  projectType: 'ALL',
  department: 'ALL',
  course: 'ALL',
  position: 'ALL',
  wantedField: 'ALL',
  isBookmarkOnly: false,
  notClosedOnly: true,
  page: 0,
  size: 20,
  q: '',
};

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

interface ProjectProviderProps {
  children: ReactNode;
}

export const ProjectProvider = ({ children }: ProjectProviderProps) => {
  const [state, setState] = useState<ProjectState>(initialState);

  const value = {
    ...state,
    setProjectType: (projectType: string) => setState((s) => ({ ...s, projectType })),
    setDepartment: (department: string) => setState((s) => ({ ...s, department })),
    setCourse: (course: string) => setState((s) => ({ ...s, course })),
    setPosition: (position: string) => setState((s) => ({ ...s, position })),
    setWantedField: (wantedField: string) => setState((s) => ({ ...s, wantedField })),
    setIsBookmarkOnly: (isBookmarkOnly: boolean) => setState((s) => ({ ...s, isBookmarkOnly })),
    setNotClosedOnly: (notClosedOnly: boolean) => setState((s) => ({ ...s, notClosedOnly })),
    setPage: (page: number) => setState((s) => ({ ...s, page })),
    setSize: (size: number) => setState((s) => ({ ...s, size })),
    setQuery: (q: string) => setState((s) => ({ ...s, q })),
  };

  return <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>;
};

export const useProject = (): ProjectContextType => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProject must be used within a ProjectProvider');
  }
  return context;
};
