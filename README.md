# system-file-handler

This repository provides a framework to extract and process cardiopulmonary exercise tests from various systems.

## Table of Contents

1. [Features](#features)
2. [Getting Started](#getting-started)
3. [Usage](#usage)
4. [Contributing](#contributing)
5. [License](#license)

## Features

- **Flexible System Interface**: Easily extensible to support more systems in the future.
- **COSMED Data Extraction**: Extracts demographic and time series data from COSMED system files.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)

### Installation

1. Clone the repo:
```sh
git clone https://github.com/yourusername/system-data-extraction.git
```

2. Install NPM packages:
```sh
npm install
```

## Usage

To extract data from a system:

```javascript
import { SystemInterface } from 'path-to-your-main-file';

const result = SystemInterface.extractFileData('path-to-your-file', 'cosmed');
console.log(result);
```

Replace `'path-to-your-file'` with the path to the data file you want to extract and `'cosmed'` with the system name.

## Contributing

Contributions are what make the open-source community an incredible place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Clone the project.
2. Create your feature branch: `git checkout -B feature/YourFeatureName`
3. Commit your changes: `git commit`
4. Push to the branch: `git push origin feature/YourFeatureName`
5. Open a pull request

## License

Distributed under the MIT License. See `LICENSE` for more information.
