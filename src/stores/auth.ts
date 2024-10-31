import { reactive } from 'vue';
import { useRouter } from 'vue-router';

// Estado reactivo para manejar el usuario autenticado
const state = reactive({
  username: localStorage.getItem('username') || null,
  isAuthenticated: !!localStorage.getItem('username')
});

// Funciones de autenticación
export function useAuthStore() {
  const router = useRouter();

  const login = (username: string) => {
    state.username = username;
    state.isAuthenticated = true;
    localStorage.setItem('username', username);
    router.push('/home'); // Redirige al panel principal tras el inicio de sesión
  };

  const logout = () => {
    state.username = null;
    state.isAuthenticated = false;
    localStorage.removeItem('username');
    router.push('/login'); // Redirige a la página de inicio de sesión tras cerrar sesión
  };

  return {
    state,
    login,
    logout,
    get username() {
      return state.username;
    },
    get isAuthenticated() {
      return state.isAuthenticated;
    }
  };
}
