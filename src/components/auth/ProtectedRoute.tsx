import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useOnboarding } from "../../contexts/OnboardingContext";

type ProtectedRouteProps = {
  children: ReactNode;
  requireOnboarding?: boolean;
};

const ProtectedRoute = ({
  children,
  requireOnboarding = true,
}: ProtectedRouteProps) => {
  const { isAuthenticated } = useAuth();
  const { isOnboardingComplete } = useOnboarding();

  // Not logged in
  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  // Logged in but onboarding not complete
  if (requireOnboarding && !isOnboardingComplete) {
    return <Navigate to="/signup" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
