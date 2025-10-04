import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68e1033d4134d6dd41273de8", 
  requiresAuth: true // Ensure authentication is required for all operations
});
