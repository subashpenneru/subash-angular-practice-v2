import { Component, signal } from '@angular/core';

import { Server } from './server/server';

@Component({
  selector: 'app-root',
  imports: [Server],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = signal('angular-practice-guide');
  server = signal({ name: 'server1', status: 'online' });

  getServerName(name: string) {
    this.server.update((prev) => ({ ...prev, name }));
  }
}
