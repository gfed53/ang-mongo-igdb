// Class used to store our filter settings, specifically used to refine a related search.
export class MyFilters {
  selectedPlatformIDs?: number[];
  dateRange?: {
    after?: any,
    before?: any 
  };
}