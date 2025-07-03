import { Component, input, OnInit, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-server',
  imports: [FormsModule],
  templateUrl: './server.html',
  styleUrl: './server.css',
})
export class Server implements OnInit {
  server = input.required<{ name: string; status: string }>();
  changeServerName = output<string>();
  serverName = signal('');

  ngOnInit(): void {
    this.serverName.set(this.server().name);
  }

  onChange() {
    this.changeServerName.emit(this.serverName());
  }
}
