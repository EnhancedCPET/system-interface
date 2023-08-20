# system-file-handler

This repository provides a framework to extract and process cardiopulmonary exercise tests from various systems.

## Table of Contents

- [system-file-handler](#system-file-handler)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Installation](#installation-1)
    - [Requirements](#requirements)
    - [Steps](#steps)
    - [Commit Formatting](#commit-formatting)
    - [Pull Request Process](#pull-request-process)
    - [Coding Standards](#coding-standards)
  - [License](#license)

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

## Contribution Guidelines

Interested in contributing? Here's how to get started.

## Installation

### Requirements

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)

### Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/system-file-handler.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd system-file-handler
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Compile TypeScript Code:**
   If you make changes to the TypeScript files, you will need to compile them to JavaScript:

   ```bash
   tsc
   ```

5. **Usage:**
   You can now use the package locally. To use it in other projects, you can link it:
   ```bash
   npm link
   ```

### Commit Formatting

All commits into the `main` branch must follow the [conventional commit formatting](https://www.conventionalcommits.org/en/v1.0.0/).

### Pull Request Process

1. Please ensure that you're squashing your commits before submitting a PR. We follow the "Squash and merge" policy.
2. Make sure to create changes on a separate branch before opening a pull request.
3. All pull requests must be approved before merging.
4. Ensure all checks are passing before requesting a review or merging your PR.

### Coding Standards

1. Before committing your changes, make sure to run `npm run prettier` to format your code.
2. Also, ensure no linting errors by running `npm run lint`.

## License

Distributed under the MIT License. See `LICENSE` for more information.
