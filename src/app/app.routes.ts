import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Wish } from './wish/wish';
import { BestDeals } from './best-deals/best-deals';
import { Donate } from './donate/donate';
import { Testimonial } from './testimonial/testimonial';
import { Contact } from './contact/contact';


export const routes: Routes = [

{
path:'',
component:Home
},

{
path:'wish',
component:Wish
},

{
path:'best-deals',
component:BestDeals
},

{
path:'donate',
component:Donate
},

{
path:'testimonial',
component:Testimonial
},
{
path:'Contact',
component:Contact
}

];