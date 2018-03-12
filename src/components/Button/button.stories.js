import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './index.js';

storiesOf('Button', module)
  .add('without props', () => <Button className="button">Cadastrar</Button>)