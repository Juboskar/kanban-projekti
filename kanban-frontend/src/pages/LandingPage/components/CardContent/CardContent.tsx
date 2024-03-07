import React from 'react';
import Card from '../../../../components/Card';

type Props = {
  children: [React.ReactNode, React.ReactNode];
  showLogin: boolean;
};

const CardContent = ({ showLogin, children }: Props) => {
  if (showLogin) {
    return <Card>{children[1]}</Card>;
  }

  return <Card>{children[0]}</Card>;
};

export default CardContent;
