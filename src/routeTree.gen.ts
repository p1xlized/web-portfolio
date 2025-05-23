/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as MusicImport } from './routes/music'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const MusicRoute = MusicImport.update({
  id: '/music',
  path: '/music',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/music': {
      id: '/music'
      path: '/music'
      fullPath: '/music'
      preLoaderRoute: typeof MusicImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/music': typeof MusicRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/music': typeof MusicRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/music': typeof MusicRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/music'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/music'
  id: '__root__' | '/' | '/music'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  MusicRoute: typeof MusicRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  MusicRoute: MusicRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/music"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/music": {
      "filePath": "music.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
