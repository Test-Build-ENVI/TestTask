// src/api/auth.ts
export const BASE_URL = 'http://localhost:3000/api/auth';

export async function registerUser({ email, password, firstName, lastName }: { email: string; password: string; firstName: string; lastName: string; }) {
  const res = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, firstName, lastName })
  });
  const data = await res.json();
  if (!res.ok || !data.success) throw new Error(data.message || 'Registration failed');
  return data;
}

export async function loginUser({ email, password }: { email: string; password: string; }) {
  const res = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  if (!res.ok || !data.success) throw new Error(data.message || 'Login failed');
  return data;
} 