import { Component, Input, OnChanges } from '@angular/core';
import { Fasta } from '../interface/fasta';
import { FastaService } from '../services/fasta/fasta.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnChanges {
  @Input() chosen_stada_id: string;

  fastas: Fasta[];

  constructor(private fastaService: FastaService) { }

  ngOnChanges() {
    this.chosen_stada_id;
    if (Number(this.chosen_stada_id) >= 0) {
      this.fastaService.getFasta(this.chosen_stada_id).subscribe(response => {
        this.fastas = response;
      });
    }
  }

}
