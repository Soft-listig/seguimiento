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
    nacimiento: [''],
    curp: [''],
    sexo: [''],
    estado_civil: [''],
    calle: [''],
    num_interior: [''],
    colonia: [''],
    cp: [''],
    ciudad: [''],
    municipio: [''],
    estado: [''],
    tel: [''],
    matricula: ['', Validators.compose([Validators.required])],
    celular: [''],
    tel_paterno: [''],
    facebook: [''],
    twitter: [''],
    email: [''],
    carrera: ['', Validators.compose([Validators.required])],
    especialidad: [''],
    mes_egreso: [''],
    year_egreso: [''],
    titulado: [''],
    ingles: [''],
    idioma_porcentaje: [''],
    idioma_nombre: [''],
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
    this.formulario.cp  = this.formulario.cp.toString();
    this.formulario.tel  = this.formulario.tel.toString();
    this.formulario.celular  = this.formulario.celular.toString();
    this.formulario.tel_paterno  = this.formulario.tel_paterno.toString();
    this.formulario.idioma_porcentaje  = this.formulario.idioma_porcentaje.toString();
    this.formulario.ingles  = this.formulario.ingles.toString();
    this.formulario.iii12_cp  = this.formulario.iii12_cp.toString();
    this.formulario.iii12_tel  = this.formulario.iii12_tel.toString();
    this.formulario.iii12_fax  = this.formulario.iii12_fax.toString();
    this.afDB.object(`/Posts/{${key}}`).update(this.formulario).then(() => {
      this.flag = true;
  });

  }
}

