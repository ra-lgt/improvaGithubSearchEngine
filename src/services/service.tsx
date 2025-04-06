export class ApiService {
    private BASE_URL: string = 'https://api.github.com';
    private GITHUB_PAT_TOKEN:string= import.meta.env.VITE_GITHUB_PAT_TOKEN;

    private HEADERS={
        Authorization: `Bearer ${this.GITHUB_PAT_TOKEN}`,
        Accept: 'application/vnd.github+json'
    }
  
    // Utility function to handle fetch with timeout
    private async fetchWithTimeout(
        resource: string,
        options :RequestInit,
        timeoutMs: number
      ): Promise<any> {
        const controller = new AbortController();
        const id = setTimeout(() => controller.abort(), timeoutMs);
    
        try {
          const response = await fetch(resource, {
            ...options,
            signal: controller.signal
          });
    
          clearTimeout(id);
    
          return await response.json();
        } catch (error) {
          console.error('Fetch error:', error);
          return { message: 'Request timeout or error occurred' };
        }
      }
    
      async get(
        endpoint: string,
        params: Record<string, any> = {},
        timeoutMs: number = 10000,
        headers: Record<string, string> = {}
      ): Promise<any> {
        const query = new URLSearchParams(params).toString();
        let url = `${this.BASE_URL}/${endpoint}`;

        if(query){
            url = `${this.BASE_URL}/${endpoint}${query ? `?${query}` : ''}`;

        }
    
        const mergedHeaders = { ...this.HEADERS, ...headers };
    
        return this.fetchWithTimeout(
          url,
          {
            method: 'GET',
            headers: mergedHeaders
          },
          timeoutMs
        );
      }
    
      async post(
        endpoint: string,
        data: any,
        timeoutMs: number = 10000,
        headers: Record<string, string> = {}
      ): Promise<any> {
        const url = `${this.BASE_URL}/${endpoint}`;
        const mergedHeaders = { ...this.HEADERS, ...headers };
    
        return this.fetchWithTimeout(
          url,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              ...mergedHeaders
            },
            body: JSON.stringify(data)
          },
          timeoutMs
        );
      }
    }