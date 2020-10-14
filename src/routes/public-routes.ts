import React from 'react';
import { RouteProps } from 'react-router';

const HomeView = React.lazy(() => import('../views/HomeView/HomeView'));
const ProjectListView = React.lazy(() => import('../views/ProjectListView/ProjectListView'));
const SkillView = React.lazy(() => import('../views/SkillView/SkillView'));

export default {
  root: {
    component: HomeView,
    path: '/',
  } as RouteProps,
  projects: {
    component: ProjectListView,
    path: '/projects',
  } as RouteProps,
  skills: {
    component: SkillView,
    path: '/skills',
  } as RouteProps,
};
