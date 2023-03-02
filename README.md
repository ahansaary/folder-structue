# React Project Folder Structure
```
src
├── @business (Business Layer - handle all business logic)
│   ├── auth
│   │   ├── reducer.ts (handle state changes only)
│   │   ├── selectors.ts (select from state)
│   │   ├── types.ts (state types)
│   │   ├── watchers.ts (watch actions for handle side effects)
│   │   └── workers.ts (side effects workers)
│   ├── todo
│   │   ├── reducer.ts
│   │   ├── selectors.ts
│   │   ├── types.ts
│   │   ├── watchers.ts
│   │   └── workers.ts
│   ├── user
│   │
│   ├── hooks.ts
│   ├── middleware.ts
│   ├── reducer.ts
│   └── store.ts
│
├── @data (Data Layer - handle multiple data providers)
│   ├── local
│   ├── remote
│   │   └── client.ts
│   └── repositories
│       ├── auth.repo.ts
│       └── todo.repo.ts
│
├── @domain (Domain Layer - define all data contracts)
│   ├── models
│   │   ├── login.model.ts
│   │   ├── todo.model.ts
│   │   └── user.model.ts
│   └── repositories
│       ├── auth.repo.ts
│       └── todo.repo.ts
│
├── @ui (UI Layer - define all generic and dumb UI components)
│   ├── core
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Dropdown.tsx
│   │   ├── Error.tsx
│   │   ├── Input.tsx
│   │   └── Loading.tsx
│   ├── mobile
│   │   ├── Drawer.tsx
│   │   └── Header.tsx
│   └── web
│       ├── Footer.tsx
│       ├── Header.tsx
│       └── SideMenu.tsx
│
├── app (App - handle all business related UI components & routing)
│   ├── components
│   │   ├── Filters.tsx
│   │   ├── GenericTable.tsx
│   │   └── PageWrapper.tsx
│   ├── hooks
│   ├── index.tsx
│   ├── layouts
│   │   ├── AdminLayout
│   │   ├── AuthLayout
│   │   ├── MobileLayout
│   │   └── UserLayout
│   ├── pages
│   │   ├── auth
│   │   ├── todos
│   │   └── users
│   ├── providers
│   │   ├── I18nProvider.tsx
│   │   └── LayoutProvider.tsx
│   ├── routing
│   └── utils
├── index.tsx