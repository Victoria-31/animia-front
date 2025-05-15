import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { RouterModule } from "@angular/router"; // Ajout de RouterModule

@Component({
	selector: "app-root",
	imports: [RouterModule, RouterOutlet],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "animia";
}
