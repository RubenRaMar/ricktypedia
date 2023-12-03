export interface HandleItemsRealTimeSearch {
  episode?: string;
  query?: string;
  url: string;
  loadItems: (url: string) => Promise<void>;
}

export interface SearchItemsStructure {
  actualSearch: React.MutableRefObject<string>;
  nameToSearch: string;
  onSearchChange?: (value: string) => void;
}
