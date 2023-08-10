import { Component } from '@angular/core';
import { TarefaService } from '../services/tarefa.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent {
  
  tarefas: Observable<Tarefa[]>;

  //Injeção de dependência
  //Trazermos o service para o componente
  constructor(private tarefaService: TarefaService) {
    this.tarefas = tarefaService.getTodas;
  }  
}
