import { useFileSystem } from 'contexts/fileSystem';
import React, { useCallback } from 'react';

const haltDragEvent = (event: React.DragEvent): void => {
  event.preventDefault();
  event.stopPropagation();
};

type FileDrop = {
  onDrop: (event: React.DragEvent<HTMLElement>) => void;
  onDragOver: (event: React.DragEvent<HTMLElement>) => void;
};

const useFileDrop = (directory: string, getFiles: () => void): FileDrop => {
  const { fs } = useFileSystem();
  const onDrop = useCallback(
    (event: React.DragEvent<HTMLElement>) => {
      haltDragEvent(event);

      const { files: [file] = [] } = event.dataTransfer || {};
      const reader = new FileReader();

      reader.onload = ({ target }) =>
        fs?.writeFile(
          `${directory}/${file.name}`,
          Buffer.from(new Uint8Array(target?.result as ArrayBuffer)),
          getFiles
        );

      reader.readAsArrayBuffer(file);
    },
    [directory, fs, getFiles]
  );

  return {
    onDragOver: haltDragEvent,
    onDrop
  };
};

export default useFileDrop;
