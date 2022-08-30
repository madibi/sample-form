import { trigger, animate, transition, style, query } from '@angular/animations';

export const fadeInAnimation =

    // trigger('fadeInAnimation', [

    //     // route 'enter' transition
    //     transition(':enter', [

    //         // css styles at start of transition
    //         style({ opacity: 0 }),

    //         // animation and styles at end of transition
    //         animate('.3s', style({ opacity: 1 }))
    //     ]),
    // ]);

    trigger('fadeInAnimation', [
        transition('* => *', [
          query(
            ':enter',
            [style({ opacity: 0 })],
            { optional: true }
          ),
          query(
            ':leave',
             [style({ 
              opacity: 1 
            }), animate('.1s', style({ 
              opacity: 0 
            }))],
            { optional: true }
          ),
          query(
            ':enter',
            [style({ 
              opacity: 0 
            }), animate('.3s', style({ 
              opacity: 1 
            }))],
            { optional: true }
          )
        ])
      ]);