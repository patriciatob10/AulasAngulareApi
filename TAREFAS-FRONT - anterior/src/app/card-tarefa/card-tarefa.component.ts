import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-tarefa',
  templateUrl: './card-tarefa.component.html',
  styleUrls: ['./card-tarefa.component.css']
})
export class CardTarefaComponent {

  @Input() tarefa?: Tarefa;

  construtor(private tarefaService: TarefaService){}

  excluir() {
    firstValueFrom(this.tarefaService.deletarPeloid(this.tarefa!.id));
     }
}
