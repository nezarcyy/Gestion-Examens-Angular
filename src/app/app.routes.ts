import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { GestionProfComponent } from './components/gestion/gestion-prof/gestion-prof.component';
import { NonDisponibleComponent } from './components/gestion/non-disponible/non-disponible.component';
import { EditProfileComponent } from './components/edit/edit-profile/edit-profile.component';
import { EditClasseComponent } from './components/edit/edit-classe/edit-classe.component';
import { EditFiliereComponent } from './components/edit/edit-filiere/edit-filiere.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { EditSalleComponent } from './components/edit/edit-salle/edit-salle.component';
import { EditDepartementComponent } from './components/edit/edit-departement/edit-departement.component';
import { GestionDepartementComponent } from './components/gestion/gestion-departement/gestion-departement.component';
import { NotFoundComponent } from './components/widgets/not-found/not-found.component';
import { EditProfComponent } from './components/edit/edit-prof/edit-prof.component';
import { TimetableComponent } from './components/timetable/timetable.component';
import { AddNewSalleComponent } from './components/add/add-new-salle/add-new-salle.component';
import { GestionSallesComponent } from './components/gestion/gestion-salles/gestion-salles.component';
import { AddNewClasseComponent } from './components/add/add-new-classe/add-new-classe.component';
import { GestionClasseComponent } from './components/gestion/gestion-classe/gestion-classe.component';
import { AddNewDepartementComponent } from './components/add/add-new-departement/add-new-departement.component';
import { AddNewFilireComponent } from './components/add/add-new-filire/add-new-filire.component';
import { GestionFiliereComponent } from './components/gestion/gestion-filiere/gestion-filiere.component';
import { HomeComponent } from './components/home/home.component';
import { AddNewProfComponent } from './components/add/add-new-prof/add-new-prof.component';

export const routes: Routes = [
    { path :'' , component: HomeComponent},
    { path :'index' , component: IndexPageComponent},
      { path :'home' , component: HomeComponent},
      { path :'profs' , component: GestionProfComponent},
      { path :'profs/add' , component: AddNewProfComponent},
      { path :'filieres' , component: GestionFiliereComponent},
      { path :'filieres/add' , component: AddNewFilireComponent},
      { path :'departements' , component: GestionDepartementComponent},
      { path :'departements/add' , component: AddNewDepartementComponent},
      { path :'classes' , component: GestionClasseComponent},
      { path :'classes/add' , component: AddNewClasseComponent},
      { path :'salles' , component: GestionSallesComponent},
      { path :'salles/add' , component: AddNewSalleComponent},
      { path :'emploitemps' , component: TimetableComponent},
      { path:'profs/edit',component:EditProfComponent},
      { path :'departements/edit' , component: EditDepartementComponent},
      { path :'salles/edit' , component: EditSalleComponent},
      { path :'filieres/edit' , component: EditFiliereComponent},
      { path :'classes/edit' , component: EditClasseComponent},
      { path :'profile/edit' , component: EditProfileComponent},
      { path :'nonDesponibles' , component: NonDisponibleComponent},
      // not-found
      { path :'**' , component: NotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }