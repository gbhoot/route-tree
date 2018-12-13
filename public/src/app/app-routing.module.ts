import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { ReviewComponent } from './review/review.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';
import { AuthorComponent } from './author/author.component';
import { AllReviewsComponent } from './all-reviews/all-reviews.component';

const routes: Routes = [
    {path: 'products', component: ProductComponent, children: [
        {path: 'details/:id', component: ProductDetailsComponent},
        {path: 'brand/:id', component: BrandComponent},
        {path: 'category/:id', component: CategoryComponent}
    ]},
    {path: 'reviews', component: ReviewComponent, children: [
        {path: 'details/:id', component: ReviewDetailComponent},
        {path: 'author/:id', component: AuthorComponent},
        {path: 'all/:id', component: AllReviewsComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
