import {
  NavigationGuardNext,
  RouteLocationNormalized,
  Router,
} from 'vue-router';
import { useAuthStore } from 'src/stores/authStore';

const authGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const authStore = useAuthStore();
  const isAuthenticated = !!authStore.user.id;

  if (!isAuthenticated && to.path !== '/auth') {
    next('/auth');
  } else if (isAuthenticated && to.path === '/auth') {
    next('/');
  } else {
    next();
  }
};

export default function setupRouter(router: Router) {
  router.beforeEach(authGuard);
}
