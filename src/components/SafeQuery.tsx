import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { type ReactNode } from "react";

type SafeQueryProps<T> = UseQueryOptions<T> & {
  children: (data: T) => ReactNode;
  loadingFallback?: ReactNode;
  errorFallback?: (error: Error) => ReactNode;
};

/**
 * A component that wraps around a `useQuery` hook from React Query,
 * providing a convenient way to handle loading and error states.
 *
 * @template T - The type of data expected from the query.
 *
 * @param {object} props - The props for the SafeQuery component.
 * @param {(data: T) => ReactNode} props.children - A function that receives the data and returns a ReactNode to be rendered when the data is available.
 * @param {ReactNode} [props.loadingFallback] - An optional ReactNode to be rendered while the data is being fetched.
 * @param {(error: Error) => ReactNode} [props.errorFallback] - An optional function that receives an error and returns a ReactNode to be rendered in case of an error.
 * @param {UseQueryOptions<T>} props.options - Additional options to be passed to the `useQuery` hook.
 *
 * @returns The rendered output based on the query state.
 */
export function SafeQuery<T>({
  children,
  loadingFallback,
  errorFallback,
  ...options
}: Readonly<SafeQueryProps<T>>) {
  const { data, isFetching, isError, error } = useQuery<T>({
    ...options,
  });

  if (isFetching) return loadingFallback;
  if (isError) return errorFallback?.(error);

  return <>{data && children(data)}</>;
}
