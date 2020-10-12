import React, { ElementType } from 'react';
import './PublicLayout.scss';
import { RouteComponentProps } from 'react-router-dom';

type Props = {
  component: ElementType;
} & RouteComponentProps;

const PublicLayout: React.FC<Props> = props => {
  const Component = props.component;
  return (
    <article id="main">
      <Component {...props}></Component>
    </article>
  );
};

export default PublicLayout;
