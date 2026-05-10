export const API_BASE_URL =
  process.env.REACT_APP_API_URL?.replace(/\/$/, "") || "http://localhost:5000/api";

const AUTH_STORAGE_KEYS = {
  token: "token",
  rol: "rol",
};

export function getAuthToken() {
  return localStorage.getItem(AUTH_STORAGE_KEYS.token);
}

export function getStoredRole() {
  return localStorage.getItem(AUTH_STORAGE_KEYS.rol);
}

export function setAuthSession({ token, rol }) {
  localStorage.setItem(AUTH_STORAGE_KEYS.token, token);
  localStorage.setItem(AUTH_STORAGE_KEYS.rol, rol);
}

export function clearAuthSession() {
  localStorage.removeItem(AUTH_STORAGE_KEYS.token);
  localStorage.removeItem(AUTH_STORAGE_KEYS.rol);
}

export function getDefaultDashboardRoute(rol) {
  if (rol === "administrador") return "/admin/dashboard";
  if (rol === "alumno") return "/alumno/dashboard";
  if (rol === "tutor_profesor") return "/profesor/dashboard";
  if (rol === "tutor_empresa") return "/empresa/dashboard";
  return "/login";
}

export async function fetchWithAuth(path, options = {}) {
  const token = getAuthToken();

  if (!token) {
    throw new Error("No hay sesión activa");
  }

  const isFormData = options.body instanceof FormData;

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      ...(options.headers || {}),
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 401 || response.status === 403) {
    clearAuthSession();
    throw new Error("Sesión no válida");
  }

  return response;
}

export async function validateSession() {
  const token = getAuthToken();

  if (!token) {
    return { isValid: false, user: null };
  }

  try {
    const response = await fetchWithAuth("/auth/profile", {
      method: "GET",
    });

    if (!response.ok) {
      return { isValid: false, user: null };
    }

    const data = await response.json();
    return {
      isValid: true,
      user: data.user || null,
    };
  } catch (error) {
    clearAuthSession();
    return { isValid: false, user: null };
  }
}



