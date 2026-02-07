/**
 * Cookie utility functions for theme management
 * Shares theme across main domain and subdomain
 */

function getHostname(): string {
  if (typeof window === 'undefined') return '';
  return window.location.hostname;
}

function isProduction(): boolean {
  const hostname = getHostname();
  // Check if hostname contains the actual domain (not localhost or IP)
  return hostname.includes('mehedi-hasan.me');
}

export function setCookie(name: string, value: string, days: number = 365) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = 'expires=' + date.toUTCString();
  
  let cookieString = `${name}=${value};${expires};path=/;SameSite=Strict`;
  
  // Only set domain for production environment
  if (isProduction()) {
    cookieString += ';domain=.mehedi-hasan.me';
  }
  
  document.cookie = cookieString;
}

export function getCookie(name: string): string | null {
  const nameEQ = name + '=';
  const cookies = document.cookie.split(';');
  
  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length);
    }
  }
  
  return null;
}

export function deleteCookie(name: string) {
  setCookie(name, '', -1);
}
