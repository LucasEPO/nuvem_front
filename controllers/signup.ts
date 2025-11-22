"use client";

import { authService } from "@/services/authService";
import { userService } from "@/services/userService";
import { useRouter } from "next/navigation";

export function signupController() {
    const router = useRouter();
    
    async function handleAuth( action: "login" | "signup", email: string, password: string, name?: string,) {
        try {
            if(action === "signup" && name)
                await userService.create({name, email, password})
     
            const token = await authService.login(email, password);
            if (!token) 
                throw new Error("Erro no login após cadastro");
     
            router.push("/home");
    
        } catch (error) {
            alert("E-mail ou senha incorretos!");
            throw error;
        }
    }

    return { handleAuth };
}
