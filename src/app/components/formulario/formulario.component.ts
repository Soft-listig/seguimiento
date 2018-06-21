import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Formulario } from '../../../interfaces/formulario.interface';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
  public perfil: FormGroup;
  public formulario: Formulario;
  public flag: boolean;
  constructor(private formBuilder: FormBuilder,  private afDB: AngularFireDatabase) {
    this.perfil = this.formBuilder.group({
    nombre: ['', Validators.compose([Validators.required])],
    paterno: ['', Validators.compose([Validators.required])],
    materno: ['', Validators.compose([Validators.required])],
    nacimiento: ['', Validators.compose([Validators.required])],
    curp: ['', Validators.compose([Validators.required, Validators.maxLength(19)])],
    sexo: ['', Validators.compose([Validators.required])],
    estado_civil: ['', Validators.compose([Validators.required])],
    calle: ['', Validators.compose([Validators.required])],
    num_interior: ['', Validators.compose([Validators.required, Validators.min(0), Validators.maxLength(4)])],
    colonia: ['', Validators.compose([Validators.required, Validators.maxLength(4)])],
    cp: ['', Validators.compose([Validators.required, Validators.maxLength(5)])],
    ciudad: ['', Validators.compose([Validators.required])],
    municipio: ['', Validators.compose([Validators.required])],
    estado: ['', Validators.compose([Validators.required])],
    tel: ['', Validators.compose([Validators.required, Validators.minLength(7)])],
    matricula: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    celular: ['', Validators.compose([Validators.required, Validators.minLength(10)])],
    tel_paterno: ['', Validators.compose([Validators.minLength(7)])],
    facebook: [''],
    twitter: [''],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    carrera: ['', Validators.compose([Validators.required])],
    especialidad: ['', Validators.compose([Validators.required])],
    egreso: ['', Validators.compose([Validators.required])],
    titulado: ['', Validators.compose([Validators.required])],
    ingles: ['', Validators.compose([Validators.required, Validators.min(0)])],
    idioma_porcentaje: ['', Validators.compose([Validators.required, Validators.min(0)])],
    idioma_nombre: ['', Validators.compose([Validators.required])],
    softwares: [''],
    docentes: [''],
    plan_estudios: [''],
    investigacion_desarrollo: [''],
    investigacion_enseñanza: [''],
    infraestructura: [''],
    residencia: [''],
    iii1: [''],
    iii1_esp_select: [''],
    iii1_esp_input: [''],
    iii1_otra: [''],
    iii2: [''],
    iii3: [''],
    iii4: [''],
    iii4_o: [''],
    iii5: [''],
    iii5_o: [''],
    iii6_hablar: [''],
    iii6_escribir: [''],
    iii6_leer: [''],
    iii6_escuchar: [''],
    iii6: [''],
    iii7: [''],
    iii7_ingreso: [''],
    iii8: [''],
    iii9: [''],
    iii10: [''],
    iii10_o: [''],
    iii11: [''],
    iii12: [''],
    iii12_giro: [''],
    iii12_razon: [''],
    iii12_calle: [''],
    iii12_numero: [''],
    iii12_colonia: [''],
    iii12_cp: [''],
    iii12_ciudad: [''],
    iii12_municipio: [''],
    iii12_estado: [''],
    iii12_tel: [''],
    iii12_fax: [''],
    iii12_email: [''],
    iii12_web: [''],
    iii12_nombre: [''],
    iii12_puesto: [''],
    iii13_primario: [''],
    iii13_secundario: [''],
    iii13_terciario: [''],
    iii14: [''],
    iv1: [''],
    iv2: [''],
    iv3: [''],
    iv4_1: [''],
    iv4_2: [''],
    iv4_3: [''],
    iv4_4: [''],
    iv4_5: [''],
    iv4_6: [''],
    iv4_7: [''],
    iv4_8: [''],
    iv4_9: [''],
    iv4_10: [''],
    v1_a: [''],
    v1_b: [''],
    v2_a: [''],
    v2_b: [''],
    vi1: [''],
    vi1_b: [''],
    vi2: [''],
    vi2_b: [''],
    vi3: [''],
    vii: ['']
  });
}
  public ngOnInit() {
  }

  main_calcular() {
    this.formulario = this.perfil.value;
    const key = this.formulario.matricula;
    this.afDB.object(`/Posts/{${key}}`).update(this.formulario).then(() => {
    this.flag = true;

  });

  }
}

