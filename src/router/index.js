import MainPage from '../components/MainPage';
import StaffComponent from '../components/Staff-Components/StaffComponent';
import AddNewStaffMemberComponent from '../components/Staff-Components/AddNewStaffMemberComponent';
import ProjectComponent from '../components/ProjectsComponents/ProjectComponent';
import AddProjectPage from '../components/ProjectsComponents/AddProjectPage';
import ProjectPage from '../components/ProjectsComponents/ProjectPage';
import TimeTrackerComponent from '../components/TimeTrackerComponents/TimeTrackerComponent';
import StaffMemberPage from '../components/Staff-Components/StaffMemberPage';

export const routes = [
  {
    path: '',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/staff',
    name: 'StaffComponent',
    component: StaffComponent,
  },
  {
    path: '/staff/add',
    name: 'AddNewStaffMemberComponent',
    component: AddNewStaffMemberComponent,
  },
  {
    path: '/staff/:id',
    name: 'StaffMemberPage',
    component: StaffMemberPage,
    props: true,
  },
  {
    path: '/projects',
    name: 'ProjectComponent',
    component: ProjectComponent,
  },
  {
    path: '/projects/add',
    name: 'AddProjectPage',
    component: AddProjectPage,
    props: true,
  },
  {
    path: '/projects/:id',
    name: 'ProjectPage',
    component: ProjectPage,
    props: true,
  },
  {
    path: '/time-tracker',
    name: 'TimeTrackerComponent',
    component: TimeTrackerComponent,
  },
];
