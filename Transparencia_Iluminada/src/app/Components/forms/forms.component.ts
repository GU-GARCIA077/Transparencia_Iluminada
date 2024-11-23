import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forms',
  standalone: true, // Declara o componente como standalone
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule], // Dependências necessárias
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  formulario: FormGroup;
  protocolo: string | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.formulario = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]],
      telefone: ['', Validators.required],
      logradouro: ['', Validators.required],
      referencia: [''],
      tipoLampada: ['', Validators.required],
      tipoProblema: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      const apiUrl = 'https://sua-api.com/gerar-protocolo'; // Substitua pelo endpoint real
      this.http.post<{ protocolo: string }>(apiUrl, this.formulario.value).subscribe(
        (response) => {
          this.protocolo = response.protocolo;
        },
        (error) => {
          console.error('Erro ao gerar protocolo:', error);
          alert('Erro ao gerar o protocolo. Tente novamente mais tarde.');
        }
      );
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }
}
