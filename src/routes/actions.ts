import { nth } from 'lodash';
import { NavigationContainerRef } from '@react-navigation/core';
import {
  CommonActions,
  NavigationAction,
  StackActions,
} from '@react-navigation/native';
import { Storage } from '~/services';
import stores from '~/stores';
import { RoutesPrivate, RoutesPublic, StacksRoutes } from './routing';

let navigator: NavigationContainerRef;

export function setTopLevelNavigator(
  navigatorRef: NavigationContainerRef,
): void {
  navigator = navigatorRef;
}

export function dispatch(fn: NavigationAction): void {
  navigator.dispatch(fn);
}

export function resetRouteToTop(routeName: string, params?: Unknown): void {
  navigator.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: routeName,
          params,
        },
      ],
    }),
  );
}

export const push = (routeName: string, params?: Unknown): void => {
  stores.app.setNavigationParams({ route: routeName }); // not delete this line
  navigator.dispatch(StackActions.push(routeName, params));
};

export const pop = (index?: number): void => {
  navigator.dispatch(StackActions.pop(index));
};

export function to(routeName: string, params?: Unknown): void {
  stores.app.setNavigationParams({ route: routeName }); // not delete this line
  navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params,
    }),
  );
}
export function toStack(
  routeStack: string,
  routeName: string,
  params?: Unknown,
): void {
  stores.app.setNavigationParams({ route: routeName }); // not delete this line
  navigator.dispatch(
    CommonActions.navigate(routeStack, {
      screen: routeName,
      params,
    }),
  );
}

export function goBack(): void {
  navigator.dispatch(state => {
    const route = nth(state.routes, -2);
    stores.app.setNavigationParams({
      route: route?.name || RoutesPrivate.JOBS,
    }); // not delete this line

    return CommonActions.goBack();
  });
}

export async function logout(): Promise<void> {
  stores.app.setNavigationParams({ route: RoutesPublic.WELCOME });
  stores.user.clearUserData();
  resetRouteToTop(StacksRoutes.PUBLIC, {
    name: RoutesPublic.WELCOME,
  });

  Storage.clear();
}

export function inPublic(routeName: string, params?: Unknown): void {
  stores.app.setNavigationParams({ route: routeName }); // not delete this line
  resetRouteToTop(StacksRoutes.PUBLIC, {
    name: routeName,
    params,
  });
}

export function inPrivate(routeName: string, params?: Unknown): void {
  stores.app.setNavigationParams({ route: routeName }); // not delete this line
  resetRouteToTop(StacksRoutes.PRIVATE, {
    name: routeName,
    params,
  });
}

export function goReset(routeName: string, params?: Unknown): void {
  stores.app.setNavigationParams({ route: routeName });
  resetRouteToTop(routeName, {
    name: routeName,
    params,
  });
}

export function replace(routeName: string, params?: Unknown): void {
  stores.app.setNavigationParams({ route: routeName });
  navigator.dispatch(StackActions.replace(routeName, params));
}

export default {
  to,
  replace,
  logout,
  goBack,
  setTopLevelNavigator,
  resetRouteToTop,
  goReset,
  inPublic,
  inPrivate,
  push,
  pop,
  toStack,
};
