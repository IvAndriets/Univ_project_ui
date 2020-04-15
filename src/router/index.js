import MainPage from '../components/MainPage';
import StaffListComponent from '../components/staff-components/StaffListComponent';
import StaffAddComponent from '../components/staff-components/StaffAddComponent';
import StaffEditComponent from '../components/staff-components/StaffEditComponent';
import ProjectListComponent from '../components/projects-components/ProjectListComponent';
import ProjectAddComponent from '../components/projects-components/ProjectAddComponent';
import ProjectEditComponent from '../components/projects-components/ProjectEditComponent';
import TimeTrackerListComponent from '../components/time-tracker-components/TimeTrackerListComponent';

export const routes = [
  {
    path: '',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/staff',
    name: 'StaffListComponent',
    component: StaffListComponent,
  },
  {
    path: '/staff/add',
    name: 'StaffAddComponent',
    component: StaffAddComponent,
  },
  {
    path: '/staff/:id',
    name: 'StaffEditComponent',
    component: StaffEditComponent,
    props: true,
  },
  {
    path: '/projects',
    name: 'ProjectListComponent',
    component: ProjectListComponent,
  },
  {
    path: '/projects/add',
    name: 'ProjectAddComponent',
    component: ProjectAddComponent,
    props: true,
  },
  {
    path: '/projects/:id',
    name: 'ProjectEditPage',
    component: ProjectEditComponent,
    props: true,
  },
  {
    path: '/time-tracker',
    name: 'TimeTrackerComponent',
    component: TimeTrackerListComponent,
  },
];
