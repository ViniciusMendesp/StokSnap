"use client";

import { DashboardView } from "@Aplication/components/views/dashboard";
import { PrivateRoute } from "@Aplication/contexts/PrivateRouter";

export default function Dashboard() {
  return (
    <PrivateRoute>
      <DashboardView />
    </PrivateRoute>
  );
}
