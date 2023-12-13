import {Component} from '@angular/core';
import {LogoComponent} from "../logo/logo.component";
import {Router, RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";

type Route = {
    icon: string;
    title: string;
    path: string
}


@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [
        LogoComponent,
        RouterLink, CommonModule
    ],
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.css',
    providers: []
})
export class SidebarComponent {

    href: string = this.router.url

    constructor(private router: Router) {}

    routes: Route[] = [
        {
            icon: "fa-home",
            title: "Home",
            path: "/"
        },
        {
            icon: "fa-search",
            title: "Explore",
            path: "/explore"
        }, {
            icon: "fa-user",
            title: "Profile",
            path: "/profile"
        }, {
            icon: "fa-inbox",
            title: "Messages",
            path: "/messages"
        }
    ]
}
