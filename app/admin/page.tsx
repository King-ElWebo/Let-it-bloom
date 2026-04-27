import { AdminDashboard } from "./AdminDashboard";
import { hasAdminSession, isAdminConfigured } from "@/src/lib/admin-auth";
import { getSeasonalOffers } from "@/src/lib/seasonal";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const isAuthenticated = await hasAdminSession();
  const offers = isAuthenticated ? await getSeasonalOffers() : [];

  return (
    <AdminDashboard
      initialIsAuthenticated={isAuthenticated}
      initialOffers={offers}
      isConfigured={isAdminConfigured()}
    />
  );
}
