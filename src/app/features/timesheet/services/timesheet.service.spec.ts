// import { async, TestBed } from '@angular/core/testing';

// import { concatMap, tap, map } from 'rxjs/operators';
// import { TimesheetService } from './timesheet.service';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemDataService } from '@core/in-memory-data.service';
// import { HttpClient } from 'selenium-webdriver/http';

// export function failure(err: any) {
//     fail(JSON.stringify(err));
// }

// describe('TimesheetService core', () => {
//     beforeEach(() => TestBed.configureTestingModule({
//         imports: [  
//             HttpClientModule,
//             HttpClientInMemoryWebApiModule.forRoot(InMemDataService) ]
//     }));

//     it('can get heroes', async(() => {
//         const httpClient = TestBed.get(HttpClient);
//         const timesheetService = new TimesheetService(httpClient);
//         timesheetService.getTimesheetEntries()
//             .subscribe(
//                 heroes => {
//                     // console.log(heroes);
//                     expect(heroes.length).toBeGreaterThan(0, 'should have heroes');
//                 },
//                 failure
//             );
//     }));

//     // it('can get hero w/ id=1', async(() => {
//     //     TimesheetService.getHero(1)
//     //         .subscribe(
//     //             hero => {
//     //                 // console.log(hero);
//     //                 expect(hero.name).toBe('Windstorm');
//     //             },
//     //             () => fail('getHero failed')
//     //         );
//     // }));

//     // it('should 404 when hero id not found', async(() => {
//     //     const id = 123456;
//     //     TimesheetService.getHero(id)
//     //         .subscribe(
//     //             () => fail(`should not have found hero for id='${id}'`),
//     //             err => {
//     //                 expect(err.status).toBe(404, 'should have 404 status');
//     //             }
//     //         );
//     // }));

//     // it('can add a hero', async(() => {
//     //     TimesheetService.addHero('FunkyBob').pipe(
//     //         tap(hero => {
//     //             // console.log(hero);
//     //             expect(hero.name).toBe('FunkyBob');
//     //         }),
//     //         // Get the new hero by its generated id
//     //         concatMap(hero => TimesheetService.getHero(hero.id)),
//     //     ).subscribe(
//     //         hero => {
//     //             expect(hero.name).toBe('FunkyBob');
//     //         },
//     //         err => failure('re-fetch of new hero failed')
//     //     );
//     // }), 10000);

//     // it('can delete a hero', async(() => {
//     //     const id = 1;
//     //     TimesheetService.deleteHero(id)
//     //         .subscribe(
//     //             (_: {}) => {
//     //                 expect(_).toBeDefined();
//     //             },
//     //             failure
//     //         );
//     // }));

//     // it('should allow delete of non-existent hero', async(() => {
//     //     const id = 123456;
//     //     TimesheetService.deleteHero(id)
//     //         .subscribe(
//     //             (_: {}) => {
//     //                 expect(_).toBeDefined();
//     //             },
//     //             failure
//     //         );
//     // }));

//     // it('can search for heroes by name containing "a"', async(() => {
//     //     TimesheetService.searchHeroes('a')
//     //         .subscribe(
//     //             (heroes: Hero[]) => {
//     //                 expect(heroes.length).toBe(3, 'should find 3 heroes with letter "a"');
//     //             },
//     //             failure
//     //         );
//     // }));

//     // it('can update existing hero', async(() => {
//     //     const id = 1;
//     //     TimesheetService.getHero(id).pipe(
//     //         concatMap(hero => {
//     //             hero.name = 'Thunderstorm';
//     //             return TimesheetService.updateHero(hero);
//     //         }),
//     //         concatMap(() => {
//     //             return TimesheetService.getHero(id);
//     //         })
//     //     ).subscribe(
//     //         hero => {
//     //             console.log(hero);
//     //             expect(hero.name).toBe('Thunderstorm');
//     //         },
//     //         err => fail('re-fetch of updated hero failed')
//     //     );
//     // }), 10000);

//     // it('should create new hero when try to update non-existent hero', async(() => {
//     //     const falseHero = new Hero(12321, 'DryMan');

//     //     TimesheetService.updateHero(falseHero)
//     //         .subscribe(
//     //             hero => {
//     //                 expect(hero.name).toBe(falseHero.name);
//     //             },
//     //             failure
//     //         );
//     // }));

// });