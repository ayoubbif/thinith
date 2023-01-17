import type { Processes } from 'contexts/process/directory';
import processDirectory from 'contexts/process/directory';

export const closeProcess =
  (processId: string) =>
  ({
    [processId]: _closedProcess,
    ...remainingProcesses
  }: Processes): Processes =>
    remainingProcesses;

export const createPid = (processId: string, url: string): string =>
  url ? `${processId}_${url}` : processId;

export const openProcess =
  (processId: string, url: string) =>
  (currentProcesses: Processes): Processes => {
    const id = createPid(processId, url);

    return currentProcesses[processId] || !processDirectory[processId]
      ? currentProcesses
      : {
          ...currentProcesses,
          [id]: {
            ...processDirectory[processId],
            url
          }
        };
  };

export const toggleProcessSetting =
  (processId: string, setting: 'maximized' | 'minimized') =>
  (currentProcesses: Processes): Processes => {
    const { ...newProcesses } = currentProcesses;

    newProcesses[processId][setting] = !newProcesses[processId][setting];

    return newProcesses;
  };

export const maximizeProcess =
  (processId: string) =>
  (Processes: Processes): Processes =>
    toggleProcessSetting(processId, 'maximized')(Processes);

export const minimizeProcess =
  (processId: string) =>
  (Processes: Processes): Processes =>
    toggleProcessSetting(processId, 'minimized')(Processes);