const API_URL = process.env.NEXT_PUBLIC_API_URL; 

export const authService = {
    async login(login: string, password: string) {
        sessionStorage.clear();
        const response = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                login,
                password
            })
        });

        if (!response.ok) 
            throw new Error("Erro ao fazer login");
        
        const data = await response.json();

        sessionStorage.setItem("access_token", data.access_token);
        sessionStorage.setItem("user_id", data.user_id);
        sessionStorage.setItem("user_email", data.user_email);
        sessionStorage.setItem("is_adm", data.is_adm);

        return data.access_token;
	}
}