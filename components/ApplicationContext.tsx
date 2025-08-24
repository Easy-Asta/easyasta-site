"use client";

import React, { createContext, useContext, useState } from 'react';

/**
 * ApplicationContext provides a central store for the multi‑step
 * application wizard. As users progress through each step, we
 * accumulate their answers here. Once the application is ready for
 * submission, this context contains the entire payload that will be
 * sent to the server. Keeping state in a provider avoids the need
 * to persist data in localStorage or query parameters and makes
 * navigation between steps seamless.
 */

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  birthDate: string;
  citizenship: string;
  email: string;
  phone: string;
}

export interface PassportInfo {
  number: string;
  expiry: string;
  country: string;
}

export interface TravelInfo {
  arrivalDate: string;
  departureDate: string;
  address: string;
}

export interface UploadInfo {
  passportImageUrl?: string;
}

export interface ApplicationData {
  consent: boolean;
  eligibility: { [key: string]: string };
  info: PersonalInfo;
  passport: PassportInfo;
  travel: TravelInfo;
  uploads: UploadInfo;
}

interface ApplicationContextValue {
  data: ApplicationData;
  /**
   * Update the application data. Pass a partial payload; only the
   * keys provided will be updated. Deep merging is shallow so nested
   * objects should be replaced rather than partially updated.
   */
  update: (partial: Partial<ApplicationData>) => void;
}

const defaultData: ApplicationData = {
  consent: false,
  eligibility: {},
  info: {
    firstName: '',
    lastName: '',
    birthDate: '',
    citizenship: '',
    email: '',
    phone: '',
  },
  passport: {
    number: '',
    expiry: '',
    country: '',
  },
  travel: {
    arrivalDate: '',
    departureDate: '',
    address: '',
  },
  uploads: {},
};

const ApplicationContext = createContext<ApplicationContextValue | undefined>(undefined);

export function useApplication() {
  const context = useContext(ApplicationContext);
  if (!context) {
    throw new Error('useApplication must be used within an ApplicationProvider');
  }
  return context;
}

export function ApplicationProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<ApplicationData>(defaultData);
  function update(partial: Partial<ApplicationData>) {
    setData((prev) => ({ ...prev, ...partial }));
  }
  return (
    <ApplicationContext.Provider value={{ data, update }}>{children}</ApplicationContext.Provider>
  );
}