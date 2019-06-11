import { Component, Input, OnChanges } from '@angular/core';
import { Fasta } from '../interface/fasta';
import { FastaService } from '../services/fasta/fasta.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnChanges {

  @Input() chosen_stada: string;

  fastas: Fasta[];

  constructor(private fastaService: FastaService) { }

  ngOnChanges() {
    if (this.chosen_stada) {
      // retrieve id
      const id = this.chosen_stada.split(" ")[0];



      if (Number(id) >= 0) {
        this.fastaService.getFasta(id).subscribe(response => {
          this.fastas = response;
        });
      }
    }
  }

  deleteChosenStadaId() {
    this.chosen_stada = "";
  }

}
