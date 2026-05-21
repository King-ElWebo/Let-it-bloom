import { AdminDashboard } from "./AdminDashboard";
import { hasAdminSession, isAdminConfigured } from "@/src/lib/admin-auth";
import { getSeasonalConfig } from "@/src/lib/seasonal";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const isAuthenticated = await hasAdminSession();
  const config = isAuthenticated
    ? await getSeasonalConfig()
    : { enabled: true, offers: [] };

  return (
    <AdminDashboard
      initialIsAuthenticated={isAuthenticated}
      initialEnabled={config.enabled}
      initialOffers={config.offers}
      isConfigured={isAdminConfigured()}
    />
  );
}
