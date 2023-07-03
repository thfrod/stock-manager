import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { KeyValuePair } from '../models/keyValuePair.model';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  public getUsers(): Observable<UserModel[]> {
    return of([
      {
        id: 1,
        value: 'João Silva',
        email: 'joao.silva@example.com',
      },
      {
        id: 2,
        value: 'Maria Santos',
        email: 'maria.santos@example.com',
      },
      {
        id: 3,
        value: 'Pedro Almeida',
        email: 'pedro.almeida@example.com',
      },
      {
        id: 4,
        value: 'Ana Pereira',
        email: 'ana.pereira@example.com',
      },
      {
        id: 5,
        value: 'Carlos Ferreira',
        email: 'carlos.ferreira@example.com',
      },
      {
        id: 6,
        value: 'Mariana Costa',
        email: 'mariana.costa@example.com',
      },
      {
        id: 7,
        value: 'André Oliveira',
        email: 'andre.oliveira@example.com',
      },
      {
        id: 8,
        value: 'Luana Rodrigues',
        email: 'luana.rodrigues@example.com',
      },
      {
        id: 9,
        value: 'Rafael Santos',
        email: 'rafael.santos@example.com',
      },
      {
        id: 10,
        value: 'Larissa Silva',
        email: 'larissa.silva@example.com',
      },
    ]);
  }

  public getUsersKeyValuePair(): Observable<KeyValuePair[]> {
    return of([
      {
        id: 1,
        value: 'João Silva',
      },
      {
        id: 2,
        value: 'Maria Santos',
      },
      {
        id: 3,
        value: 'Pedro Almeida',
      },
      {
        id: 4,
        value: 'Ana Pereira',
      },
      {
        id: 5,
        value: 'Carlos Ferreira',
      },
      {
        id: 6,
        value: 'Mariana Costa',
      },
      {
        id: 7,
        value: 'André Oliveira',
      },
      {
        id: 8,
        value: 'Luana Rodrigues',
      },
      {
        id: 9,
        value: 'Rafael Santos',
      },
      {
        id: 10,
        value: 'Larissa Silva',
      },
    ]);
  }
}
