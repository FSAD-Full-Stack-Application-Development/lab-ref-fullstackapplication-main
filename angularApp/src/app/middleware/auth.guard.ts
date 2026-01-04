import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const verifyJWTToken = () => {
    const jwtToken = localStorage.getItem('token')
    const router = inject(Router)

    if (!jwtToken) {
        router.navigate(['/login'])
        return false;
    }
    return true;
}
