// app.routes.ts
import type { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component"; // Assure-toi que le chemin est correct

export const appRoutes: Routes = [
	{ path: "", component: HomeComponent }, // Route pour la homepage
	// Ajoute d'autres routes ici si nécessaire
];
