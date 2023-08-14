# system-file-handler

This repository provides a framework to extract and process cardiopulmonary exercise tests from various systems.

## Features

- **Flexible System Interface**: Easily extensible to support more systems in the future.
- **COSMED Data Extraction**: Extracts demographic and time series data from COSMED system files.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)

### Installation
To extract data from a supported system:

```bash
npm i system-interface
```

## Usage

```javascript
import { SystemInterface } from 'system-interface';

const dataFromFile = SystemInterface.extractFileData('filepath', 'system');
const dataFromBuffer = SystemInterface.extractFileData(buffer, 'system');

// output
{
  demographics: {
    id: '1',
    fname: 'Apurva',
    lname: 'Shah',
    ...
  },
  timeSeries: {
    t: [...],
    power: [...],
    vo2: [...],
    vco2: [...],
    ve: [...],
    hr: [...],
  }
}
```

Valid systems as of right now consist of: `'cosmed'`.

## License

Distributed under the MIT License. See `LICENSE` for more information.
