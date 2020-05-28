import MainPage from '../components/MainPage';
import StaffListComponent from '../components/staff-components/StaffListComponent';
import StaffAddComponent from '../components/staff-components/StaffAddComponent';
import StaffEditComponent from '../components/staff-components/StaffEditComponent';
import ProjectListComponent from '../components/projects-components/ProjectListComponent';
import ProjectAddComponent from '../components/projects-components/ProjectAddComponent';
import ProjectEditComponent from '../components/projects-components/ProjectEditComponent';
import TimeTrackerListComponent from '../components/time-tracker-components/TimeTrackerListComponent';
import SalaryCalculator from '../components/SalaryCalculator';
import PositionsListComponent from '../components/positions-component/PositionsListComponent';
import PositionAddComponent from '../components/positions-component/PositionAddComponent';
import PositionEditComponent from '../components/positions-component/PositionEditComponent';
import WorkTypeListComponent from '../components/work-type-component/WorkTypeListComponent';
import WorkTypeAddComponent from '../components/work-type-component/WorkTypeAddComponent';
import WorkTypeEditComponent from '../components/work-type-component/WorkTypeEditComponent';
import MonthTimeSheetComponent from '../components/month-timesheet/MonthTimeSheetComponent';
import MonthSheetComponent from '../components/month-timesheet/MonthSheetComponent';
import SalaryTableComponent from '../components/salary-table/SalaryTableComponent';

export const routes = [
  {
    path: '/main',
    name: 'MainPage',
    component: MainPage,
    children: [
      {
        path: 'staff',
        name: 'StaffListComponent',
        component: StaffListComponent,
      },
      {
        path: 'staff/add',
        name: 'StaffAddComponent',
        component: StaffAddComponent,
      },
      {
        path: 'staff/:id',
        name: 'StaffEditComponent',
        component: StaffEditComponent,
        props: true,
      },
      {
        path: 'projects',
        name: 'ProjectListComponent',
        component: ProjectListComponent,
      },
      {
        path: 'projects/add',
        name: 'ProjectAddComponent',
        component: ProjectAddComponent,
        props: true,
      },
      {
        path: 'projects/:id',
        name: 'ProjectEditPage',
        component: ProjectEditComponent,
        props: true,
      },
      {
        path: 'positions',
        name: 'PositionsListComponent',
        component: PositionsListComponent,
      },
      {
        path: 'positions/add',
        name: 'PositionAddComponent',
        component: PositionAddComponent,
      },
      {
        path: 'positions/:id',
        name: 'PositionEditComponent',
        component: PositionEditComponent,
        props: true,
      },
      {
        path: 'work-type',
        name: 'WorkTypeListComponent',
        component: WorkTypeListComponent,
      },
      {
        path: 'work-type/add',
        name: 'WorkTypeAddComponent',
        component: WorkTypeAddComponent,
      },
      {
        path: 'work-type/:id',
        name: 'WorkTypeEditComponent',
        component: WorkTypeEditComponent,
        props: true,
      },
    ],
  },

  {
    path: '/salary-calculator',
    name: 'SalaryCalculator',
    component: SalaryCalculator,
    children: [
      {
        path: 'time-tracker',
        name: 'TimeTrackerComponent',
        component: TimeTrackerListComponent,
      },
      {
        path: 'calculator',
        name: 'SalaryTableComponent',
        component: SalaryTableComponent,
      },
      {
        path: 'time-sheet',
        name:'MonthTimeSheetComponent',
        component: MonthTimeSheetComponent,
      },
      {
        path:'time-sheet/:id',
        name:'MonthSheetComponent',
        component:MonthSheetComponent,
        props: true,
      },
    ],
  },
];
