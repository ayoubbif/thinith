import React from 'react';
import { ProcessConsumer } from '../../../contexts/process';
import { Process } from '../../../types/contexts/process';
import RenderProcess from './RenderProcess';

const ProcessesReducer = ([id, process]: [string, Process]) => (
  <RenderProcess key={id} {...process} />
);

const ProcessLoader = (): JSX.Element => (
  <ProcessConsumer>
    {({ processes }) => Object.entries(processes).map(ProcessesReducer)}
  </ProcessConsumer>
);

export default ProcessLoader;
