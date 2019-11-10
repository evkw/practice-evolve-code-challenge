import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Timesheet: {},
  Type: {}
};

const pluralNames = { 
  Timesheet: 'TimesheetEntries',
  Type: 'Types'
 };

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
