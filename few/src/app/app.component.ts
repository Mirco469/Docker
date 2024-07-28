import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldService } from './core/hello-world.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'few';

  constructor(private helloWorldService: HelloWorldService) {
    this.helloWorldService.getHelloWorld().subscribe((response) => {
      this.title = response.hello;
    });
  }
}
