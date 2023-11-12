export interface HandleItemsRealTimeSearch {
  query: string;
  url: string;
  loadItems: (url: string) => Promise<void>;
}
