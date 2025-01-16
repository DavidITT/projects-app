import { useAuthStore } from '@/modules/auth/stores/auth.store';
import { watch } from 'vue';
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

/**
 * Centralized middleware to handle authentication
 */
export async function handleAuthCheck(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const authStore = useAuthStore();

  // Wait for Firebase to verify authentication
  await waitForAuth(authStore);

  if (to.meta.requiresAuth) {
    handleRequiresAuth(authStore, next);
  } else if (to.meta.requiresGuest) {
    handleRequiresGuest(authStore, next);
  } else {
    next();
  }
}

/**
 * Wait for the authentication to load completely.
 */
async function waitForAuth(authStore: ReturnType<typeof useAuthStore>): Promise<void> {
  if (authStore.loading) {
    await new Promise<void>((resolve) => {
      const stopWatching = watch(
        () => authStore.loading,
        (loading) => {
          if (!loading) {
            stopWatching();
            resolve();
          }
        },
        { immediate: true }
      );
    });
  }
}

/**
 * Handles routes that require authentication.
 */
function handleRequiresAuth(authStore: ReturnType<typeof useAuthStore>, next: NavigationGuardNext) {
  if (authStore.isAuthenticated) {
    next();
  } else {
    next({ name: 'sign-in' });
  }
}

/**
 * Handles routes that require being invited (unauthenticated).
 */
function handleRequiresGuest(authStore: ReturnType<typeof useAuthStore>, next: NavigationGuardNext) {
  if (authStore.isAuthenticated) {
    next({ name: 'projects' });
  } else {
    next();
  }
}
