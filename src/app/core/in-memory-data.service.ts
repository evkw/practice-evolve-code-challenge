import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UUID } from 'angular2-uuid';
import { TimesheetStates } from '@features/timesheet/constants';

export class InMemDataService implements InMemoryDbService {
    createDb() {
        let timesheetentries = [
            {
                id: UUID.UUID(),
                state: TimesheetStates.Active,
                title: 'Task 1',
                type: 'Telephone Call',
                duration: 7200,
                hourlyRate: 250.5,
                isEditing: false,
                isSelected: false
            },
            {
                id: UUID.UUID(),
                state: TimesheetStates.Submitted,
                title: 'Task 2',
                type: 'Research and Drafting Document',
                duration: 10980,
                hourlyRate: 120.0,
                isEditing: false,
                isSelected: false
            }
        ];

        let types = [
            {id: 1, name: 'Telephone Call'},
            {id: 2, name: 'Research'},
            {id: 3, name: 'Drafting Document'}
        ];
        
        return { timesheetentries, types };
    }
}