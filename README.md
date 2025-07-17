# Angular Native Federation POC

This project is a **proof of concept (POC)** for testing **Module Federation** using **Native Federation** between two Angular applications:

- **Host application** built with **Angular 19**
- **Remote application** built with **Angular 17**

The goal is to validate how applications with different Angular versions can interoperate using native module federation, and to explore the build and runtime behavior in this setup.

## 🛠️ Getting Started

### Install dependencies for host
```bash
npm install
```

### Install dependencies for remote
```bash
cd apps/angular17-app && npm install
```
### Build the remote application
```bash
npm run build:remote
```

### Build the host application
```bash
npm run build:host
```

### To build the entire project (both host and remote):
```bash
npm run build:all
```

### Serve built production bundle:
```bash
npm run serve:dist
```
