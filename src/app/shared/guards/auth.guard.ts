import {jwtDecode} from "jwt-decode";
import {CanActivateFn, Router} from "@angular/router";
import {inject} from "@angular/core";

export const AuthGuard: CanActivateFn = () => {
    const router = inject(Router);

    return isLoggedIn() ? true :
        router.navigateByUrl('/login');
};

const isLoggedIn = (): boolean => {
    const token = localStorage.getItem('token');
    if (!token) return false;

    const decoded = jwtDecode(token)
    if (!decoded.exp) return false;
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    date.valueOf()
    return new Date().valueOf() <= date.valueOf();
}
