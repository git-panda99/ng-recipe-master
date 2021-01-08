import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./auth/components/dashboard/dashboard.component";
import { ForgotPasswordComponent } from "./auth/components/forgot-password/forgot-password.component";
import { SignInComponent } from "./auth/components/sign-in/sign-in.component";
import { SignUpComponent } from "./auth/components/sign-up/sign-up.component";
import { VerifyEmailComponent } from "./auth/components/verify-email/verify-email.component";
import { AuthGuard } from "./auth/shared/guard/auth.guard";

import { HomeComponent } from "./home/home.component";
import { RecipesComponent } from "./recipes/recipes.component";

const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'register', component: SignUpComponent},
    { path: 'login', component: SignInComponent},
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'verify-email-address', component: VerifyEmailComponent },
    { path: 'recipes', component: RecipesComponent, canActivate: [AuthGuard] },
    { path: '**', component: HomeComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})

export class AppRoutingModule {}