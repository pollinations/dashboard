const BASE_URL = 'https://worker-dev.pollinations.ai';
const ENDPOINT = '/token/';


export async function createToken(bearer) {

    if (!bearer) return 'Missing token.';

    const response = await fetch(`${BASE_URL}${ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${bearer}`
      }
    });
  
    return await response.json();
}

export async function getTokens(token) {
  
    const response = await fetch(`${BASE_URL}${ENDPOINT}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return await response.json();
}
