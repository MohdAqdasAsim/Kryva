import { createContext, useContext } from "react";

export type OnboardingContextType = {
  isOnboardingComplete: boolean;
  setIsOnboardingComplete: (value: boolean) => void;
  loading: boolean;
};

export const OnboardingContext = createContext<
  OnboardingContextType | undefined
>(undefined);

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error("useOnboarding must be used within OnboardingProvider");
  }
  return context;
};
